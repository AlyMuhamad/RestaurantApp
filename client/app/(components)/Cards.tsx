import Link from 'next/link';
import styles from './Cards.module.css';
import Image from 'next/image';
import image1 from '../(assets)/3.png';
import image2 from '../(assets)/4.png';
import image3 from '../(assets)/5.png';

function Cards() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.headline}>Our Menu</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam enim
          eum, recusandae voluptas dignissimos quibusdam dicta ab, suscipit,
          impedit reprehenderit
        </div>
        <div className={styles.plates}>
          <div className={styles.plate}>
            <Image
              src={image1}
              alt="a meal"
              className={styles.meal}
              priority
              sizes="100vw"
              style={{
                width: '80%',
                height: 'auto',
              }}
            />
            <div className={styles.plateName}>French</div>
            <div className={styles.price}>
              <span className={styles.onlyLabel}>Only </span>
              30.00$
            </div>
            <button className={styles.buyBtn}>Buy Now</button>
          </div>
          <div className={styles.plate}>
            <Image
              src={image2}
              alt="a meal"
              className={styles.meal}
              priority
              sizes="100vw"
              style={{
                width: '80%',
                height: 'auto',
              }}
            />
            <div className={styles.plateName}>English</div>
            <div className={styles.price}>
              <span className={styles.onlyLabel}>Only </span>
              49.00$
            </div>
            <button className={styles.buyBtn}>Buy Now</button>
          </div>
          <div className={styles.plate}>
            <Image
              src={image3}
              alt="a meal"
              className={styles.meal}
              priority
              sizes="100vw"
              style={{
                width: '80%',
                height: 'auto',
              }}
            />
            <div className={styles.plateName}>Asian</div>
            <div className={styles.price}>
              <span className={styles.onlyLabel}>Only </span>
              27.00$
            </div>
            <button className={styles.buyBtn}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
