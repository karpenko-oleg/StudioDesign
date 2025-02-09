// bibliotek
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useLayoutEffect} from "react";

// style
import "./scrollGorizont.scss";
//images

// avatar_1
import avatar_1 from "../../assets/avaters/avatar_1/bgItem1.png";
import anketa from "../../assets/avaters/avatar_1/anketa.png";
import balls from "../../assets/avaters/avatar_1/allBals.png";
import konfeta_1 from "../../assets/avaters/avatar_1/konfeta.png";
import konfeta_2 from "../../assets/avaters/avatar_1/konfeta2.png";
import krujka_1 from "../../assets/avaters/avatar_1/kaplya1.png";
import krujka_4 from "../../assets/avaters/avatar_1/krujkaKapli.png";
import krujka_6 from "../../assets/avaters/avatar_1/ruchka.png";
import krujka_7 from "../../assets/avaters/avatar_1/tochka.png";
// avatar 2
import balss from "../../assets/avaters/avatar_2/allBalsTwo.png";
import plan_1 from "../../assets/avaters/avatar_2/plan1.png";
import plan_2 from "../../assets/avaters/avatar_2/plan2.png";
import word from "../../assets/avaters/avatar_2/wordR.png";
import two from "../../assets/avaters/avatar_2/twoNum.png";
import tochka from "../../assets/avaters/avatar_2/tochka.png";
// avatar 3
import steny from "../../assets/avaters/avatar_3/steny.png";
import divan from "../../assets/avaters/avatar_3/divan.png";
import kreslo from "../../assets/avaters/avatar_3/kreslo.png";
import kruslo from "../../assets/avaters/avatar_3/kreslo2.png";
import stolik from "../../assets/avaters/avatar_3/stol2.png";
import stolik_3 from "../../assets/avaters/avatar_3/stol3.png";
import stolik_2 from "../../assets/avaters/avatar_3/stol2.png";
import tochca from "../../assets/avaters/avatar_3/tochka.png";
import doggi from "../../assets/avaters/avatar_3/dog.png";
// avatar 4
import truby from "../../assets/avaters/avatar_4/bgItem4.png";
import rosetka from "../../assets/avaters/avatar_4/rosetka.png";
import tochcca from "../../assets/avaters/avatar_4/tochka.png";
import svetilnik_1 from "../../assets/avaters/avatar_4/svetilnik1.png";
import svetilnik_2 from "../../assets/avaters/avatar_4/svetilnik2.png";
import uslovRosetka_1 from "../../assets/avaters/avatar_4/rosetka1.png";
import uslovRosetka_2 from "../../assets/avaters/avatar_4/rosetka2.png";
import kapli_1 from "../../assets/avaters/avatar_4/kap1.png";
import kapli_2 from "../../assets/avaters/avatar_4/kap2.png";
import kapli_3 from "../../assets/avaters/avatar_4/kap3.png";
import kapli_4 from "../../assets/avaters/avatar_4/kap4.png";
import kapli_5 from "../../assets/avaters/avatar_4/kap5.png";
import kapli_6 from "../../assets/avaters/avatar_4/kap6.png";
import kapli_7 from "../../assets/avaters/avatar_4/kap7.png";

gsap.registerPlugin(ScrollTrigger);

