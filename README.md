# Pixel Capture 🎥 

![version](https://img.shields.io/badge/version-1.0.1-orange.svg)
![author](https://img.shields.io/badge/Created--by-SumonRayy-blue)
![follow](https://img.shields.io/github/followers/SumonRayy?label=Follow&style=social)
![license](https://img.shields.io/badge/license-MIT-green.svg)

> 🚀 A modern desktop application for capturing your screen with ease! Record specific windows or your entire desktop and save them as video files.

## ✨ Features

- 🖥️ Record specific window or full desktop
- 🎬 High-quality video output
- 🎯 Simple and intuitive interface
- 💾 Save recordings locally
- 🖌️ Modern UI with Bulma CSS

## 🛠️ Built With

<p align="center">
  <a href="https://www.electronjs.org/">
    <img src="https://www.electronjs.org/assets/img/logo.svg" alt="Electron" width="40" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
  </a>
  <a href="https://bulma.io/">
    <img src="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" alt="Bulma" width="40" height="40"/>
  </a>
  <a href="https://webpack.js.org/">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg" alt="Webpack" width="40" height="40"/>
  </a>
</p>

## 📁 Project Structure

```
electron-screen-recorder/
├── src/                    # Source files
│   ├── index.html         # Main HTML file
│   ├── index.css          # Styles
│   ├── main.ts            # Main process
│   ├── renderer.ts        # Renderer process
│   └── preload.ts         # Preload script
├── .webpack/              # Webpack build output
├── out/                   # Production build output
├── webpack.*.config.js    # Webpack configuration
└── package.json          # Project configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/electron-screen-recorder.git
cd electron-screen-recorder
```

2. Install dependencies
```bash
npm install
```

### Development

Run the app in development mode:
```bash
npm start
```

### Building

Create platform-specific distributables:
```bash
npm run make
```

This will generate distributables in the `out` folder for your current platform:
- Windows: `.exe` installer
- macOS: `.dmg` installer
- Linux: `.deb` and `.rpm` packages

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Special thanks to [fireship.io](https://fireship.io/) for their excellent Electron.js tutorials
- Built with [Electron Forge](https://www.electronforge.io/)

## 👨‍💻 Author

**Sumon Roy**
- GitHub: [@SumonRayy](https://github.com/SumonRayy)

---

<p align="center">Made with ❤️ and ⚡ Electron</p>
