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
                  <span className="font-bold">E-networksjobs</span> is the
                  recruitment, employment and entrepreneur creation platform of{' '}
                  <span className="font-bold">E-networks</span> TECHNOLOGIES LTD
                  which we call
                  <span className="font-bold">E-networksverse</span>. It is a
                  place where you experience ease of living on earth. Yes you
                  got that right.
                </p>
                <p className={styles.hero_subtitle}>
                  While on earth, you are meant to maximize the most of the
                  resources and opportunities that life have to offer. You are
                  supposed to live here on your own terms not the other way
                  round.
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
