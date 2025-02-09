
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./ImageWithScrollTriggerAnimation.css";

gsap.registerPlugin(ScrollTrigger);

const ImageWithScrollTriggerAnimation = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top 60%", // Начать анимацию, когда верх элемента окажется в 80% области просмотра
          end: "bottom 20%", // Закончить анимацию, когда низ элемента окажется в 20% области просмотра
          toggleActions: "play none none reverse", // Воспроизведение анимации при скролле вперед и обратное воспроизведение при скролле назад
          //   scrub:true,
        },
      })
      .to(overlayRef.current, { opacity: 1, duration: 0.5 })
      .to(overlayRef.current, { opacity: 0, duration: 0.5, delay: 3 });
  }, []);

  return <span ref={overlayRef} className="mobilBg"></span>;
};

export default ImageWithScrollTriggerAnimation;
