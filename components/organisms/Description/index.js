import React from 'react';
import Link from 'next/link';
import styles from 'styles/components/Hero.module.css';

export default function index() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className={styles.hero_left}>
              <div className={styles.hero_wrapper}>
                <p className={styles.hero_subtitle}>
                  We understand that various limitations may have prevented you
                  and many others from optimizing your living experience.
                  However, rest assured that with us, you have the platform to
                  make it happen – yes, YOU! E-NETWORKSVERSE offers a simplified
                  way to live on Earth, free from complexities, protocols, and
                  controversies. It&apos;s about simple solutions! We utilize
                  enabling technologies to ensure you and your family can
                  experience an easier way of life. After all, your time on
                  Earth is finite, so make it a pleasure to live easily –
                  that&apos;s our commitment to YOU!
                </p>
                <Link href="/auth/apply">
                  <button className={`btn ${styles.hero_button}`}>
                    Start applying now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
