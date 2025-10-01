# React Common Components ## 📂 Project Structure

```
src/
├── components/
│   ├── auth/              # Authentication components (7 fields + 2 forms)
│   ├── address/           # Address input components (8 fields + 1 form)
│   ├── navbar/            # Navigation components (4 components + 1 flexible navbar)
│   ├── theme/             # Theme management components
│   └── ui/                # Shadcn/ui base components (17 components)
├── contexts/
│   ├── ThemeContext.tsx   # Theme management with persistence
│   ├── AppProviders.tsx   # Application providers wrapper
│   └── RouterProvider.tsx # React Router setup
├── services/
│   └── validation/        # Comprehensive validation service
├── utils/
│   └── utils.ts           # Utility functions (cn, etc.)
├── pages/                 # Page components and layouts
├── test/                  # Test setup and utilities
├── main.tsx              # Application entry point
├── globals.css           # Global styles with Tailwind
└── vite-env.d.ts         # Vite environment types
```ehensive collection of production-ready, reusable React components, services, utilities, and configurations designed for modern React applications. This library provides flexible, type-safe, and well-tested building blocks to accelerate development across projects.

## 🌟 Key Features

- **🧩 Modular Architecture** - Mix and match components based on your needs
- **🔒 Type-Safe** - Full TypeScript support with comprehensive interfaces
- **♿ Accessible** - Built with accessibility best practices (ARIA, keyboard navigation)
- **🎨 Themeable** - Dark/light mode support with system preference detection
- **✅ Well-Tested** - Extensive test coverage with Jest and React Testing Library
- **📱 Responsive** - Mobile-first design with Tailwind CSS
- **🔄 Validation-Ready** - Integrated validation service with smart field validation
- **📚 Documentation** - Comprehensive documentation for each component package

## 🚀 Tech Stack

- **React 18+** - Modern React with hooks and concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful and accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Jest** - Testing framework with React Testing Library
- **Lucide React** - Modern icon library

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

## 📦 Component Packages

### 🔐 Authentication Components (`/components/auth/`)
Complete authentication system with individual field components and composite forms.

**Individual Components (7):**
- `EmailField` - Email validation with autofill detection
- `PasswordField` - Password input with visibility toggle
- `ConfirmPasswordField` - Password confirmation with matching validation
- `UsernameField` - Username validation with character rules
- `UsernameEmailField` - Flexible login field (username or email)
- `NameField` - First/last name input
- `PhoneField` - Phone number validation

**Composite Forms (2):**
- `LoginForm` - Complete login form with validation orchestration
- `FlexibleSignUpForm` - Configurable registration form with multiple presets

### 🏠 Address Components (`/components/address/`)
Comprehensive address input system with international support.

**Components (9):**
- `UnitNumber` - Apartment/suite number
- `StreetNumber` - Street address number
- `StreetName` - Street name validation
- `StreetNumberName` - Combined street number and name
- `City` - City name validation
- `StateProvince` - State/province selection
- `PostalCode` - Postal/ZIP code validation
- `Country` - Country selection
- `FlexibleAddressForm` - Complete address form

### 🧭 Navigation Components (`/components/navbar/`)
Flexible navigation system with customizable components.

**Components (5):**
- `Logo` - Customizable brand logo with text
- `LoginButton` - Authentication entry point
- `SignUpButton` - Registration entry point  
- `Avatar` - User profile display
- `FlexibleNavbar` - Complete navigation bar

### 🎨 Theme System (`/components/theme/` & `/contexts/`)
Complete theme management with dark/light/system modes.

**Components:**
- `ThemeToggle` - Multiple toggle variants (switch, dropdown, button)
- `ThemeShowcase` - Theme preview component
- `ThemeContext` - Context provider with localStorage persistence

### 🧱 UI Components (`/components/ui/`)
17 Shadcn/ui components ready for customization:
`Avatar`, `Badge`, `Button`, `Card`, `Collapsible`, `DropdownMenu`, `Input`, `Label`, `NavigationMenu`, `Popover`, `Resizable`, `Sheet`, `Switch`, `Table`, `Tabs`, `Textarea`, `Toggle`

