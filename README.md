# MECore - FoundryVTT Character Sheet UI Library

A minimal UI library for FoundryVTT character sheets using React, TypeScript, and Material UI. This module provides a modern, component-based approach to building character sheets in FoundryVTT.

## Features

- React-based UI components
- TypeScript for type safety
- Material UI integration
- SASS styling support
- Test-Driven Development approach

## Installation in FoundryVTT

### Method 1: Install via Manifest URL
1. In FoundryVTT, navigate to the "Add-on Modules" tab
2. Click "Install Module"
3. Paste the following manifest URL:
   ```
   https://github.com/njisaf/mecore/releases/latest/download/module.json
   ```
4. Click "Install"

### Method 2: Manual Installation
1. Download the latest release from the [releases page](https://github.com/njisaf/mecore/releases)
2. Extract the zip file to your FoundryVTT modules directory
3. Restart FoundryVTT
4. Enable the module in your world's module settings

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- FoundryVTT (v10 or higher)

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/njisaf/mecore.git
cd mecore
```

2. Install dependencies:
```bash
npm install
```

- Start development server:
```bash
npm run dev
```

- Run tests:
```bash
npm test
```

- Build for production:
```bash
npm run build
```

## Project Structure

```
foundry-minimal-ui-library/
├── dist/                  # Compiled files
├── src/
│   ├── components/       # React components
│   ├── datamodels/      # Foundry data models
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # SASS styles
│   └── utils/           # Utility functions
├── tests/               # Test files
└── templates/           # FoundryVTT templates
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and ensure they pass
4. Submit a pull request

## License

MIT License - see LICENSE file for details
