const { desktopCapturer } = require('electron');
const { writeFile } = require('fs').promises;
const { dialog, Menu, MenuItem } = require('@electron/remote');

interface VideoSource {
  id: string;
  name: string;
}

// Global state
let mediaRecorder: MediaRecorder | null = null;
const recordedChunks: Blob[] = [];

// DOM Elements
const videoElement = document.querySelector('video') as HTMLVideoElement;
const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
const videoSelectBtn = document.getElementById('videoSelectBtn') as HTMLButtonElement;

// Button Event Handlers
startBtn.onclick = () => {
  if (mediaRecorder) {
    mediaRecorder.start();
    startBtn.classList.add('is-danger');
    startBtn.innerText = 'Recording';
  }
};

stopBtn.onclick = () => {
  if (mediaRecorder) {
    mediaRecorder.stop();
    startBtn.classList.remove('is-danger');
    startBtn.innerText = 'Start';
  }
};

videoSelectBtn.onclick = getVideoSources;

// Get the available video sources
async function getVideoSources(): Promise<void> {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });

  const menu = new Menu();
  inputSources.forEach(source => {
    menu.append(new MenuItem({
      label: source.name,
      click: () => selectSource(source)
    }));
  });

  menu.popup();
}

// Change the videoSource window to record
async function selectSource(source: VideoSource): Promise<void> {
  videoSelectBtn.innerText = source.name;

  const constraints = {
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: source.id
      }
    }
  };

  try {
    // Create a Stream
    const stream = await navigator.mediaDevices.getUserMedia(constraints as MediaStreamConstraints);

    // Preview the source in a video element
    videoElement.srcObject = stream;
    videoElement.play();

    // Create the Media Recorder
    const options = { mimeType: 'video/webm; codecs=vp9' };
    mediaRecorder = new MediaRecorder(stream, options);

    // Register Event Handlers
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.onstop = handleStop;
  } catch (e) {
    console.error('Error selecting video source:', e);
  }
}

// Captures all recorded chunks
function handleDataAvailable(e: BlobEvent): void {
  console.log('video data available');
  recordedChunks.push(e.data);
}

// Saves the video file on stop
async function handleStop(): Promise<void> {
  try {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm; codecs=vp9'
    });

    const buffer = Buffer.from(await blob.arrayBuffer());

    const { filePath } = await dialog.showSaveDialog({
      buttonLabel: 'Save video',
      defaultPath: `recording-${Date.now()}.webm`
    });

    if (filePath) {
      await writeFile(filePath, buffer);
      console.log('Video saved successfully!');
    }
  } catch (e) {
    console.error('Error saving video:', e);
  }
} 