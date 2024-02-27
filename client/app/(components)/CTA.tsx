import Link from 'next/link';
import styles from './CTA.module.css';
import Image from 'next/image';
import image from '../(assets)/1.png';

function CTA() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div>
          <div className={styles.headline}>Ready to get started?</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Email address"
            className={styles.email}
          />
          <button className={styles.startBtn}>Get Started</button>
        </div>
        <Image
          src={image}
          alt="a meal"
          className={styles.meal}
          priority
          sizes="100vw"
          style={{
            width: '20%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default CTA;
