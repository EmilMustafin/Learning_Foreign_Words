import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <h1 className={styles.title}>Добро пожаловать на страницу для изучение слов!</h1>
      <p className={styles.description}>
        Это приложение создано для изучения иностранных слов с помощью интерактивных карточек. Вы
        можете изучать новые слова, отслеживать свои успехи и изменять данные своего профиля.
      </p>
    </div>
  );
};
