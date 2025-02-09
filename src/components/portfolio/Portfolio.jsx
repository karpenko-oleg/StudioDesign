// bibliotek
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from "react";
import { Link } from "react-router-dom";


// styli
import "../main/main.scss";
import "./portfolio.scss";
// images
import bg_logo from '../../assets/bg_main_logo_img/123.webp';
import bg_logo_1 from '../../assets/bg_main_logo_img/1.png';
import bg_logo_2 from '../../assets/bg_main_logo_img/2.png';
import bg_logo_3 from '../../assets/bg_main_logo_img/3.png';
import bg_logo_4 from "../../assets/bg_main_logo_img/4.png";
import bg_logo_5 from "../../assets/bg_main_logo_img/5.png";
import bg_logo_6 from "../../assets/bg_main_logo_img/6.png";
// images
import portfolio_bg from "../../assets/bg_main_logo_img/bg.jpg"
// картинки
import portfolio_item_1 from "../../assets/portfolio/4.webp";
import portfolio_item_2 from "../../assets/portfolio/2.webp";
import portfolio_item_3 from "../../assets/portfolio/3.webp";
import portfolio_item_4 from "../../assets/portfolio/1.webp";
import portfolio_item_5 from "../../assets/portfolio/5.webp";
import portfolio_item_6 from "../../assets/portfolio/6.webp";
import portfolio_item_7 from "../../assets/portfolio/7.webp";
import portfolio_item_8 from "../../assets/portfolio/8.webp";


import buttonImg from "../../assets/portfolio/button/arrow1.svg"
// components

