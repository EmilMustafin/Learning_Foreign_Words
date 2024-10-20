import { Outlet } from 'react-router-dom';
import { userSlice } from '@/entities/user';
import { SignOutButton } from '@/features/auth';
import { useAppSelector } from '@/shared/lib/redux';
import { Header } from '@/shared/ui/header';
import { Footer } from '@/widgets/footer';
import styles from './private-layout.module.css';
import { NavLinks } from './ui/nav-links';

export function PrivateLayout() {
  const isLoading = useAppSelector(userSlice.selectors.selectLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.layoutContainer}>
      <Header
        links={<NavLinks />}
        right={
          <div className={styles.profile_container}>
            <SignOutButton className={styles.signOutButton} />
          </div>
        }
      />
      <main className={styles.main_container}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