function ScrollGorizont(){

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
    return (
      <section
        className="scrollGorizont__wrapper scrollGorizont__wrapper_top"
        id="services"
      >
        <div ref={component}>
          <div className="scrollGorizont__container__top" ref={slider}>
            {[1, 2, 3, 4].map((sectionNumber) => (
              <Section key={sectionNumber} sectionNumber={sectionNumber} />
            ))}
          </div>
        </div>
      </section>
    );
}
const Section = ({ sectionNumber }) => {
    const images = {
        1: [{src:balls, className:"scrollGorizont__image_1_3", alt:"Студия дизайна реализует интерьеры «под ключ» — от замеров до готового ремонта с авторским надзором."},{src:avatar_1, className:"scrollGorizont__image_1_1", alt:"Простой и удобный конструктор для дизайна интерьера. позволяет быстро и эффективно визуализировать Ваш проект интерьера"},{src:anketa, className:"scrollGorizont__image_1_2", alt:"Дизайны интерьеров в современном стиле в фотографиях"}, {src:konfeta_1, className:"scrollGorizont__image_1_4", alt:"Эклектичные интерьеры, вобравшие в себя лучшее, что могут предложить современные стили – минимализм, скандинавский дизайн,"}, {src:konfeta_2, className:"scrollGorizont__image_1_5", alt:""}, {src:krujka_1, className:"scrollGorizont__image_1_6", alt:"При дизайне рекомендуют использовать мебель необычных форм и размеров, ткани и материалы ярких расцветок"}, {src:krujka_4, className:"scrollGorizont__image_1_7", alt:"Лучшие дизайнеры города, закажите дизайн интерьера любых помещений, любой сложности! · Выезд ко времени. 23 мастера в команде. Доступные цены. Соблюдение сроков. 3D Визуализация. Планировочные решения. Авторский надзор"}, {src:krujka_6, className:"scrollGorizont__image_1_8", alt:"Продумаем дизайн коттеджа до мелочей и создадим функциональное пространство"}, {src:krujka_7, className:"scrollGorizont__image_1_9", alt:"Дизайн интерьера и ремонт в Челябинске. Грамотный проект под ваш бюджет"}],
        2: [{src:balss, className:"scrollGorizont__image_2_8", alt:"Дизайн проект интерьер рабочего кабинета от профессионалов Узнать подробнее"}, {src:plan_1, className:"scrollGorizont__image_2_2", alt:"Дизайн-проект интерьера в Москве включая эскизный и рабочий проекты за кв. м. ... Дизайн 3-комнатной квартиры в ЖК"}, {src:plan_2, className:"scrollGorizont__image_2_3", alt:"Лучшие интерьеры от профессиональных дизайнеров со всего мира, снятые с любовью."}, {src:word, className:"scrollGorizont__image_2_4", alt:"Продуманный дизайн интерьера, который соответствует вашему эстетическому коду, а также четкий план для ремонта и понимание сколько денег надо"}, {src:two, className:"scrollGorizont__image_2_5", alt:"Дизайн интерьера в 2023 диктует «теплые» тенденции – мягкие оттенки, теплая энергия домашнего очага, спокойствие и нежность."}, {src:tochka, className:"scrollGorizont__image_2_6", alt:"Дизайн интерьера квартиры 180м2 в ЖК «Врубеля 4» в стиле фьюжн."}],
        3: [{src:balls, className:"scrollGorizont__image_3_0", alt:"Студия дизайна интерьера ED–studio готова взять на себя все заботы по его воплощению."}, {src:steny, className:"scrollGorizont__image_3_1", alt:"Чтобы четко знать, каким будет интерьер после обновления, рекомендуем заказать дизайн-проект квартиры у специалистов компании «Сказано-Сделано»."}, {src:divan, className:"scrollGorizont__image_3_2", alt:"дизайн интерьера, квартира, интерьер, дизайн квартир, кухня-гостиная 19 кв.м проходная."}, {src:kreslo, className:"scrollGorizont__image_2_7", alt:"Объявления по запросу «дизайн интерьера» в Москве."}, {src:kruslo, className:"scrollGorizont__image_3_4", alt:"Также интерьер в европейском стиле может включать в себя элементы дизайна в стиле контемпорари или ар-деко, если речь идет о декоре."}, {src:stolik, className:"scrollGorizont__image_3_5", alt:"Расстановка мебели в квартире-студии · гостиная (в центре помещения) — диван, ковер, столик, торшер; · кухня (возле стены или в углу) — гарнитур, остров"}, {src:stolik_3, className:"scrollGorizont__image_3_6", alt:"Реклама От идеи до воплощения дизайн интерьера офиса. Узнать подробнее"}, {src:stolik_2, className:"scrollGorizont__image_3_7", alt:"предоставляем услуги по разработке дизайна интерьера в любом стиле и сложности. Наши дизайн проекты отмечен"}, {src:tochca, className:"scrollGorizont__image_3_8", alt:"Background -. архитектурная студия из Санкт-Петербурга/Москвы, которая создает авторские современные интерьеры квартир, частных домов и общественных пространств"}, {src:doggi, className:"scrollGorizont__image_3_9", alt:"Дизайн студия Тинтерио. Разрабатываем эксклюзивные интерьеры для частных и общественных объектов. Реализуем смелые решения, выдерживая баланс между стиле"}],
        4: [{src:balss, className:"scrollGorizont__image_4_0", alt:"Студия дизайна интерьера Надежды Кузиной · Может ли прибрежный стиль действительно сделать ваш дом дорогим? / Стили интерьера · Вариативность в дизайн проекте"}, {src:truby, className:"scrollGorizont__image_4_1", alt:"Разработка дизайна интерьера квартир, офисов, ресторанов и частных домов в"},{src:rosetka, className:"scrollGorizont__image_4_2", alt:"Главная Российское дополнительное образование Студия дизайна интерьера: открытие и управление Студия дизайна интерьера: открытие и управление Практические"},{src:tochcca, className:"scrollGorizont__image_2_7", alt:"Продумаем дизайн коттеджа до мелочей и создадим функциональное пространство."} ,{src:svetilnik_1, className:"scrollGorizont__image_4_4", alt:"Дизайн интерьера и ремонт в Челябинске. Грамотный проект под ваш бюджет"},{src:svetilnik_2, className:"scrollGorizont__image_4_5", alt:"Дизайн интерьера в Москве, Яндекс Карты: телефоны, часы работы, фото, входы, отзывы, как проехать на транспорте или пройти пешком."},{src:uslovRosetka_1, className:"scrollGorizont__image_4_6", alt:"Дизайн интерьера – студии дизайна и частные дизайнеры. · ЖК. 1 из 1 · 3D Визуализация гостиной 3. 1 из 1 · Слайд-шоу профиля. 1 из 1 · ПОДМОСКОВНЫЙ ..."}, {src:uslovRosetka_2, className:"scrollGorizont__image_4_7", alt:"В своих проектах мы уделяем внимание каждой мелочи. Уникальность интерьеров, которые"},{src:kapli_1, className:"scrollGorizont__image_4_8", alt:"студия дизайна интерьера в Москве, специализирующаяся на улучшении планировки квартир, коттеджей и общественных помещений."},{src:kapli_2, className:"scrollGorizont__image_4_9", alt:"Студия выполнит точно в срок заказы различных ценовых категорий. Поможем найти личный, неповторимый и оригинальный стиль интерьера."},{src:kapli_3, className:"scrollGorizont__image_4_10", alt:"А в дизайне интерьеров, винтаж – обстановка прошлого, как правило, конца ХIX — начала XX века."},{src:kapli_4, className:"scrollGorizont__image_4_11", alt:"Подходящих фрилансеров легко найти на Профи. Выбирайте лучших по цене и отзывам. · Уже 14 млн клиентов. Более 8 млн отзывов. 3 млн специалистов. 900 видов услуг. На рынке с 2014 года. Работают очно и онлайн"}, {src:kapli_5, className:"scrollGorizont__image_4_12", alt:"Раздел о дизайне интерьера заслуживает отдельного внимания: здесь есть галерея интерьеров, откуда можно черпать вдохновение"},{src:kapli_6, className:"scrollGorizont__image_4_13", alt:"Мы реализовываем дизайн интерьера под ключ со своей командой строителей, инженеров, дизайнеров и комплектаторов."} ,{src:kapli_7, className:"scrollGorizont__image_4_14", alt:"Избегайте монохрома – обязательно добавьте ярких пятен в современный стиль в дизайне интерьера."}]
    };
    const titles = {
        1: ["Как мы", "работаем?"],
        2: ["Далее", "планировка"],
        3: ["Далее", "концепция"],
        4: ["Далее", "пакет схем"],
    };
    const subtitles = {
        1: ["Мы работаем красиво", "и эффективно."],
        2: ["Расстановка мебели", "и оборудования"],
        3: ["Подбор материалов,","мебели, освещения"],
        4: ["Расположение всех элементов","с наименованиями и размерами"],
    };
    const process ={
        1:["Подготовительные", "работы"],
        2:["Планировочное решение"],
        3:["Концептуальное", "решение"],
        4:["Документация"],
    }
    const suptitle = {
        1:["- Обмер", "- Анкетирование", "- Творческое задание"],
        2:["- 3 варианта объемно-планировочнго решения с расстановкой мебели и оборудования"],
        3:["- Мудборды", "- Коллажи", "- 3D - визуализации"],
        4:["- Планы", "- Схемы", "- Развертки", "- Ведомости"],
    }
    const position = {
        1:"I этап.",
        2:"II этап.",
        3:"III этап.",
        4:"IV этап.",
    }
    const column1 = {
        1: [
            "Согласовываем дату и время выезда на обмер в удобное для вас время. Подробно замеряем помещение, все вводы и выводы коммуникаций.",
        ],
        2: [
            "На данном этапе мы продумываем оптимальное зонирование, функциональность, эргономичность помещения.",
        ],
        3: [
            "3D - визуализации - объемное фотореалистичное изображение интерьера и помещения, наиболее подробно отражающее сочетание текстур и фактур материалов, мебели и декора: световые сценарии, цветовые решения. Позволяют понять, как будет выглядеть интерьер после завершения ремонтных работ.",
        ],
        4: [
            "- обмерный план",
            "- планировка",
            "- пакет схем монтажа/демонтажа",
            "- пакет схем расположения напольных покрытий/плинтусов/теплых полов",
            "- схем потолков",
            "- пакет схем расположения освещения/электрических выводов",
        ]
    };
    const column2 = {
        1: [
            "Специально для вас мы создали очень подробную анкету, дающую объёмное представление о ваших потребностях, вкусовых предпочтениях.",
        ],
        2: [
            "Предлагаем разнообразные варианты размещения мебели, чтобы у вас была возможность выбора наиболее удобной и оптимальной конфигурации пространства."
        ],
        3: [
            "Также на данном этапе мы определяемся с бюджетом, материалами и уточняем стоимость основных позиций."
        ],
        4: [
            "- схема расположения сантехники",
            "- развертки помещений с указанием расположения мебели/видов отделки/оборудования",
            "- эскизные чертежи заказной мебели",
            "- пакет ведомостей на отделочные материалы/сантехнику/освещение/мебель"
        ]
    };
    const column3 = {
        1:["Творческое задание – по итогам анкетирования, мы составляем документ, объединяющий всю собранную ранее информацию в формате красивой и удобной презентации."],
        2:[''],
        3:[''],
        4:[''],
    }

    return (
        <section className={`scrollGorizont__section_${sectionNumber} _scrollGorizont__section_top panel`}>
            <div className={`scrollGorizont__images_avatar_${sectionNumber} _section__avatar`}>
                {images[sectionNumber].map((src, index) => (
                    <img key={index} className={`scrollGorizont__image_${sectionNumber}_${index}`} src={src.src} alt={`image_${sectionNumber}_${index}`} />
                ))}
            </div>
            <div className={`scrollGorizont__section_${sectionNumber}_text scrollGorizont__text`}>
                <article className="scrollGorizont__section_text_title__top">
                    <aside className="scrollGorizont__section_text_title__top_sub">
                        <h4>{titles[sectionNumber].map((titles, index) => <React.Fragment key={index}> {(titles)}<br/> </React.Fragment>)}</h4>
                    </aside>
                    <h3>{subtitles[sectionNumber].map((subtitles, index) => <React.Fragment key={index}> {subtitles}<br /></React.Fragment>)}</h3>
                </article>
                <article className="scrollGorizont__section_text_title__center">
                    <h5><span>{position[sectionNumber]}</span><br />{process[sectionNumber].map( (process, index) => <React.Fragment key={index}>{process}<br/> </React.Fragment>)}
                        <div className="title__center__container">{suptitle[sectionNumber].map((suptitle, index) => <React.Fragment key={index}>{suptitle}<br /></React.Fragment>)}</div>
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


export default ScrollGorizont;

