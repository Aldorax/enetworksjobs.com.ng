import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/components/Hero.module.css';
import { Hero } from 'assets';

export default function index() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className={styles.hero_left}>
              <div className={styles.hero_wrapper}>
                <h1 className={styles.hero_title}>Welcome to ENETWORKSJOBS!</h1>
                <p className={styles.hero_subtitle}>
                  Welcome to E-NETWORKSJOBS! E-Networksjobs serves as the
                  recruitment, employment, and entrepreneur creation platform of
                  E-NETWORKS TECHNOLOGIES LTD, known as E-NETWORKSVERSE.
                  It&apos;s a place designed for experiencing ease of living on
                  Earth. Yes, you heard it correctly. During your time on Earth,
                  the goal is to maximize the resources and opportunities life
                  has to offer, living on your own terms rather than the other
                  way around. At E-Networks Technologies Ltd, we are committed
                  to turning that aspiration into reality!
                </p>
                <Link href="/auth/apply">
                  <button className={`btn ${styles.hero_button}`}>
                    Apply for open positions
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div>
              <Image
                src={Hero}
                alt="Peworld Hire"
                className={`${styles.hero_image} mx-auto mx-md-0 img-cover`}
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
