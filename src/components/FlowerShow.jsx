import "../styles/index.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function FlowerShow() {

    useEffect(() => {
        // moves Miss dior logo  left to right 
        // if = smaller than 1000px and else other
        if (window.matchMedia("(max-width: 1000px)").matches) {
            gsap.fromTo(".flowershow-background > :nth-child(odd)", {
                x: "-100%",
            }, {
                x: 0,
                duration: .9,
                delay: 1,
                scrollTrigger: {
                    trigger: ".flowershow",
                }
            });

            // moves Miss dior logo  right to left 
            gsap.fromTo(".flowershow-background > :nth-child(even)", {
                x: "100%",
                ease: "power2.inOut",
            }, {
                x: 0,
                duration: .9,
                delay: 1,
                scrollTrigger: {
                    trigger: ".flowershow",
                }
            });
        } else {

            // moves Miss dior logo  left to right 
            gsap.fromTo(".flowershow__image-container--first-move", {
                x: "-100%",
            }, {
                x: 0,
                duration: .9,
                delay: 1,
                scrollTrigger: {
                    trigger: ".flowershow",
                }
            });

            // moves Miss dior logo  left to center 
            gsap.fromTo(".flowershow__image-container--second-move > :first-child", {
                x: "-100%",
            }, {
                x: 0,
                duration: .9,
                delay: 1,
                scrollTrigger: {
                    trigger: ".flowershow",
                }
            });

            // moves Miss dior logo right to center
            gsap.fromTo(".flowershow__image-container--second-move > :last-child", {
                x: "100%",
            }, {
                x: 0,
                duration: .9,
                delay: 1,
                scrollTrigger: {
                    trigger: ".flowershow",
                }
            });


            // moves Miss dior logo  right to left 
            gsap.fromTo(".flowershow__image-container--third-move", {
                x: "100%",
            }, {
                x: 0,
                duration: .9,
                delay: 1,
                scrollTrigger: {
                    trigger: ".flowershow",
                }
            });
        }

        // moves the perfum from bottom to center
        gsap.fromTo(".perfume-container", {
            y: 1000,
            ease: "power4.inOut",
        }, {
            y: "-50%",
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".flowershow",
            }
        });


        //scales up the three white flowers imgs
        gsap.fromTo(".perfume__hiding-image--moved-35, .perfume__hiding-image--moved-39 ", {
            scale: .5,
            ease: "power2.inOut",
        }, {
            scale: 1.5,
            duration: 1,
            delay: 2,
            scrollTrigger: {
                trigger: ".flowershow",
            }
        });

        //scale up the perfume bottle
        gsap.fromTo(".perfume__hiding-text", {
            opacity: 0,
            ease: "power2.inOut",
        }, {
            opacity: 1,
            duration: 1.5,
            delay: 1,
            scrollTrigger: {
                trigger: ".flowershow",
            }
        });

    }, []);

    const reveal = () => {

        // move the flowers
        gsap.to(".perfume__hiding-image--moved-3", { y: 300, opacity: 0, duration: 1 });
        gsap.to(".perfume__hiding-image--moved-11", { x: -500, y: "100%", opacity: 0, duration: 1 });
        gsap.to(".perfume__hiding-image--moved-12", { x: "75%", y: 200, opacity: 0, duration: 1 });
        gsap.to(".perfume__hiding-image--moved-8", { x: -300, y: "-95%", opacity: 0, duration: 1 });
        gsap.to(".perfume__hiding-image--moved-14", { x: "-200%", y: "-160%", opacity: 0, duration: 1 });
        gsap.to(".perfume__hiding-image--moved-2", { x: "-205%", y: "-200%", opacity: 0, duration: 1 });
        gsap.to(".perfume__hiding-image--moved-13", { x: "-0%", y: "-200%", opacity: 0, duration: 1, });
        gsap.to(".perfume__hiding-image--moved-4", { x: "300%", y: "-30%", opacity: 0, duration: 1, });
        gsap.to(".perfume__hiding-image--moved-1", { x: "100%", y: "-205%", opacity: 0, duration: 1, });
        gsap.to(".perfume__hiding-image--moved-5", { x: "-31%", y: "-209%", opacity: 0, duration: 1, });
        gsap.to(".perfume__hiding-image--moved-10", { x: "-70%", y: "-205%", opacity: 0, duration: 1, });

        // hide the white flowers 
        gsap.to(".perfume__hiding-image--moved-40, .perfume__hiding-image--moved-39, .perfume__hiding-image--moved-35 ", { opacity: 0, duration: 1, });

        //hide the "click to reveal" and the hiding perfume div
        gsap.to(".perfume__hiding-text ", {
            opacity: 0, duration: 1,
            onComplete: () => {
                gsap.set(".perfume__hiding-container", { display: "none" });
                gsap.set(".perfume__hiding-text", { display: "none" });

            }
        });

        // animate the perfume image sizee
        gsap.to(".perfume__image", { scale: 1.1, duration: 1, delay: .1 });
    };


    return (

        <div className="flowershow">
            <div className="flowershow-background flowershow-background-test">
                <div className="flowershow__image-container flowershow__image-container--first-move">
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image flowershow__image--third-move " />
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image" />
                </div>
                <div className="flowershow__image-container flowershow__image-container--second-move">
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image flowershow__image--second-move " />
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image" />
                </div>
                <div className="flowershow__image-container flowershow__image-container--third-move">
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image  flowershow__image--third-move" />
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image" />
                </div>
                <div className="flowershow__image-container flowershow__image-container--fourth-move ">
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image flowershow__image--fourth-move  " />
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image" />
                </div>
                <div className="flowershow__image-container flowershow__image-container--fifth-move">
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image flowershow__image--fifth-move " />
                    <img src="/src/assets/images/flowershow/miss_dior_logo_mobile.png" alt="" className="flowershow__image" />
                </div>
            </div>

            <div className="perfume-container">
                <img src="/src/assets/images/flowershow/flacon.webp" alt="" className="perfume__image" />
                
                <div className="perfume__hiding-container">
                    <img src="/src/assets/images/flowershow/flowers/10.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-10" />
                    <img src="/src/assets/images/flowershow/flowers/11.png" alt="" className="perfume__hiding-image perfume__hiding-image--moved-11" />
                    <img src="/src/assets/images/flowershow/flowers/01.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-1" />
                    <img src="/src/assets/images/flowershow/flowers/14.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-14" />
                    <img src="/src/assets/images/flowershow/flowers/04.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-4" />
                    <img src="/src/assets/images/flowershow/flowers/image40.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-40" />
                    <img src="/src/assets/images/flowershow/flowers/image39.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-39" />
                    <img src="/src/assets/images/flowershow/flowers/12.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-12" />
                    <img src="/src/assets/images/flowershow/flowers/02.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-2" />
                    <img src="/src/assets/images/flowershow/flowers/13.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-13" />
                    <img src="/src/assets/images/flowershow/flowers/image35.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-35" />
                    <img src="/src/assets/images/flowershow/flowers/03.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-3" />
                    <img src="/src/assets/images/flowershow/flowers/8.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-8" />
                    <img src="/src/assets/images/flowershow/flowers/5.png" alt="" className="perfume__hiding-image  perfume__hiding-image--moved-5" />
                </div>

                <p className="perfume__hiding-text" onClick={reveal}>click <br /> to reveal</p>

            </div>
        </div>
    )
}