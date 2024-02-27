import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        Logo
      </Link>
      <Link href="/" className={styles.link}>
        Soup
      </Link>
      <Link href="/" className={styles.link}>
        Rice
      </Link>
      <Link href="/" className={styles.link}>
        Salad
      </Link>
      <Link href="/" className={styles.link}>
        Dessert
      </Link>
      <Link href="/" className={styles.link}>
        Kids
      </Link>
      <Link href="/" className={styles.link}>
        Register
      </Link>
    </div>
  );
}

export default Header;
