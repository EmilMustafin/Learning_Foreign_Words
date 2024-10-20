import { ChangeEvent } from 'react';
import styles from './field.module.css';
import { TextField } from '../../text-field/ui/text-field';

interface FieldProps {
  label: string;
  type: 'text' | 'number' | 'textarea' | 'date' | 'select' | 'checkbox' | 'radio';
  value: string | number;
  options?: string[];
  onChange: (value: string | number | boolean) => void;
  checked?: boolean;
}

export const Field = ({ label, type, value, options = [], onChange, checked }: FieldProps) => {
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const target = event.target;

    if (type === 'checkbox' && target instanceof HTMLInputElement) {
      onChange(target.checked);
    } else {
      onChange(target.value);
    }
  };

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {type === 'text' && (
        <input className={styles.input} type='text' value={value} onChange={handleInputChange} />
      )}
      {type === 'number' && (
        <input className={styles.input} type='number' value={value} onChange={handleInputChange} />
      )}
      {type === 'textarea' && (
        <TextField multiline inputProps={{ value: value, onChange: handleInputChange }} />
      )}
      {type === 'date' && (
        <input className={styles.input} type='date' value={value} onChange={handleInputChange} />
      )}
      {type === 'select' && (
        <select className={styles.select} value={value as string} onChange={handleInputChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === 'checkbox' && (
        <div className={styles.checkboxGroup}>
          <input type='checkbox' checked={checked} onChange={handleInputChange} />
          <span>{label}</span>
        </div>
      )}
      {type === 'radio' && (
        <div className={styles.radioGroup}>
          {options.map((option, index) => (
            <label key={index} className={styles.radioLabel}>
              <input
                type='radio'
                name={label}
                value={option}
                checked={value === option}
                onChange={handleInputChange}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
