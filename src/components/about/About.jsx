// bibliotek
import { useState } from 'react';  
import { motion } from 'framer-motion';
// components
import Paragraph from "../paragraph/Paragraph.jsx";
import useMousePosition from "../../hooks/useMousePosition.js"
// style
import "./about.scss"

export default function About(){
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 500 : 40;
    return(
        <section className="about__wrapper">
            <Paragraph title="About us" />
            <article className="about__container">
                <motion.div 
                    className="about__mask"
                    animate={{
                    WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
                    WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ type: "tween", ease: "backOut", duration:0.5}}
                    >
                    <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
                        Сделаем <strong>дизайн</strong><br /><strong>наполняющий</strong> вашу жизнь<br />яркими <strong>эмоциями</strong>
                    </p>
                </motion.div>
                <article className='about__body'>
                    <p>Команда <span>молодых, амбициозных</span> и творческих <span>профессионалов.</span> Мы не копируем чужие идеи, мы генерируем новые. Создаем уникальный дизайн, который отражает индивидуальность и стиль наших клиентов.</p>
                </article>
            </article>
        </section>
    )
}
