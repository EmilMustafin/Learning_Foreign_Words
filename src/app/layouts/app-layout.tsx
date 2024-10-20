import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { userSlice } from '@/entities/user';
import { SignOutButton } from '@/features/auth';
import { ROUTER_PATHS } from '@/shared/constants';
import { getAccessToken } from '@/shared/lib/localStorage';
import { useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button/ui/button';
import { Header } from '@/shared/ui/header';
import { Footer } from '@/widgets/footer';
import styles from './private-layouts/private-layout.module.css';
import { NavLinks } from './private-layouts/ui/nav-links';

export function AppLayout() {
  const isLoading = useAppSelector(userSlice.selectors.selectLoading);
  const [isAuth, setIsAuth] = useState(!!getAccessToken());

  const checkToken = () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      setIsAuth(false);
      return;
    }
    setIsAuth(true);
  };
  useEffect(() => {
    const listener = () => checkToken();
    window.addEventListener('storage', listener);

    return () => window.removeEventListener('storage', listener);
  }, [isAuth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.layoutContainer}>
      <Header
        links={
          isAuth ? (
            <NavLinks />
          ) : (
            <NavLink to={ROUTER_PATHS.HOME} className={styles.home_link}>
              Главная
            </NavLink>
          )
        }
        right={
          !isAuth ? (
            <NavLink to={ROUTER_PATHS.LOGIN} className={styles.profile_container}>
              <Button variant='outlined'>Войти</Button>
            </NavLink>
          ) : (
            <div className={styles.profile_container}>
              <SignOutButton />
            </div>
          )
        }
      />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
