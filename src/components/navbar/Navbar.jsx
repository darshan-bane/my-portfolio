import React from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import logo from "../../assets/logo.webp";
import { MoonStar, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      {/* <button className={styles.nav_btn}>Home</button>
        <button className={styles.nav_btn}>About</button>
        <button className={styles.nav_btn}>Projects</button>
        <button className={styles.nav_btn}>Contacts</button> */}
      <div>
        <Image
          src={logo}
          width={400}
          height={400}
          className={styles.logo}
          priority={true}
          quality={90}
        />
      </div>
      <div className={styles.navbar_right}>
        <button className={styles.connect_btn}>Let's Connect</button>
        <button className={styles.theme_btn}>
          {/* <MoonStar size={24} color='#ffffff'/> */}
          <Sun size={24} color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
