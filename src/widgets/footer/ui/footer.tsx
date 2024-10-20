import { Icons } from '@/shared/assets';
import { Icon } from '@/shared/ui/icon';
import styles from './footer.module.css';

interface SocialLink {
  name: string;
  icon: Icons;
  url: string;
}

interface NavLink {
  name: string;
  url: string;
}

interface FooterProps {
  year?: number;
  socialLinks?: SocialLink[];
  navLinks?: NavLink[];
  text?: {
    copyrightNotice: string;
  };
  links?: {
    privacyPolicy: string;
    termsOfService: string;
  };
  color?: string;
  background?: string;
}

export const Footer = ({
  year = new Date().getFullYear(),
  socialLinks = [
    {
      name: 'Github',
      icon: Icons.GITHUB,
      url: 'https://github.com/EmilMustafin',
    },
    { name: 'VK', icon: Icons.VK, url: '#' },
    { name: 'Telegram', icon: Icons.TELEGRAM, url: 'https://t.me/DehDerp' },
  ],
  navLinks = [
    { name: 'Главная', url: '/' },
    { name: 'О нас', url: '#' },
    { name: 'Услуги', url: '#' },
    { name: 'Контакты', url: '#' },
  ],
  text = {
    copyrightNotice: 'Все права защищены.',
  },
  links = {
    privacyPolicy: '#',
    termsOfService: '#',
  },
}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.companyInfo}>
          <h2 className={styles.companyName}>Foreign Words</h2>
          <p>
            © {year} {text.copyrightNotice}
          </p>
        </div>
        <nav className={styles.nav_links}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.social_links}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              target='_blank'
              rel='noopener noreferrer'
              href={link.url}
              className={styles.social_link}
              aria-label={link.name}
            >
              <Icon icon={link.icon} className={styles.social_icon} />
              <span className={styles.social_text}>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.additional_links}>
        <a href={links.privacyPolicy}>Политика конфиденциальности</a>
        <a href={links.termsOfService}>Условия использования</a>
      </div>
    </footer>
  );
};
