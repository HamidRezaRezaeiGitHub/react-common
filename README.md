# React Common

A reusable collection of React components, utilities, services, and configurations that I commonly use across projects.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful and accessible component library
- **Jest** - Testing framework with React Testing Library

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components and layouts
├── test/              # Test files and test utilities
│   └── setupTests.ts  # Jest test setup
├── contexts/          # React context providers
├── services/          # API and external services
├── utils/             # General utility functions
│   └── utils.ts       # Shadcn/ui utilities (cn function)
├── main.tsx           # Application entry point
├── globals.css        # Global styles with Tailwind
└── vite-env.d.ts      # Vite environment types
```

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting

```bash
npm run lint
```

## 📦 What's Included

This repository provides a clean, organized structure ready for your common React components and utilities:

### Folder Structure
- **components/** - Empty, ready for your reusable UI components
- **pages/** - Contains the main App.tsx page component
- **test/** - Contains test files and Jest setup configuration
- **contexts/** - Empty, ready for React context providers
- **services/** - Empty, ready for API and external services
- **utils/** - Contains Shadcn/ui utility functions (cn function)

### Ready-to-Use
- **Hello World App** - A working React application with Tailwind CSS
- **Shadcn/ui Integration** - Complete setup with utility functions
- **Testing Environment** - Jest + React Testing Library configured and working
- **TypeScript Configuration** - Strict TypeScript setup with path aliases

## 🎨 Tailwind Configuration

The project includes a comprehensive Tailwind setup with:
- Shadcn/ui design system integration
- Dark mode support
- Custom color variables
- Form and typography plugins

## 🧪 Testing Setup

Jest is configured with:
- TypeScript support
- React Testing Library
- jsdom environment
- Path mapping for imports
- Coverage reporting

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `jest.config.js` - Jest testing configuration
- `components.json` - Shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## 📚 Usage in Other Projects

To use this common library in other projects:

1. Copy the components/utilities you need
2. Ensure you have the same dependencies installed
3. Copy the relevant configuration files
4. Adapt the imports to match your project structure

## 🤝 Contributing

This is a personal collection, but feel free to:
- Suggest improvements
- Report issues
- Submit pull requestsØ