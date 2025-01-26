import React from "react";

import styles from "./Hero.module.css";
import  ge  from '../a.PNG';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sivakanagapriyan</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sivakanagapriyan2145@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={ge}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
