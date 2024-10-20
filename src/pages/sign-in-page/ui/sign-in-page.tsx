import { SignInForm } from '@/features/auth';
import styles from './sign-in-page.module.css';

export const SignInPage = () => {
  return (
    <>
      <h1 className={styles.sign_in_title}>Авторизация</h1>
      <SignInForm />
    </>
  );
};
