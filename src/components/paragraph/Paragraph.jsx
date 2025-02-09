
import "./paragraph.scss";
// bibliotek
import React from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Paragraph({title}){
    const paragrafText =useRef(null);
    useEffect(()=>{
        const el = paragrafText.current;
        gsap.fromTo(el, {opacity: 0, scale: 0.8, x:400}, { scale:1, opacity: 1, x:0, duration:3, scrollTrigger: {
        trigger: el,
        scrub:5,
        start: "top 80%",
        end: "+=200",
        }})
    }, []);
    return(
        <div className="paragraph__wrapper">
            <h6 className="paragraph__title" ref={paragrafText}>{title}</h6>
        </div>
    )
}