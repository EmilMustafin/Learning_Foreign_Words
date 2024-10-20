export interface ProfileField {
  label: string;
  type: 'text' | 'number' | 'textarea' | 'date' | 'select' | 'checkbox' | 'radio';
  value: string | number;
  options?: string[];
  checked?: boolean;
}
