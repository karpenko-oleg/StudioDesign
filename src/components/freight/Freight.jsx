import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import "./freight.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Paragraph from '../paragraph/Paragraph';




export default function Freight({ freightObjDat }){
    return(
        <section className="freight__wrapper">
            <Paragraph title="We work with"/>
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={"1"}
              autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                  waitForTransition: true,
                }}
              loop={true}
              speed={1300}
            >
        {freightObjDat?.map((item) => (
          <SwiperSlide key={item.id}>
          <section className="freight__container">
            <article className="freight__left">
                <div className="freight__left__title">
                    <div className="freight__left__title__img1"><img src={item.slide1_item_1} alt="Студия дизайна интерьера и архитектурное бюро в Москве Geometrium. Дизайн проекты премиум сегмента и архитектурное проектирование для инвестиционной" /><div className='freight__left__title__img1_item_1'>{item.title_slide1_item_1}<h3>{item.subtitle_slide1_item_1}</h3></div></div>
                    <div className="freight__left__title__img2"><img src={item.slide1_item_5} alt="студия дизайна интерьера в Москве, специализирующаяся на создании уникальных дизайн-проектов для жилых и коммерческих помещений" /><div className='freight__left__title__img1_item_2'>{item.title_slide1_item_2}<h3>{item.subtitle_slide1_item_2}</h3></div></div>
                </div>
                <div className="freight__left__center">
                    <div className="freight__left__center__img1"><img src={item.slide1_item_2} alt="профессиональный дизайн интерьера под ключ. Наша команда поможет воплотить ваши мечты в реальность, предоставляя полный цикл услуг" /></div>
                    <div className="freight__left__center__img2"><img src={item.slide1_item_6} alt="роекты и интерьеры в ленте - только нашей студии. Москва, тел." /></div>
                </div>
            </article>
            <article className="freight__right" style={{backgroundColor: `${item.collorBg_1}`}}>
                <span style={{backgroundColor: `${item.collorBg_2}`}}></span>
                <aside className="freight__right__top">
                    <div className="freight__right__top__img1"><img src={item.slide1_item_3} alt="Дизайн-проект интерьера под ключ · Портфолио · Результат соответствует дизайн-проекту · В Geometrium работают только лучшие специалисты, по-другому просто " /></div>
                    <div className="freight__right__top__img2"><img src={item.slide1_item_7} alt="Друзья, сегодня пришло время вновь посмотреть на новые тренды дизайна интерьера - на этот раз смотрим в 2025-й это сочетание стиля и индивидуальности. Наша команда" /></div>
                </aside>
                <aside className="freight__right__bottom">
                    <h3 className="freight__right__bottom__visible" >{item.suptitle_slide1_item_1}</h3>
                    <h3 className="freight__right__bottom__invisible">{item.suptitle_slide1_item_1}</h3>
                    <div className="freight__right__bottom__img1"><img src={item.slide1_item_4} alt="Идеальный дизайн для Вашего интерьера от лучших дизайнеров-архитекторов. Выполняем дизайны по закону Нойферта и правилам функциональности" /></div>
                    <div className="freight__right__bottom__img2"><img src={item.slide1_item_8} alt="Базовый курс» — короткая версия одноимённой бакалаврской программы Школы дизайна НИУ ВШЭ. Групповыми семинарами руководят" /></div>
                </aside>
            </article>
          </section>
          </SwiperSlide>
        ))}
      </Swiper>
        </section>
    )
}