### ✅ Validation Service (`/services/validation/`)
Comprehensive validation system with smart field integration.

**Features:**
- `ValidationService` - Centralized validation rules
- `useSmartFieldValidation` - Hook with autofill detection
- Touch-based validation UX
- Type-safe validation rules
- Custom validation support

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

## � Step-by-Step Adoption Guide

This guide will help you integrate the reusable components and services from this library into your existing or new React projects.

### Phase 1: Project Setup and Dependencies

#### 1.1 Install Required Dependencies

```bash
# Core React dependencies
npm install react react-dom react-router-dom

# UI and styling dependencies
npm install @radix-ui/react-avatar @radix-ui/react-collapsible @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-navigation-menu  
npm install @radix-ui/react-popover @radix-ui/react-slot @radix-ui/react-switch
npm install @radix-ui/react-tabs @radix-ui/react-toggle

# Utility libraries
npm install class-variance-authority clsx tailwind-merge lucide-react
npm install react-resizable-panels

# Development dependencies
npm install -D typescript @types/react @types/react-dom
npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography
npm install -D @vitejs/plugin-react vite
npm install -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

#### 1.2 Copy Configuration Files

Copy these configuration files to your project root:

```bash
# Essential configuration files
cp tailwind.config.js your-project/
cp components.json your-project/
cp postcss.config.js your-project/
cp tsconfig.json your-project/  # Modify as needed
cp jest.config.js your-project/  # If you want testing setup
```

#### 1.3 Setup Global Styles

Copy the global CSS file and update your main entry point:

```bash
# Copy global styles
cp src/globals.css your-project/src/

# Update your main.tsx or index.tsx
import './globals.css'
```

### Phase 2: Core Infrastructure Setup

#### 2.1 Setup Utility Functions

Copy the utilities that provide essential functionality:

```bash
# Copy utility functions
cp -r src/utils/ your-project/src/
```

#### 2.2 Setup Base UI Components

Copy the Shadcn/ui components (these are dependencies for other components):

```bash
# Copy all UI components
cp -r src/components/ui/ your-project/src/components/
```

### Phase 3: Service Integration

#### 3.1 Setup Validation Service (Recommended)

The validation service provides smart field validation used by auth and address components:

```bash
# Copy validation service
cp -r src/services/validation/ your-project/src/services/
```

**Basic usage:**
```tsx
import { useSmartFieldValidation } from './services/validation';

const MyComponent = () => {
  const {
    value,
    error,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleFocus
  } = useSmartFieldValidation({
    fieldType: 'email',
    required: true,
    onValidationChange: (isValid, error) => {
      console.log('Field is valid:', isValid, 'Error:', error);
    }
  });

  return (
    <input
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      className={error && touched ? 'border-red-500' : ''}
    />
  );
};
```

### Phase 4: Context and Theme Setup

#### 4.1 Setup Theme System (Optional but Recommended)

```bash
# Copy theme context and components
cp src/contexts/ThemeContext.tsx your-project/src/contexts/
cp -r src/components/theme/ your-project/src/components/
```

**Integration:**
```tsx
// In your App.tsx or main.tsx
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/theme/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <header>
          <ThemeToggle />
        </header>
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

#### 4.2 Setup Application Providers (Optional)

For complete provider setup including routing:

```bash
# Copy provider configurations
cp src/contexts/AppProviders.tsx your-project/src/contexts/
cp src/contexts/RouterProvider.tsx your-project/src/contexts/  # If using React Router
```

### Phase 5: Component Integration by Package

#### 5.1 Authentication Components

Choose the components you need:

```bash
# Copy individual auth components (pick what you need)
cp src/components/auth/Email.tsx your-project/src/components/auth/
cp src/components/auth/Password.tsx your-project/src/components/auth/
cp src/components/auth/LoginForm.tsx your-project/src/components/auth/
cp src/components/auth/FlexibleSignUpForm.tsx your-project/src/components/auth/

# Or copy the entire auth package
cp -r src/components/auth/ your-project/src/components/
```

