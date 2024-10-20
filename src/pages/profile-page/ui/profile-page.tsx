import { EditView } from '@/features/edit-view';
import styles from './profile-page.module.css';
import { profileFields } from '../model/constants';
export const ProfilePage = () => {
  return (
    <div className={styles.profile_container}>
      <h1 className={styles.profile_title}>Профиль</h1>
      <EditView fields={profileFields} />
    </div>
  );
};
