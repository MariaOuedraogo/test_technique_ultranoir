// import "../styles/index.css";
import { Slider } from "./Slider";
import { useEffect } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";


// section with the logo, and slider
export function Hero(props) {

    useEffect(() => {
        // smooth animation for the hero section
        gsap.fromTo(".hero__img", { opacity: 0 }, { opacity: 1, duration: 1, delay: .5 });
        gsap.fromTo(".desk-slide__image", { scale: .99, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, delay: 1 });
        gsap.fromTo(".desk-slide__title, .desk-slide__subtitle, .desk-slide__text, .desk-slide__button, .desk-slide__num", { opacity: 0 }, { opacity: 1, duration: 2, delay: 1, ease: "power2.out" });
        gsap.fromTo(".desk-slide__text-img--left, .desk-slide__text-img--right", { scale: 0,  }, { scale: 1, duration: 2, delay: 1.5 });
        gsap.fromTo(".desk-slide__controls", { opacity: 0 }, { opacity: 1, duration: 2, delay: 2, ease: "power2.out" });
        
    },[]);

    return (
        <div className="hero">
            <img src="../public/logo_dior.svg" alt="" className="hero__img" />
            <h1 className="hero__title">notre <br />savoir faire</h1>
            {props.children}
            <Slider />
        </div>
    );
}

Hero.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
