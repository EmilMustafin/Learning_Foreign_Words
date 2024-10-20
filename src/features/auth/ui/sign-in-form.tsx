import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '@/shared/api';
import { ROUTER_PATHS } from '@/shared/constants';
import { setTokensIntoStorage } from '@/shared/lib/localStorage';
import { Button } from '@/shared/ui/button/ui/button';
import { TextField } from '@/shared/ui/text-field/ui/text-field';
import styles from './sign-in-form.module.css';

export function SignInForm({ className = '' }: { className?: string }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [loginUser] = useLoginMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (login && password) {
        const result = await loginUser({ username: login, password }).unwrap();
        if (result.token) {
          setTokensIntoStorage(result.token);
          navigate(ROUTER_PATHS.HOME);
        }
      } else {
        setError('Please provide valid login and password.');
      }
    } catch (err) {
      setError(`Login failed. Please check your credentials. Error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={`${className} ${styles.formContainer}`} onSubmit={handleSubmit}>
      <TextField
        label='Логин'
        inputProps={{
          value: login,
          onChange: (e) => setLogin(e.target.value),
          type: 'text',
          placeholder: 'John Doe',
        }}
      />
      <TextField
        label='Пароль'
        inputProps={{
          value: password,
          onChange: (e) => setPassword(e.target.value),
          type: 'password',
          placeholder: '****',
        }}
      />
      <Button variant='outlined' type='submit' isLoading={isLoading}>
        Войти
      </Button>
      {error && <p className={styles.errorText}>{error}</p>}
    </form>
  );
}
