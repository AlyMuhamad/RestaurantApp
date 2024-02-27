import styles from './HeroSection.module.css';
import Header from '../(ui)/Header';
import Link from 'next/link';
import Image from 'next/image';
import image from '../(assets)/1.png';

function HeroSection() {
  return (
    <div className={styles.hero}>
      <Header />
      <div className={styles.section}>
        <div className={styles.contentSide}>
          <div className={styles.headline}>Our Restaurant</div>
          <div className={styles.subHeadline}>
            Discover the most delicious food with our restaurant <br /> with
            unbeaten level of service starting from the moment <br /> you step
            into our restaurant
          </div>
          <div className={styles.btns}>
            <Link href="/" className={`${styles.btn} ${styles.menuBtn}`}>
              View Our Menu
            </Link>
          </div>
        </div>
        <div className={styles.mealLayout}>
          <Image
            src={image}
            alt="a meal"
            className={styles.meal}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className={styles.mealBorder}></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
