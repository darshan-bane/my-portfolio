import { useEffect } from "react";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    const handleBack = () => {
      const hash = sessionStorage.getItem("fromHash") || "#about";
      router.push(`/${hash}`);
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  return <h1>about</h1>;
}
