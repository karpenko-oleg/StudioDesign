// bibliotek
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from "react";

import "./work.scss";
import bg from "../../assets/work/creative.webp";

gsap.registerPlugin(ScrollTrigger);

function Work(){
    // анимация расхождения слова
    const imgRef =useRef(null);
    useEffect(()=>{
        const el = imgRef.current;
        const tl = gsap.timeline({scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "50% 50%",
            end: "+=250",
        }});
        tl
        .to(".work__top",{top: "-50%"}, 'a')
        .to(".work__bottom", {bottom:"-50%"}, 'a')
        .to(".work__top_item", {top:"80%"}, 'a')
        .to(".work__bottom_item", {bottom:"1%"}, 'a')
    })

    return(
        <>
            <div className="work__wrapper" ref={imgRef}>
                <div className="work__top"><h2 className="work__top_item font-BeatriceBold">Q2<span>.</span>studio</h2></div>
                <div className="work__center" style={{backgroundImage: `url(${bg})`}}>
                    <h3>Creative interior</h3>
                    <h4>design studio</h4>
\                </div>
                <div className="work__bottom"><h2 className="work__bottom_item font-BeatriceBold">Q2<span>.</span>studio</h2></div>
            </div>
        </>
    )
}

export default Work;