
// bibliotek
import React from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {useRef, useEffect} from "react";
// componets
import Paragraph from "../paragraph/Paragraph";

// style
import "./grid_animation.scss";

// images
import komand_1 from "../../assets/komand/kilyan/1.webp";
import komand_2 from "../../assets/komand/kilyan/2.webp";
import komand_3 from "../../assets/komand/kilyan/3.webp";
import komand_4 from "../../assets/komand/kilyan/4.webp";

import komand_5 from "../../assets/komand/galina/1.webp";
import komand_6 from "../../assets/komand/galina/2.webp";
import komand_7 from "../../assets/komand/galina/3.webp";
import komand_8 from "../../assets/komand/galina/4.webp";
import komand_9 from "../../assets/komand/galina/5.webp";





gsap.registerPlugin(ScrollTrigger);

function GridAnimation(){
    return (
      <section className="komanda__wrapper" id="team">
        <Paragraph title="Our team" />
        <article className="komanda__container _galina">
          <Marquee speed={120}>
            <div className="komanda__text__container">
              <h4>ceo</h4>
              <span>ceo</span>
              <div className="komanda__text__container-img">
                <img src={komand_7} alt="Звоните по телефону, чтобы заказать проект или проконсультироваться с нашими специалистами. Все работы выполняются в соответствии с договором" />
              </div>
              <div className="komanda__text__container-img">
                <img src={komand_9} alt="Нужен мастер по дизайну интерьера в Москве? Цены от рублей/кв.м Отзывы и примеры работ мастеров легко можно найти на сайте" />
              </div>

              <h4>ceo</h4>
              <span>ceo</span>
              <div className="komanda__text__container-img">
                <img src={komand_9} alt="Подборка бесплатных видеоуроков для начинающих на тему «Дизайн интерьера» от Skillbox. Освойте навыки, необходимые для старта карьеры, самостоятельно." />
              </div>
              <div className="komanda__text__container-img">
                <img src={komand_8} alt="Создайте свой идеальный стильный и функциональный интерьер! На онлайн-курсе «Профессия Дизайнер интерьера» вы освоите основы дизайна интерьера и получите" />
              </div>
            </div>
          </Marquee>

          <Marquee speed={160} direction="right">
            <div className="komanda__text__container">
              <h4>Galina</h4>
              <div className="komanda__text__container-img">
                <img src={komand_9} alt="Пройдите онлайн-курс «Дизайн интерьера» от школы дизайна и станьте начинающим профессиональным дизайнером интерьеров жилых помещений!" />
              </div>
              <div className="komanda__text__container-img">
                <img src={komand_5} alt="Бесплатное обучение дизайну интерьеров для начинающих от. Попробуете себя в роли дизайнера интерьера, научитесь создавать дизайн-проект с нуля" />
              </div>
              <span>Lavrishcheva</span>
              <div className="komanda__text__container-img">
                <img src={komand_7} alt="Эти специалисты продумывают концепцию помещения, планировку и зонирование. Они подбирают мебель, декор, цветовую гамму, продумывает систему" />
              </div>
              <div className="komanda__text__container-img">
                <img src={komand_6} alt="Станьте профессиональным дизайнером интерьера с дистанционным курсом Международной Школы Дизайна. Получите диплом IDS, признанный ведущими фирмами Москвы" />
              </div>
              <h4>Lavrishcheva</h4>
              <div className="komanda__text__container-img">
                <img src={komand_9} alt="Дизайнеру интерьера нужно разбираться во многом: стилях, материалах, строительных процессах. Он должен уметь разработать проект дизайна" />
              </div>
              <div className="komanda__text__container-img">
                <img src={komand_6} alt="Онлайн-курс «Дизайнер интерьеров» от Нетологии: Станьте дизайнером интерьеров с нуля! Создайте портфолио с проектами в 3D, работайте с реальными заказами и" />
              </div>
              <span>Lavrishcheva</span>
            </div>
          </Marquee>
        </article>

        <article className="komanda__container _kilian">
          <div className="komanda__text">
            <Marquee>
              <div className="komanda__text__container">
                <h4>ART</h4>
                <span>DIRECTOR</span>
                <div className="komanda__text__container-img">
                  <img src={komand_1} alt="Ежедневно обновляемый информационный интернет-ресурс, посвящённый актуальным тенденциям в дизайне, архитектуре и арте." />
                </div>
                <div className="komanda__text__container-img">
                  <img src={komand_4} alt="В этой подборке — студии и бюро, которые занимаются архитектурой и дизайном интерьеров, частных и общественных, новых и исторических." />
                </div>
                <h4>ART</h4>
                <span>DIRECTOR</span>
                <div className="komanda__text__container-img">
                  <img src={komand_3} alt="Мы реализовали уже более 700 дизайн-проектов в разных стилях интерьера. Обустроим пространство в том стиле, который вы предпочитаете. Мы сможем оценить свободны" />
                </div>
                <div className="komanda__text__container-img">
                  <img src={komand_4} alt="Чем дороже ремонт — тем сложнее проект. Стоимость дизайн-проекта стандартной квартиры начинается" />
                </div>
              </div>
            </Marquee>
          </div>
          <div className="komanda__text">
            <Marquee speed={130} direction="right">
              <div className="komanda__text__container">
                <h4>kilian</h4>
                <span>Svetlana</span>
                <div className="komanda__text__container-img">
                  <img src={komand_4} alt="Наша студия более 11 лет специализируется на создании дизайн-проектов интерьера квартир, домов и коммерческих помещений любой сложности. Мы готовы предложить" />
                </div>
                <div className="komanda__text__container-img">
                  <img src={komand_1} alt="Студия дизайна предлагает разработку проектов интерьеров и ремонт по выгодным ценам. Бесплатная консультация дизайнера по телефону." />
                </div>
                <h4>Svetlana</h4>
                <span>kilian</span>
                <div className="komanda__text__container-img">
                  <img src={komand_2} alt="Заказать элитный дизайн интерьера под ключ в студии TB.Design. Реализация авторских дизайнерских проектов в Москве, РФ, СНГ" />
                </div>
                <div className="komanda__text__container-img">
                  <img src={komand_4} alt="Студия дизайна интерьера в Москве. Создадим дизайн-проект интерьера для вашей квартиры или частного дома в современном стиле!" />
                </div>
              </div>
            </Marquee>
          </div>
        </article>
      </section>
    );
}

export default GridAnimation;