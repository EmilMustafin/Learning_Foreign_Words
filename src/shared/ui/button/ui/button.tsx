import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';
import { Spinner } from '../../spinner/ui/spinner';

export type UiButtonVariant = 'primary' | 'secondary' | 'outlined';
export type UiButtonProps = {
  variant: UiButtonVariant;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, variant, isLoading, children, ...props }: UiButtonProps) {
  return (
    <button {...props} className={`${styles.buttonBase} ${styles[variant]} ${className}`}>
      {isLoading ? <Spinner className='text-[1em]' /> : children}
    </button>
  );
}
