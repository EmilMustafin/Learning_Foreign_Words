import { useState } from 'react';
import { Button } from '@/shared/ui/button/ui/button';
import styles from './card.module.css';

interface CardProps {
  title: string;
  word: string;
  example: string;
  translation: string;
}

export const Card = ({ word, example, translation, title }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((prev) => !prev);

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={toggleFlip}>
      <div className={styles['card-inner']}>
        <div className={`${styles['card-side']} ${styles['card-front']}`}>
          <h2 className={styles.title_card}>{title}</h2>
          <p className={styles.paragraph}>{word}</p>
          <p className={styles.paragraph}>
            <em className={styles.emphasized}>{example}</em>
          </p>
          <Button variant='primary'>LEARN MORE</Button>
        </div>
        <div className={`${styles['card-side']} ${styles['card-back']}`}>
          <p className={styles.paragraph}>{translation}</p>
          <Button variant='primary'>BACK</Button>
        </div>
      </div>
    </div>
  );
};
