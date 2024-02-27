import styles from './Testimonial.module.css';
import Image from 'next/image';
import image1 from '../(assets)/11.jpg';

function Testimonial() {
  return (
    <div className={styles.section}>
      <div className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <q>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            enim eum, recusandae voluptas dignissimos quibusdam dicta ab,
            suscipit, impedit reprehenderit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odit nam enim eum, recusandae voluptas
            dignissimos quibusdam dicta ab, suscipit, impedit reprehenderit
          </q>
          <div className={styles.profileInfo}>
            <div className={styles.pictureWrapper}>
              <Image
                src={image1}
                alt="a user"
                className={styles.profilePic}
                priority
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className={styles.profileText}>
              <div className={styles.profileName}>Frederic Tyler</div>
              <div>@Barcelona, Spain</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.headline}>Our Happy Customers</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam enim
          eum, recusandae voluptas dignissimos quibusdam dicta ab, suscipit
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
