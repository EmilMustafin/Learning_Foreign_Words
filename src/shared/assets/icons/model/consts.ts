import Calendar from '../common/calendar.svg';
import CheckBoxActive from '../common/checkbox-active.svg';
import CheckBox from '../common/checkbox.svg';
import Github from '../common/github.svg';
import Logo from '../common/logo.svg';
import Spinner from '../common/spinner.svg';
import Telegram from '../common/telegram.svg';
import VK from '../common/vk.svg';

export enum Icons {
  GITHUB = 'GITHUB',
  TELEGRAM = 'TELEGRAM',
  VK = 'VK',
  LOGO = 'LOGO',
  SPINNER = 'SPINNER',
  CALENDAR = 'CALENDAR',
  CHECKBOX = 'CHECKBOX',
  CHECKBOX_ACTIVE = 'CHECKBOX_ACTIVE',
}

export const ICONS: Record<Icons, SVGIcon> = {
  [Icons.GITHUB]: Github,
  [Icons.TELEGRAM]: Telegram,
  [Icons.VK]: VK,
  [Icons.LOGO]: Logo,
  [Icons.SPINNER]: Spinner,
  [Icons.CALENDAR]: Calendar,
  [Icons.CHECKBOX]: CheckBox,
  [Icons.CHECKBOX_ACTIVE]: CheckBoxActive,
};
