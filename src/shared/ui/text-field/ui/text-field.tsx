import { InputHTMLAttributes, PropsWithRef, TextareaHTMLAttributes, useId } from 'react';
import styles from './text-field.module.css';

export type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
  textAreaProps?: PropsWithRef<TextareaHTMLAttributes<HTMLTextAreaElement>>;
  multiline?: boolean;
};

export function TextField({
  className = '',
  error,
  label,
  inputProps,
  multiline,
  textAreaProps,
}: UiTextFieldProps) {
  const id = useId();

  const inputClassName = `${multiline ? textAreaProps?.className : inputProps?.className}
    ${!multiline ? styles.inputHeight : styles.textAreaPadding} ${styles.inputRounded} ${styles.inputBorder} ${styles.inputPaddingX} ${styles.outlineNone} ${styles.inputMetroBorder} ${styles.inputMetroBg} ${styles.inputMetroFocusBorder}`;

  return (
    <div className={`${className} ${styles.container}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea {...textAreaProps} id={id} className={inputClassName} />
      ) : (
        <input {...inputProps} id={id} className={inputClassName} />
      )}
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}
