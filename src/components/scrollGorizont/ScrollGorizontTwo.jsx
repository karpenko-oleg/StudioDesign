// bibliotek
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useLayoutEffect} from "react";

// style
import "./scrollGorizont.scss";


//images
import balls from "../../assets/avaters/avatar_1/allBals.png";
// avatar 2
import balss from "../../assets/avaters/avatar_2/allBalsTwo.png";
// avatar 5
import kamera from "../../assets/avaters/avatar_5/kamera.png";
import vopros from "../../assets/avaters/avatar_5/voprosDialog.png";
import videoSvajz from "../../assets/avaters/avatar_5/videosviz.png";
import mobil from "../../assets/avaters/avatar_5/mobil.png";
import telegram_2 from "../../assets/avaters/avatar_5/telegram.png";
import vacap from "../../assets/avaters/avatar_5/whatsapp.png";
import posta from "../../assets/avaters/avatar_5/pochta.png";
import vacap_2 from "../../assets/avaters/avatar_5/whatsapp2.png";
import mulo from "../../assets/avaters/avatar_5/email.png";
import video_2 from "../../assets/avaters/avatar_5/videosviz2.png";
import telegram_1 from "../../assets/avaters/avatar_5/telegram2.png";
import disainer from "../../assets/avaters/avatar_5/disainer.png";
import stroitel from "../../assets/avaters/avatar_5/stroitel.png";
// avatar 6
import klient from "../../assets/avaters/avatar_6/klient.png";
import trubka from "../../assets/avaters/avatar_6/telefon.png";
//avatars 7
import divanchik from "../../assets/avaters/avatar_7/divan.png";
import kavs from "../../assets/avaters/avatar_7/kavs.png";
import kreslo_2 from "../../assets/avaters/avatar_7/kreslo2.png";
import kreslo_1 from "../../assets/avaters/avatar_7/kreslo.png";
import lampa from "../../assets/avaters/avatar_7/lampa.png";
import mobilnik from "../../assets/avaters/avatar_7/mobiln.png";
import dog from "../../assets/avaters/avatar_7/dog.png";
import stol_2 from "../../assets/avaters/avatar_7/stol2.png";
import stol_3 from "../../assets/avaters/avatar_7/stol3.png";
import stol_1 from "../../assets/avaters/avatar_7/stol.png";
import stul from "../../assets/avaters/avatar_7/stul.png";

gsap.registerPlugin(ScrollTrigger);

