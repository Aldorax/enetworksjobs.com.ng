import React from 'react';
import Image from 'next/image';
import styles from 'styles/components/Skill.module.css';
import { Skill, IconCheck } from 'assets';

export default function index() {
  return (
    <section className={styles.skill}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-7 p-md-0">
            <div className={styles.skill_wrapper}>
              <div className={styles.skill_content}>
                <h2 className={styles.skill_title}>
                  Available jobs categories
                </h2>
                <p className={styles.skill_subtitle}>
                  There are 2 job categories on enetworks
                </p>

                <div className={styles.skill_container}>
                  <div className={styles.skill_list}>
                    <div className={`${styles.skill_check} rounded-circle`}>
                      <Image
                        src={IconCheck}
                        alt="Icon"
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill_name}>
                      NGO COMMUNITY PORTFOLIO DESK OFFICES
                    </span>
                  </div>
                  <div className={styles.skill_list}>
                    <div className={`${styles.skill_check} rounded-circle`}>
                      <Image
                        src={IconCheck}
                        alt="Icon"
                        width="10"
                        height="10"
                      />
                    </div>
                    <span className={styles.skill_name}>
                      EXECUTIVE BUSINESS MANAGERIAL POSITIONS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 p-md-0">
            <div className={styles.skill_right}>
              <Image
                src={Skill}
                alt="Peworld Hire"
                className={`${styles.skill_image} mx-auto mx-md-0 img-cover`}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
