import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export function Header({
  className,
  right,
  links,
}: {
  className?: string;
  links?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <header className={`${styles.header} ${className || ''}`}>
      <nav className={styles.nav_header}>
        <NavLink className={styles.logo} to='/'>
          <h2 className={styles.company_name}>Foreign words</h2>
        </NavLink>
        {links}
        {right}
      </nav>
    </header>
  );
}