function ScrollGorizontTwo(){

    const component = useRef();
    const slider = useRef();
  
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + slider.current.offsetWidth
          }
        });
      }, component);
      return () => ctx.revert();
    });
   
    return(
        <section className="scrollGorizont__wrapper">
            <div ref={component}>
                <div className="scrollGorizont__container__bottom" ref={slider}>
                    {[5, 6, 7].map(sectionNumber => (
                        <Section key={sectionNumber} sectionNumber={sectionNumber} />
                    ))}
                </div>
            </div>
        </section>
    )
}
const Section = ({ sectionNumber }) => {
    const images = {
        5: [{src:balls, className:"scrollGorizont__image_5_0", alt:"Студия Стены делала нам дизайн в квартире 100 кв.м в Ривердей и вели авторский надзор, что очень удобно! Учли все наши пожелания по цветовой гамме и важным"},{src:kamera, className:"scrollGorizont__image_5_1", alt:"Выбор студии дизайна — важный момент, от которого зависит, насколько комфортным будет создание интерьера вашего дома и насколько успешным"},{src:vopros, className:"scrollGorizont__image_5_2", alt:"Дизайн квартиры-студии: правила оформления, планировки квартир-студий, студия с кроватью и окном. 50 фото-идей по оформлению квартиры-студии в 2024 году в"}, {src:videoSvajz, className:"scrollGorizont__image_5_3", alt:"Услуги студии дизайна интерьеров квартир и домов под ключ в Москве по выгодным ценам за м2 с материалами от компании"}, {src:trubka, className:"scrollGorizont__image_5_4", alt:""}, {src:telegram_2, className:"scrollGorizont__image_5_5", alt:"Мы основали Geometrium 5 лет назад. Это мастерская, которая занимается современным дизайном интерьеров. Наши основные клиенты — жители мегаполиса. Чаще всего мы"}, {src:vacap, className:"scrollGorizont__image_5_6", alt:"При проектировании квартиры-студии не стоит захламлять и перегружать интерьер декором и мебелью. «Перенасыщенность предметов будет сужать"}, {src:posta, className:"scrollGorizont__image_5_7", alt:"В студии создают интерьеры на нейтральной основе, уделяя особое внимание рациональной организации пространства, цветовому и фактурному балансу"}, {src:vacap_2, className:"scrollGorizont__image_5_8", alt:"Указаны средние цены на 2024 год. Как выбрать студию дизайна интерьера в Москве. В создании интерьера много субъективных подходов и решений, поэтому"}, {src:mulo, className:"scrollGorizont__image_5_9", alt:"студия с большим опытом в создании функциональных и красивых интерьеров квартир, частных домов, офисов и заведений общественного питания"},{src:video_2, className:"scrollGorizont__image_5_10", alt:"Мы создаем эксклюзивный дизайн для любого типа недвижимости. Узнайте больше о и нашем комплексном подходе к дизайну интерьеров"},{src:telegram_1, className:"scrollGorizont__image_5_11", alt:"Студия дизайна элитных интерьеров Павла Полынова оказывает профессиональные услуги по созданию интерьеров квартир, загородных домов, офисов и коммерческих"},{src:disainer, className:"scrollGorizont__image_5_12", alt:"Белый и серый уступают место теплым бежевым, кофейным и земляным оттенкам. Нейтральная палитра создает чувство гармонии и позволяет расслабиться"},{src:klient, className:"scrollGorizont__image_5_13", alt:""}],
        6: [{src:balls, className:"scrollGorizont__image_6_0", alt:"студия, которая не только разрабатывает, но и реализует дизайн-проекты. Многолетний опыт работы позволяет нам создавать дизайн интерьера любой"},{src:kamera, className:"scrollGorizont__image_6_1", alt:"Студия дизайна интерьера и ремонта (СПб). Разработка дизайн-проекта под ключ (✓услуга комплектации в подарок!). Бюро с опытными дизайнерами"},{src:vopros, className:"scrollGorizont__image_6_2", alt:"Студия дизайна - команда дизайнеров интерьера под руководством"}, {src:videoSvajz, className:"scrollGorizont__image_6_3", alt:""}, {src:mobil, className:"scrollGorizont__image_6_4", alt:"Дизайн проекты жилья и нежилых помещений от студии"}, {src:telegram_2, className:"scrollGorizont__image_6_5", alt:""}, {src:vacap, className:"scrollGorizont__image_6_6", alt:""}, {src:posta, className:"scrollGorizont__image_6_7", alt:"Разработка дизайн-проектов квартир, домов и коммерческих помещений в различных стилях под ключ. Авторский надзор. Цены от 22 USD за 1 квадратный метр"}, {src:vacap_2, className:"scrollGorizont__image_6_8", alt:""}, {src:mulo, className:"scrollGorizont__image_6_9", alt:""},{src:video_2, className:"scrollGorizont__image_6_10", alt:""},{src:telegram_1, className:"scrollGorizont__image_6_11", alt:""},{src:disainer, className:"scrollGorizont__image_6_12", alt:""},{src:stroitel, className:"scrollGorizont__image_6_13", alt:""}],
        7: [{src:balss, className:"scrollGorizont__image_7_0", alt:""}, {src:divanchik, className:"scrollGorizont__image_7_1", alt:""}, {src:kavs, className:"scrollGorizont__image_7_2", alt:""}, {src:kreslo_2, className:"scrollGorizont__image_7_3", alt:""}, {src:kreslo_1, className:"scrollGorizont__image_7_4", alt:""}, {src:lampa, className:"scrollGorizont__image_7_5", alt:""}, {src:mobilnik, className:"scrollGorizont__image_7_6", alt:""}, {src:dog, className:"scrollGorizont__image_7_7", alt:""}, {src:stol_2, className:"scrollGorizont__image_7_8", alt:""}, {src:stol_3, className:"scrollGorizont__image_7_9", alt:""},{src:stol_1, className:"scrollGorizont__image_7_10", alt:""},{src:stul, className:"scrollGorizont__image_7_11", alt:""}, {src:disainer, className:"scrollGorizont__image_7_12", alt:""}],
    };
    const process ={
        5:["I консультации"],
        6:["II авторское", "сопровождение"],
        7:["III комплектация"],
    }
    const suptitle = {
        5:["- По планировочным решениям", "- По концепции интерьера", "- По подбору отделочных материалов", "- По подбору мебели, освещения и декора"],
        6:["- Выезды на объект 1-2 раза в неделю и контроль за реализацией ремонта в соответствии с дизайн - проектом"],
        7:["- Выезды на объект 1-2 раза в неделю и контроль за реализацией ремонта в соответствии с дизайн - проектом"],
    }
    const column1 = {
        5: [
            "1. Вы прописываете список вопросов, фотоотчет, иногда нужен план, иногда аналоги того, что вам нравится.",
        ],
        6: [
            "Решение вопросов заказчика и строителей в режиме online в общем чате.",
        ],
        7: [
            "Сопровождение закупки, приемки материалов и предметов мебели на объекте.",
        ],
    };
    const column2 = {
        5: [
            "2. Мы договариваемся с Вами о времени и место встречи, где мы даем ответы на все ваши вопросы.",
        ],
        6: [
            "Утверждение отделочных материалов на объекте."
        ],
        7: [
            "Помощь в работе с рекламациями."
        ],
    };
    const column3 = {
        5:["3. Место встеречи может быть: сам объект, удобное кафэ, онлайн встреча, аудиозвонок или мы отправляемся с вами на шопинг, где помогаем подобрать всю необходимую отделку и подходящие вашему запросу предметы интерьера."],
        6:['Внесение изменений в схемы и планы.'],
        7:[''],
    }

    return (
        <section className={`scrollGorizont__section_${sectionNumber} _scrollGorizont__section_bottom panel`}>
            <article className={`scrollGorizont__images_avatar_${sectionNumber} _section__avatar`}>
                {images[sectionNumber].map((src, index) => (
                    <img key={index} className={`scrollGorizont__image_${sectionNumber}_${index}`} src={src.src} alt={`image_${sectionNumber}_${index}`} />
                ))}
            </article>
            <div className={`scrollGorizont__section_${sectionNumber}_text scrollGorizont__text`}>
                <article className="scrollGorizont__section_text_title__top">
                    <div className="scrollGorizont__section_text_title__top_sub">
                        <h4>Реализация<br />дизайн проекта</h4>
                    </div>
                    <h3>Онлайн и офлайн <br />сопровождение</h3>
                </article>
                <article className="scrollGorizont__section_text_title__center">
                    <h5>{process[sectionNumber].map( (process, index) => <React.Fragment key={index}>{process}<br/> </React.Fragment>)}
                        <div className="title__center__container scrollGorizont__container__bottom__text">{suptitle[sectionNumber].map((suptitle, index) => <React.Fragment key={index}>{suptitle}<br /></React.Fragment>)}</div>
                    </h5>
                </article>
                <article className="scrollGorizont__section_text_title__bottom">
                    <h5>{column1[sectionNumber].map( (column1, index) => <React.Fragment key={index}>{column1}<br/> </React.Fragment>)}</h5>
                    <h5>{column2[sectionNumber].map( (column2, index) => <React.Fragment key={index}>{column2}<br/> </React.Fragment>)}</h5>
                    <h5>{column3[sectionNumber].map( (column3, index) => <React.Fragment key={index}>{column3}<br/> </React.Fragment>)}</h5>
                </article>
            </div>
        </section>
    );
};


export default ScrollGorizontTwo;
