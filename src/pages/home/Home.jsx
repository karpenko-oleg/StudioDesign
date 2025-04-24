import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

// библиотеки
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// база данных
import freightObjDat from "../../assets/freightObj.js";
// стиль
import "./home.scss";
// компоненты
import Awards from "../../components/awards/Awards";
import Spiner from "../../components/preloader/Spiner.jsx";

const ScrollGorizont = lazy(() => import('../../components/scrollGorizont/ScrollGorizont.jsx'));
const ScrollGorizontTwo = lazy(() => import('../../components/scrollGorizont/ScrollGorizontTwo.jsx'));
const Portfolio = lazy(() => import('../../components/portfolio/Portfolio.jsx'));
const About = lazy(() => import('../../components/about/About.jsx'));
const GridAnimation = lazy(() => import('../../components/grid_animation/GridAnimation.jsx'));
const Work = lazy(() => import('../../components/work/Work.jsx'));
const Freight = lazy(() => import('../../components/freight/Freight.jsx'));

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <section className="main__container">
      <Helmet>
        <title>Дизайн интерьера Q2studio</title>
        <meta
          name="description"
          content="Наша студия дизайна и интерьера предлагает услуги по разработке и оформлению необычных интерьеров не только в Краснодаре, но и во всех других областях. Мы работаем с 3D-визуализацией. 📞 +79163131255"
        />
        <meta name="keywords" content="дизайн интерьера, интерьер, студия дизайна, Краснодар, 3D-визуализация, необычные интерьеры" />
        <meta name="author" content="Q2studio" />
      </Helmet>
      <Suspense fallback={<Spiner />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<Spiner />}>
        <Work />
      </Suspense>
      <Suspense fallback={<Spiner />}>
        <ScrollGorizont />
      </Suspense>
      <Suspense fallback={<Spiner />}>
        <ScrollGorizontTwo />
      </Suspense>
      <Suspense fallback={<Spiner />}>
        <About />
      </Suspense>
      <Suspense fallback={<Spiner />}>
        <GridAnimation />
      </Suspense>
      <Suspense fallback={<Spiner />}>
        <Freight freightObjDat={freightObjDat} />
      </Suspense>
      <Awards />
    </section>
  );
}

export default Home;
