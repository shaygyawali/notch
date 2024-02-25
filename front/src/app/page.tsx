"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Homedash from "@/components/Homedash/Homedash";
import Homedash2 from "@/components/Homedash2/Homedash2";

export default function Home() {
  return (
    <main className={styles.main}>
      <Homedash />
    </main>
  );
}
