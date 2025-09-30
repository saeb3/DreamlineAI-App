"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FiArrowLeft,
  FiHeart,
  FiShare2,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";
import styles from "./page.module.css";


export default function SelectedIncentive() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const sections = [
    {
      title: "Average Amount Awarded",
      content: (
        <label>
          <input type="radio" name="avgamountawarded" defaultChecked /> $10,000 – $15,000
        </label>
      ),
    },
    { title: "Estimated Timeline", content: <p></p> },
    { title: "Eligibility Criteria", content: <p></p> },
    { title: "Application Process", content: <p></p> },
    { title: "Eligible Projects", content: <p></p> },
  ]


  return (
    <div className="flex max-w-md min-h-screen flex-col bg-gray-50 text-black">
        <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white">
            <Image src="/images/logo.png" alt="Logo" width={80} height={50} />
            <button className="text-3xl">☰</button>
        </header>
        <div className={styles.hero}>
            <button className={`${styles.icon} ${styles.back}`}>
            <FiArrowLeft />
            </button>
            <div className={styles.placeholder}>
            {/* <Image src="/hero.jpg" fill style={{ objectFit: "cover" }} /> */}
            </div>
            <div className={styles.iconGroup}>
            <button className={styles.icon}>
                <FiHeart />
            </button>
            <button className={styles.icon}>
                <FiShare2 />
            </button>
            </div>
        </div>
        <main className={styles.content}>
            <h4 className="text-2xl font-bold mb-2">Home Energy Efficiency Grant</h4>
            <p className={styles.description}>
            The Home Energy Efficiency Grant is designed to help homeowners make
            energy-saving upgrades to their properties. This grant provides
            financial assistance for a range of home improvement projects aimed
            at enhancing energy efficiency, reducing utility bills, and
            contributing to a greener environment.
            </p>

            <div className={styles.accordion}>
            {sections.map((sec, i) => (
                <div key={i} className={styles.section}>
                <button
                    className={styles.sectionHeader}
                    onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                    }
                >
                    <span>{sec.title}</span>
                    {openIndex === i ? (
                    <FiChevronDown />
                    ) : (
                    <FiChevronRight />
                    )}
                </button>
                {openIndex === i && (
                    <div className={styles.sectionBody}>
                    {sec.content}
                    </div>
                )}
                </div>
            ))}
            </div>
        </main>

      <div className={styles.questions}>
          <strong>Questions?</strong>
          <p>
            For more information on the Home Energy Efficiency Grant,
            eligibility requirements, and to start your application, please
            contact us at{" "}
            <a href="mailto:Rose@dreamlineai.org">
              <b>Rose@dreamlineai.org</b>
            </a>
          </p>
        </div>

        <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.primary}`}>
          Apply
        </button>
        <button className={`${styles.btn} ${styles.outline}`}>
          Browse Incentives
        </button>
      </div>
    </div>
  )
}