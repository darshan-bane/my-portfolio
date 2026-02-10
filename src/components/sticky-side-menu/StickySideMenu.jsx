import React, { useEffect, useState } from "react";
import styles from "@/styles/StickySideMenu.module.css";
import { FolderOpen, House, Mail, UserRound } from "lucide-react";
import Link from "next/link";

const StickySideMenu = () => {
  const [activeSection, setActiveSection] = useState("home");

  // 🔹 Update active section from URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) setActiveSection(hash);

    const onHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (newHash) setActiveSection(newHash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // 🔹 Update active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const activeStyle = (id) =>
    activeSection === id
      ? {
          borderBottom: "2px solid #fff",
          paddingBottom: "6px",
          transition: "0.3s",
        }
      : {
          borderBottom: "2px solid transparent",
          paddingBottom: "6px",
        };

  return (
    <div className={styles.stickySideMenuContainer}>
      <Link href="#home" style={activeStyle("home")}>
        <House size={26} color="#fff" />
      </Link>

      <Link href="#about" style={activeStyle("about")}>
        <UserRound size={26} color="#fff" />
      </Link>

      <Link href="#projects" style={activeStyle("projects")}>
        <FolderOpen size={26} color="#fff" />
      </Link>

      <Link href="#contact" style={activeStyle("contact")}>
        <Mail size={26} color="#fff" />
      </Link>
    </div>
  );
};

export default StickySideMenu;
