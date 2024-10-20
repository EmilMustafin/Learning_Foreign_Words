import { NavLink } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';
import styles from './nav-links.module.css';

export function NavLinks() {
  return (
    <div className={styles.container}>
      <NavLink to={ROUTER_PATHS.CARDS} className={styles.link}>
        Карточки
      </NavLink>
      <NavLink to={ROUTER_PATHS.PROFILE} className={styles.link}>
        Профиль
      </NavLink>
    </div>
  );
}