**Basic usage:**
```tsx
import { LoginForm } from './components/auth/LoginForm';
import { EmailField, PasswordField } from './components/auth';

// Using individual components
const CustomLoginForm = () => (
  <form>
    <EmailField 
      required={true}
      onValidationChange={(isValid, error) => console.log(isValid, error)}
    />
    <PasswordField 
      required={true}
      onValidationChange={(isValid, error) => console.log(isValid, error)}
    />
  </form>
);

// Using complete form
const LoginPage = () => (
  <LoginForm 
    onSubmit={(data) => console.log('Login data:', data)}
    onValidationChange={(isFormValid) => console.log('Form valid:', isFormValid)}
  />
);
```

#### 5.2 Address Components

```bash
# Copy individual address components or entire package
cp -r src/components/address/ your-project/src/components/

# Copy the index file for easy imports
cp src/components/address/index.ts your-project/src/components/address/
```

**Usage:**
```tsx
import { FlexibleAddressForm, CityField } from './components/address';

const AddressPage = () => (
  <FlexibleAddressForm 
    onSubmit={(addressData) => console.log('Address:', addressData)}
    onValidationChange={(isValid) => console.log('Address valid:', isValid)}
  />
);
```

#### 5.3 Navigation Components

```bash
# Copy navbar components
cp -r src/components/navbar/ your-project/src/components/
```

**Usage:**
```tsx
import { FlexibleNavbar } from './components/navbar';

const Layout = ({ children }) => (
  <div>
    <FlexibleNavbar
      brandText="Your App"
      logoSvg={<YourLogo />}
      showAuth={true}
      onLoginClick={() => navigate('/login')}
      onSignUpClick={() => navigate('/signup')}
      user={{ name: 'John Doe' }}
      onProfileClick={() => navigate('/profile')}
    />
    {children}
  </div>
);
```

### Phase 6: Testing Integration (Optional)

#### 6.1 Copy Test Setup

```bash
# Copy test configuration and setup
cp src/test/setupTests.ts your-project/src/test/
cp jest.config.js your-project/

# Copy example test files for reference
cp src/components/auth/*.test.tsx your-project/src/components/auth/
```

#### 6.2 Update Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Phase 7: Customization and Integration

#### 7.1 Customize Component Styles

The components use Tailwind CSS classes that can be customized through your `tailwind.config.js`:

```javascript
// tailwind.config.js
module.exports = {
  // ... existing config
  theme: {
    extend: {
      colors: {
        // Customize the color palette
        primary: {
          DEFAULT: '#your-primary-color',
          // ... other shades
        }
      }
    }
  }
}
```

#### 7.2 Integrate with Your State Management

The components are designed to work with any state management solution:

```tsx
// Example with Redux
import { useDispatch } from 'react-redux';
import { LoginForm } from './components/auth/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  
  return (
    <LoginForm 
      onSubmit={(loginData) => {
        dispatch(loginUser(loginData));
      }}
    />
  );
};

// Example with Zustand
import { useAuthStore } from './store/authStore';

const LoginPage = () => {
  const login = useAuthStore(state => state.login);
  
  return <LoginForm onSubmit={login} />;
};
```

### Phase 8: Gradual Migration Strategy

For existing projects, consider this incremental approach:

#### 8.1 Start Small
1. Begin with utility functions and UI components
2. Add theme system for immediate visual improvements
3. Replace one form at a time with auth components

#### 8.2 Component-by-Component Migration
1. **Week 1**: Setup infrastructure (utils, UI components, validation)
2. **Week 2**: Integrate theme system
3. **Week 3**: Replace login/signup forms
4. **Week 4**: Add address components where needed
5. **Week 5**: Integrate navigation components

#### 8.3 Testing Strategy
1. Copy test files alongside components
2. Run tests to ensure integration works
3. Customize tests for your specific use cases

### 🔧 Troubleshooting Common Issues

#### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported
- Verify CSS variables are defined for theme colors

