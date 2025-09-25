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
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   └── index.ts        # Component exports
├── hooks/              # Custom React hooks
│   └── index.ts        # useLocalStorage, useDebounce, useMediaQuery
├── lib/                # Library utilities
│   └── utils.ts        # Shadcn/ui utilities (cn function)
├── services/           # API and external services
│   └── api.ts          # Base API service class
├── types/              # TypeScript type definitions
│   └── index.ts        # Common types and interfaces
├── utils/              # General utility functions
│   └── common.ts       # Date formatting, text utils, etc.
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── globals.css         # Global styles with Tailwind
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

### Components
- **Button** - Customizable button with variants, sizes, and loading states

### Hooks
- **useLocalStorage** - Persist state in localStorage
- **useDebounce** - Debounce values to improve performance
- **useMediaQuery** - React to media query changes

### Services
- **ApiService** - Base class for HTTP requests with error handling

### Utilities
- **formatDate** - Format dates for display
- **truncateText** - Truncate long text with ellipsis
- **capitalize** - Capitalize strings
- **generateId** - Generate random IDs
- **debounce** - Debounce function calls
- **isEmpty** - Check if values are empty

### Types
- Common TypeScript interfaces and types for forms, API responses, users, etc.

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
- Submit pull requests

## 📄 License

MIT License - feel free to use in your projects.