import { ProfileField } from '@/features/edit-view';

export const profileFields: ProfileField[] = [
  { label: 'Полное имя', type: 'text', value: 'Джон Доу' },
  { label: 'Возраст', type: 'number', value: 30 },
  {
    label: 'Обо мне',
    type: 'textarea',
    value: 'Увлекаюсь программированием и музыкой.',
  },
  { label: 'Дата рождения', type: 'date', value: '1993-05-15' },
  {
    label: 'Страна проживания',
    type: 'select',
    value: 'США',
    options: ['США', 'Канада', 'Германия', 'Австралия'],
  },
  { label: 'Получать рассылку', type: 'checkbox', value: '', checked: true },
  {
    label: 'Пол',
    type: 'radio',
    value: 'Мужской',
    options: ['Мужской', 'Женский'],
  },
  { label: 'Номер телефона', type: 'text', value: '123-456-7890' },
  { label: 'Профессия', type: 'text', value: 'Инженер-программист' },
];
