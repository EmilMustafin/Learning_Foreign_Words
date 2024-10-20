import { Card } from '@/entities/card';
import { ICard } from '@/shared/api';
import styles from './card-list.module.css';

interface CardListProps {
  cards: ICard[];
}

export const CardList = ({ cards }: CardListProps) => {
  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};