gsap.registerPlugin(ScrollTrigger);
function Portfolio() {

    const imgRef = useRef(null);
    const precedingBlockRef = useRef(null);

    useEffect(() => {
      const el = imgRef.current;
      const precedingBlock = precedingBlockRef.current;

      const setAnimation = () => {
        const precedingBlockHeight = precedingBlock
          ? precedingBlock.offsetHeight
          : 0;

        if (window.innerWidth > 500) {
          gsap.fromTo(
            el,
            { y: precedingBlockHeight },
            {
              y: 0,
              duration: 3,
              scrollTrigger: {
                trigger: el,
                scrub: 2,
                start: "top bottom",
                end: `+=${precedingBlockHeight}`,
              },
            }
          );
        }
      };

      const resizeHandler = () => {
        ScrollTrigger.refresh();
        setAnimation();
      };

      setAnimation();

      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
  
// аниамция большого текста
    const portfolioText =useRef(null);
    useEffect(()=>{
        const el = portfolioText.current;
        gsap.fromTo(el, {opacity: 0, scale: 0.5}, { scale:1, opacity: 1, duration:3, scrollTrigger: {
        trigger: el,
        scrub:1,
        // start: "top 40%",
        start: "top 60%",
        end: "+=800",
        }})
    }, []);
     // анимация картинок
    const sectionRef_1 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_1.current;
        gsap.fromTo(el, {x:"100",}, {x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);
    const sectionRef_2 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_2.current;
        gsap.fromTo(el, {x:"-100"}, { x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);

    const sectionRef_3 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_3.current;
        gsap.fromTo(el, {x:"100",}, {x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);

    const sectionRef_4 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_4.current;
        gsap.fromTo(el, {x:"-100"}, { x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);
    const sectionRef_5 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_5.current;
        gsap.fromTo(el, {x:"100"}, { x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);
    const sectionRef_6 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_6.current;
        gsap.fromTo(el, {x:"-100"}, { x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);
    const sectionRef_7 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_7.current;
        gsap.fromTo(el, {x:"100"}, { x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    }, []);
    const sectionRef_8 =useRef(null);
    useEffect(()=>{
        const el = sectionRef_8.current;
        gsap.fromTo(el, {x:"-100"}, { x:0, duration:3, scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=800",
            scrub: 1,
            delay:1,
        }});
    });

    //функция отправляет страницу вверх
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <section>
      <section className="main__bg" ref={precedingBlockRef}>
        <img className="main__bg__img" src={bg_logo} alt="Студия дизайна интерьеров основана Лашиным Сергеем в 2015 году. В портфолио представлено более 50 выполненных жилых и коммерческих проектов." />
        <div className="main__bg__container">
          <img className="main__bg__container_1 main__bg__container_img" src={bg_logo_1} alt="Проекты и реальный дизайн квартир. Технические сложности совсем не повод отказаться от идеи нового интерьера." />
          <img className="main__bg__container_2 main__bg__container_img" src={bg_logo_2} alt="Терраццо из строительного мусора: экологичный дизайн Устойчивый дизайн." />
          <img className="main__bg__container_3 main__bg__container_img" src={bg_logo_3} alt="Цветовые сочетания в дизайне интерьера приветствуются самые разные: от сложных, насыщенных и драматических тонов до успокаивающих" />
          <img className="main__bg__container_4 main__bg__container_img" src={bg_logo_4} alt="В этом обзоре на примере фото модных интерьеров мы расскажем, как создать современный дизайн комнаты с нуля" />
          <img className="main__bg__container_5 main__bg__container_img" src={bg_logo_5} alt="Дизайн квартиры в современном стиле — это в первую очередь сочетание практичности, уюта, простоты, четких форм и свободного пространства." />
          <img className="main__bg__container_6 main__bg__container_img" src={bg_logo_6} alt="Основное направление работы студии Алены Паутовой — дизайн жилых и общественных интерьеров." />
        </div>
      </section>

      <div className="portfolio_bg_container" ref={imgRef}>
          <img className="portfolio_bg_img" src={portfolio_bg} alt="Нейросеть для дизайна интерьера подскажет, как адаптировать любимый стиль под любые комнаты." />
      </div>

        <section className="portfolio_bg_wrapper">
          <h2 ref={portfolioText}>Gallery</h2>
          <article className="portfolio_bg_grid">
            <div className="portfolio_bg_grid_1" ref={sectionRef_1}>
              <img src={portfolio_item_1} alt="В развитие дизайна интерьера вносят важный вклад современные законодатели этой индустрии, чьи идеи и творения определяют тренды" />
            </div>
            <div className="portfolio_bg_grid_2" ref={sectionRef_2}>
              <img src={portfolio_item_2} alt="Лучшие дизайнеры города, закажите дизайн интерьера любых помещений, любой сложности! · Выезд ко времени. 23 мастера в команде. Доступные цены. Соблюдение сроков. 3D Визуализация. Планировочные решения. Авторский надзор" />
            </div>
            <div className="portfolio_bg_grid_3" ref={sectionRef_3}>
              <img src={portfolio_item_3} alt="Продумаем дизайн коттеджа до мелочей и создадим функциональное пространство." />
            </div>
            <div className="portfolio_bg_grid_4" ref={sectionRef_4}>
              <img src={portfolio_item_4} alt="Дизайн интерьера и ремонт в Челябинске. Грамотный проект под ваш бюджет Создаем топовые дизайны более 10 лет." />
            </div>
            <div className="portfolio_bg_grid_5" ref={sectionRef_5}>
              <img src={portfolio_item_5} alt="Профессиональный дизайн-проект включает в себя все нюансы психологического восприятия интерьера и балансирует между нужным эффектом" />
            </div>
            <div className="portfolio_bg_grid_6" ref={sectionRef_6}>
              <img src={portfolio_item_6} alt="В развитие дизайна интерьера вносят важный вклад современные законодатели этой индустрии, чьи идеи и творения определяют тренды" />
            </div>
            <div className="portfolio_bg_grid_7" ref={sectionRef_7}>
              <img src={portfolio_item_7} alt="Дизайн интерьера гостиной с кухней 28 кв.м в современном стиле и оттенками эко-стиля создавался для молодой семьи." />
            </div>
            <div className="portfolio_bg_grid_8" ref={sectionRef_8}>
              <img src={portfolio_item_8} alt="Homestyler представит сотни популярных и красивых идей дизайна интерьера в 2022 году." />
            </div>
          </article>
          <button className="portfolio_bg_button" onClick={scrollToTop}>
            <Link to="/picture">
              <h6>All projects</h6>
              <img src={buttonImg} alt="Разработка дизайн-проекта интерьера всегда получает своё воплощение в разработке планировочного и стилистического решений, а также" />
            </Link>
          </button>
        </section>
      
    </section>
  );
}

export default Portfolio;