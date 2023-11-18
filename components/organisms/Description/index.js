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
                  At e-Networks Technologies Ltd, we are here to help make that
                  a REALITY! For a certain we know that you and many others have
                  not been able to achieve this or come close to optimizing your
                  living due to so many limitations, but please know that with
                  us you have the platform to make that happen to you, yes YOU!
                  E-NETWORKSVERSE is a world of experiencing easier way to live
                  on earth
                </p>
                <Link href="/auth/register">
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
