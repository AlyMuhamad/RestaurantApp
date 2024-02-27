import Link from 'next/link';
import styles from './FeatureRow.module.css';
import Image from 'next/image';
import image from '../(assets)/2.png';

function FeatureRow() {
  return (
    <div className={styles.section}>
      <div className={styles.mealLayout}>
        <Image
          src={image}
          alt="a meal"
          className={styles.meal}
          priority
          sizes="100vw"
          style={{
            width: '80%',
            height: 'auto',
          }}
        />
        <div className={styles.mealBorder}></div>
      </div>
      <div className={styles.contentSide}>
        <div>About</div>
        <div className={styles.headline}>Our Restaurant</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam enim
          eum, recusandae voluptas dignissimos quibusdam dicta ab, suscipit,
          impedit reprehenderit? Voluptates odio minus optio deleniti amet sint
          possimus illum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odit nam enim eum, recusandae voluptas dignissimos quibusdam
          dicta ab, suscipit, impedit reprehenderit? Voluptates odio minus optio
          deleniti amet sint possimus illum
        </div>
        <Link href="/" className={styles.menuBtn}>
          View Our Menu
        </Link>
      </div>
    </div>
  );
}

export default FeatureRow;
