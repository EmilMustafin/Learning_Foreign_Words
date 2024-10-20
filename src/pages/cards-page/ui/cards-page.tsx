import { CardList } from '@/features/card-list';
import { useGetCardsQuery } from '@/shared/api';
import styles from './cards-page.module.css';
export const CardsPage = () => {
  const { data: cards, isLoading } = useGetCardsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className={styles.title_card}>Карточки</h1>
      {cards && cards.length > 0 ? <CardList cards={cards} /> : <p>No cards found</p>}
    </>
  );
};
