"use client";
import Card from "@/app/(pages)/_components/home/card.jsx"
import styles from "./page.module.scss"
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className={styles.mission}>
        <h1 className={styles.missionText}>
          Our mission is to design creative digital solutions that have a positive social impact
        </h1>
        <Image width={824} height={412} src='/helloworld.png' alt='hello world' className={styles.helloImage}/>
      </div>
      <div className={styles.recent}>
          <FaPenNib size="5rem" color="white"/>
          <h2 className={styles.recentTitle}>
            Recent Work
          </h2>
          <h3 className={styles.recentSubtitle}>
            Transforming ideas into incredible realities is what we do best.
          </h3>
          <Card/>
      </div>

      <div className={styles.purpleBackground}>
      </div>
    </main>
  );
}
