import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.footerRow}>
          <div className={styles.head}>Our Restaurant</div>
          <div>where food meets passion</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Explore</div>
          <div>Main</div>
          <div>Salads</div>
          <div>Desserts</div>
          <div>Drinks</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Services</div>
          <div>Reserve</div>
          <div>Activity</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Resource</div>
          <div>Help Center</div>
          <div>Platform status</div>
          <div>Partners</div>
          <div>FAQ</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Company</div>
          <div>About us</div>
          <div>Career</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
