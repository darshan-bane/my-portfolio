import React from "react";
import styles from "@/styles/Home.module.css";
import { poppins500, poppins700 } from "@/pages/font";
import Image from "next/image";
import selfImg from "../../assets/self.jpg";

const Home = () => {
  return (
    <section className={styles.homeContainer} id="home">
      <div className={styles.selfDetails}>
        <p className={`${styles.name}`}>Darshan Sanjay Bane</p>
        <h1 className={`${styles.tech} ${poppins700.className}`}>
          Frontend <br /> Developer
        </h1>
        <p className={styles.description}>
          I’m a frontend developer with{" "}
          <span className={styles.desc_experience}>2+ years of experience</span>{" "}
          crafting responsive, user-friendly web interfaces. I specialize in
          modern JavaScript frameworks, clean UI design, and performance-focused
          development.
        </p>
        <div className={styles.btn_wrapper}>
          <button className={styles.cv_btn}>Download CV</button>
          <button className={styles.contact_btn}>Contact Me</button>
        </div>
      </div>
      <div className={styles.selfImgContainer}>
        <Image
          src={selfImg}
          width={500}
          height={500}
          className={styles.selfImg}
          quality={90}
          priority={true}
        />
      </div>
    </section>
  );
};

export default Home;
