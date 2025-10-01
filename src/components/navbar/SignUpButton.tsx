import React from 'react';
// TODO: Replace with your project's UI components and utilities
// Example: import { Button } from '@/components/ui/button';
// Example: import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/utils/utils';

export interface SignUpButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
  children?: React.ReactNode;
}

/**
 * SignUpButton component
 * Configurable signup button for navbar use
 */
export const SignUpButton: React.FC<SignUpButtonProps> = ({ 
  className = '',
  variant = 'default',
  size = 'default',
  onClick,
  children = 'Sign Up'
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn('font-medium', className)}
    >
      {children}
    </Button>
  );
};

export default SignUpButton;