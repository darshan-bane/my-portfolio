import Home from "@/components/home/Home";
import Navbar from "@/components/navbar/Navbar";
import styles from "../styles/Index.module.css";
import { poppins700 } from "./font";
import selfImg from "../assets/self.jpg";
import Image from "next/image";
import StickySideMenu from "@/components/sticky-side-menu/StickySideMenu";
import { useRouter } from "next/router";
import Link from "next/link";
import { SOCIAL_LINK_DATA } from "@/constants/socialLinkData";

export default function Main() {
  const router = useRouter();
  console.log(router);

  return (
    <div className="mainWrapper">
      <Navbar />
      <StickySideMenu />
      <Home />

      {/* ============ about ============ */}
      <section className={styles.idxAboutWrapper} id="about">
        <div className={styles.idxAboutDetails}>
          <h1 className={`${styles.idxAboutTitle} ${poppins700.className}`}>
            About Me
          </h1>
          <p className={styles.description}>
            A brief introduction about me and my interest.
          </p>
          <button
            className={styles.idxAboutBtn}
            onClick={() => {
              sessionStorage.setItem("fromHash", "#about");
              router.push("/about");
            }}
          >
            Learn More
          </button>
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

      {/* ======== projects ========= */}
      <section className={styles.idxAboutWrapper} id="projects">
        <div className={styles.idxAboutDetails}>
          <h1 className={`${styles.idxAboutTitle} ${poppins700.className}`}>
            My Projects
          </h1>
          <p className={styles.description}>
            Selected works that I've built over the years. and currently working
            on.
          </p>
          <button
            className={styles.idxAboutBtn}
            onClick={() => {
              sessionStorage.setItem("fromHash", "#about");
              router.push("/about");
            }}
          >
            Learn More
          </button>
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

      {/* ======= Contact ========== */}
      <section className={styles.idxAboutWrapper} id="contact">
        <div className={styles.idxAboutDetails}>
          <h1 className={`${styles.idxAboutTitle} ${poppins700.className}`}>
            Get In Touch
          </h1>
          <p className={styles.description}>
            Feel free to contact me if you have any questions or just want to
            say hi.
          </p>
          <div className={styles.mailIdWapper}>
            <Link
              href={"mailto:darshanbane253@gmail.com?subject=Hello&body=Hello"}
              className={styles.mailId}
            >
              darshanbane253@gmail.com
            </Link>
          </div>
          <div className={styles.socailIconLinkWrapper}>
            {SOCIAL_LINK_DATA.map((data, idx) => {
              const ICON = data?.icon;
              return (
                <Link href={data?.link} className={styles.socialIcon} key={idx}>
                  <ICON size={24} />
                </Link>
              );
            })}
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
    </div>
  );
}