#### Import Errors
- Check that all required dependencies are installed
- Update import paths to match your project structure
- Ensure TypeScript configuration includes the component directories

#### Validation Not Working
- Verify the validation service is properly imported
- Check that required props are passed to components
- Ensure the validation service dependencies are met

### 📋 Integration Checklist

- [ ] Install all required dependencies
- [ ] Copy and configure essential config files
- [ ] Setup global styles and Tailwind CSS
- [ ] Copy utility functions and UI components
- [ ] Integrate validation service
- [ ] Setup theme system (optional)
- [ ] Copy and integrate desired component packages
- [ ] Setup testing environment (optional)
- [ ] Customize styles and theming
- [ ] Test integration with your existing state management
- [ ] Update documentation for your team

## 📚 Documentation

Each component package includes comprehensive documentation:

- **`/components/auth/README.md`** - Complete authentication component documentation
- **`/components/address/README.md`** - Address components usage and examples
- **`/components/navbar/README.md`** - Navigation system documentation  
- **`/services/validation/README.md`** - Validation service comprehensive guide
- **`/contexts/ThemeContext.README.md`** - Theme management documentation

## 🔍 Quick Reference

### Most Common Use Cases

**1. Add Login/Signup to Your App:**
```bash
# Copy auth components and validation service
cp -r src/components/auth/ your-project/src/components/
cp -r src/services/validation/ your-project/src/services/
cp -r src/components/ui/ your-project/src/components/
```

**2. Add Theme Toggle:**
```bash
# Copy theme system
cp src/contexts/ThemeContext.tsx your-project/src/contexts/
cp -r src/components/theme/ your-project/src/components/
```

**3. Add Complete Navigation:**
```bash
# Copy navbar components
cp -r src/components/navbar/ your-project/src/components/
cp -r src/components/ui/ your-project/src/components/
```

### Component Dependencies

| Component Package      | Required Dependencies                                                               | Optional Dependencies      |
| ---------------------- | ----------------------------------------------------------------------------------- | -------------------------- |
| **UI Components**      | `@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` | None                       |
| **Auth Components**    | UI Components, Validation Service                                                   | Theme System               |
| **Address Components** | UI Components, Validation Service                                                   | None                       |
| **Navbar Components**  | UI Components                                                                       | Theme System, React Router |
| **Theme System**       | None                                                                                | None                       |
| **Validation Service** | None                                                                                | None                       |

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

**Test Coverage by Package:**
- **Auth Components**: 113+ test scenarios across 9 components
- **Address Components**: 120+ test scenarios across 9 components  
- **Navbar Components**: Complete test coverage for all components
- **Validation Service**: Comprehensive validation rule testing
- **Theme System**: Context and component testing

## 🚀 Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/HamidRezaRezaeiGitHub/react-common.git
cd react-common

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

### Project Structure

The project follows a modular architecture where each component package is self-contained with its own documentation, tests, and examples. This makes it easy to copy individual packages or the entire library.

## 🔄 Version History

- **v0.0.0** - Initial release with auth, address, navbar, theme, and validation components

## 🤝 Contributing

This is a personal collection designed for reuse across projects. Contributions are welcome:

- 🐛 **Report Issues** - Found a bug? Please report it!
- 💡 **Suggest Features** - Ideas for new components or improvements
- 🔧 **Submit PRs** - Bug fixes, improvements, or new components
- 📖 **Improve Docs** - Help make the documentation better

### Contributing Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-component`)
3. **Test** your changes (`npm test`)
4. **Document** your component (add README.md)
5. **Commit** your changes (`git commit -m 'Add amazing component'`)
6. **Push** to the branch (`git push origin feature/amazing-component`)
7. **Create** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Shadcn/ui** - For the excellent component design system
- **Radix UI** - For accessible, unstyled UI primitives  
- **Tailwind CSS** - For the utility-first CSS framework
- **React Testing Library** - For excellent testing utilities
- **Lucide React** - For beautiful, consistent icons

---

**Ready to get started?** Follow the [Step-by-Step Adoption Guide](#-step-by-step-adoption-guide) above to integrate these components into your project!