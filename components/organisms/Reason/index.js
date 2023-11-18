import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/Reason.module.css';
import { Reason } from 'assets';

export default function index() {
  return (
    <section className={styles.reason}>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6 p-md-0">
            <div className={styles.reason__left}>
              <Image
                src={Reason}
                alt="Peworld Hire"
                className={`${styles.reason__image} mx-auto mx-md-0 img-cover`}
                width={500}
                height={450}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-md-0">
            <div className={styles.reason_right}>
              <h2 className={styles.reason_title}>
                Why should you work with enetworks?
              </h2>
              <div className="mt-5">
                <div className={styles.reason_list}>
                  <span className={styles.reason_text}>
                    it&apos;s that simple, no complexities, no protocols, no
                    controversies.
                  </span>
                </div>
                <div className={styles.reason_list}>
                  <span className={styles.reason_text}>
                    We leverage on enabling technologies to achieve this for you
                    and your family.
                  </span>
                </div>
                <div className={styles.reason_list}>
                  <span className={styles.reason_text}>
                    Afterall, you are not going to be here forever, so while
                    around please find it a pleasure to live easily which is our
                    assignment with and for YOU🫵🫵🫵🫵🫵
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
