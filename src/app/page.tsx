"use client";
import styles from "./page.module.css";
import OpenChat from "../components/openChat/OpenChat";
import Slider from "../components/slider/Slider";
import LastChat from "../components/lastChat/LastChat";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showRest, setShowRest] = useState(false); // состояние для остальных блоков

  const smoothScrollDown = () => {
    setShowRest(true); // при клике открываем остальные блоки

    const start = window.scrollY;
    const target = start + window.innerHeight; // прокручиваем на высоту экрана
    const duration = 1000;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      // easeOutCubic
      const easing = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start + (target - start) * easing);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current
          .play()
          .catch((e) => console.log("Ошибка воспроизведения:", e));
      }
    };
    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("scroll", enableSound, { once: true });
    document.addEventListener("keydown", enableSound, { once: true });
    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);

  return (
    <div className={styles.page}>
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>

      {/* Первая картинка */}
      <div onClick={smoothScrollDown} className={styles.img1}>
        <Image src="/winter.jpg" fill alt="winter" />
      </div>

      {/* Слайдер всегда виден */}

      {/* Остальные блоки только если showRest === true */}
      {showRest && (
        <>
          <OpenChat />
          <Slider />
          <LastChat />
          <div className={styles.img}>
            <Image fill src="/distance.jpg" alt="love" />
          </div>
          <div className={styles.img2}>
            <Image fill src="/love-song.jpg" alt="love" />
          </div>
          <div className={styles.img3}>
            <Image fill src="/scroll.jpg" alt="love" />
          </div>
          <div className={styles.img}>
            <Image fill src="/story.jpg" alt="love" />
          </div>
        </>
      )}
    </div>
  );
}
