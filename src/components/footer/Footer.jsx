// bibliotek
import React, {useState} from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
// style
import "./footer.scss"

// images
import footer_bg from "../../assets/footer/1.jpg"
import socialIcon_1 from "../../assets/icon/behance.svg";
import socialIcon_2 from "../../assets/icon/facebook.svg";
import socialIcon_3 from "../../assets/icon/gmail.svg";
import socialIcon_4 from "../../assets/icon/instagram.svg";
import socialIcon_5 from "../../assets/icon/pinterest.svg";
import socialIcon_6 from "../../assets/icon/vkontakte.svg";
import chary_1 from "../../assets/footer/bals1.png";
import chary_2 from "../../assets/footer/bals2.png";
import chary_3 from "../../assets/footer/bals5.png";


function Footer(){

    const [messageName, setMessageName] = useState("");
    const [messageAdress, setMessageAdress] = useState("");
    const [messageText, setMessageText] = useState("");
    const [phone, setPhone] = useState('');

   const urlSend = `Заявка с сайта! \nИмя: ${messageName},\nАдрес: ${messageAdress}, \nНомер телефона: ${phone}, \nТекст: ${messageText}`
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${process.env.REACT_APP_URLBOT}`, {
          chat_id: process.env.REACT_APP_CHATID,
          text: urlSend,
      });
        alert("Уведомление успешно отправлено!");
        setMessageName("");
      } catch (error) {
        console.error(error);
        alert("Ошибка при отправке уведомления!");
      }
    };
    

    const handlePhoneChange = (e) => {
      const value = e.target.value.replace(/\D/g, '');
      const formattedPhone = formatPhoneNumber(value);
      setPhone(formattedPhone);
    };

    const formatPhoneNumber = (value) => {
      if (!value) return value;
      const phoneNumber = value.replace(/[^\d]/g, '');
      const phoneNumberLength = phoneNumber.length;

      if (phoneNumberLength < 2) return `+${phoneNumber}`;
      if (phoneNumberLength < 5) return `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1)}`;
      if (phoneNumberLength < 8) return `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 4)}-${phoneNumber.slice(4)}`;
      if (phoneNumberLength < 10) return `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 4)}-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
      return `+${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 4)}-${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    };

    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <section className="footer__container">
            <img className="footer__img_bg1" src={chary_1} alt="Лучшие интерьеры от профессиональных дизайнеров со всего мира, снятые с любовью. Отличное место для поиска дизайнера для своего дома или квартиры" />
            <img className="footer__img_bg2" src={chary_2} alt="Что можно сделать в Нарисуйте 2D план помещения · Можно рисовать поверх чертежа · Добавляйте окна и двери · Подбирайте отделочные материалы." />
            <img className="footer__img_bg3" src={chary_3} alt="Дизайн интерьера — это процесс создания гармоничного и функционального пространства внутри помещения," />
            <img className="footer__img_bg4" src={chary_3} alt="Выберите готовый бесплатный дизайн-проект с визуализацией интерьера, мебелью и товарами для дома из магазина HOFF" />

            <article className="footer__logo">
              <Marquee speed={90}>
                <h4>contacts</h4>
                <h5>&nbsp;&nbsp;</h5>
                <h4>contacts</h4>
                <h5>&nbsp;&nbsp;</h5>
              </Marquee>
            </article>
            <article className="footer__contact">
              <h4>Let's talk</h4>
              <aside className="footer__contact__cosial">
                <img src={socialIcon_1} alt="Дизайн интерьера, экстерьер, ландшафтный дизайн, детали интерьера. Посмотрите больше идей на темы «интерьер, дизайн интерьера, дизайн»" />
                <img src={socialIcon_2} alt="В нашем блоге Вы найдете много полезной информации по обустройству Вашего дома. Обзоры мебели, идеи оформления, практические советы" />
                <img src={socialIcon_3} alt="Что такое дизайн интерьера? Дизайн интерьера — это кропотливый и многоэтапный процесс разработки проекта интерьера, который включает подбор" />
                <img src={socialIcon_4} alt="Программы для начинающих · Изображение: Planner 5D · Работа над интерьером в приложении. Изображение: Planner 5D · Чертёж с указанием размеров" />
                <img src={socialIcon_5} alt="Главные правила дизайна интерьера · 1. Важно определить требования жильцов к функционалу комнат · 2. Выбрать качественную мебель" />
                <img src={socialIcon_6} alt="Каталог дизайнеров интерьера России — проекты, описание, фото, контакты дизайнеров — разместите бесплатно свое" />
              </aside>
              <form onSubmit={handleSubmit}>
                <h6>Your Name</h6>
                <input
                  autoComplete="off"
                  name="lastName"
                  type="text"
                  required
                  value={messageName}
                  onChange={(e) => setMessageName(e.target.value)}
                />
                <h6>Your Email</h6>
                <input
                  autoComplete="off"
                  name="email"
                  type="email"
                  required
                  value={messageAdress}
                  onChange={(e) => setMessageAdress(e.target.value)}
                />
                <h6>Your phone number</h6>
                <input
                  autoComplete="off"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7-___-___-__-__"
                />
                <h6>Your Message</h6>
                <textarea
                  autoComplete="off"
                  name="text"
                  cols="50"
                  rows="2"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                ></textarea>
                <button type="submit">Sign in</button>
              </form>
            </article>
          </section>
          <section className="footer__images">
            <img src={footer_bg} alt="Создай дизайн интерьера онлайн и бесплатно - с онлайн-планировщиком Planner 5D ты можешь быстро и без усилий спроектировать дом или квартиру в 2D или в 3D!" />
          </section>
        </div>
      </footer>
    );
}

export default Footer;