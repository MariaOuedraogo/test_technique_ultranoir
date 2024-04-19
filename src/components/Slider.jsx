import '../styles/index.css';
import { Button } from './Button';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';



const sliderComponent = [
    {

        title: "discovery \n of the garden",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/garden.webp"

    },

    {

        title: "extraction \n essences",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/essences.webp"

    },

    {

        title: "the symbiosis \n lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/symbiosis.webp"

    },
    {

        title: "from flower \n to bottle",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/flower_to_bottle.webp"

    },
    {
        title: "miss dior \n scent",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/miss_dior.webp"

    },


];



export function Slider() {
    useEffect(() => {
        const sliding = document.querySelector('.slides-container');

        let startX, startScrollLeft;

        const dragStart = (e) => {
            if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
            } else {
                startX = e.clientX;
            }
            startScrollLeft = sliding.scrollLeft;
        }

        const dragging = (e) => {
            // e.preventDefault(); // Pour empêcher le défilement par défaut pendant le drag and drop
            if (startX !== undefined) {
                const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
                const diffX = startX - currentX;
                sliding.scrollLeft = startScrollLeft + diffX;
            }
        }

        const dragEnd = () => {
            startX = undefined;
            // Peut-être ajouter des opérations supplémentaires lors du relâchement du glisser-déposer
        }

        sliding.addEventListener('touchstart', dragStart, { passive: true });
        sliding.addEventListener('touchmove', dragging, { passive: true });
        sliding.addEventListener('touchend', dragEnd, { passive: true });
        sliding.addEventListener('mousedown', dragStart, { passive: true });
        sliding.addEventListener('mousemove', dragging, { passive: true });
        sliding.addEventListener('mouseup', dragEnd, { passive: true });
        sliding.addEventListener('mouseleave', dragEnd, { passive: true });

        return () => {
            sliding.removeEventListener('touchstart', dragStart, { passive: true });
            sliding.removeEventListener('touchmove', dragging, { passive: true });
            sliding.removeEventListener('touchend', dragEnd, { passive: true });
            sliding.removeEventListener('mousedown', dragStart, { passive: true });
            sliding.removeEventListener('mousemove', dragging, { passive: true });
            sliding.removeEventListener('mouseup', dragEnd,{ passive: true });
            sliding.removeEventListener('mouseleave', dragEnd, { passive: true });
        };
    }, []);



    const windowHeight = window.innerHeight;
    const imgHeight = 0.95 * windowHeight;
    const titleHeight = 117;
    const numHeight = 30;

    let currentIndex = 0; // Ajoutez une variable pour suivre l'index actuel du slider

    const animateUp = () => {
        // Déplacez vers le haut seulement si ce n'est pas la dernière image
        if (currentIndex < sliderComponent.length - 1) {
            gsap.to('.desk-slide__image-content', { y: `-=${imgHeight}` });
            gsap.to('.desk-slide__title-content', { y: `-=${titleHeight}` });
            gsap.to('.desk-slide__num-content', { y: `-=${numHeight}` });
            currentIndex++;
        } else {
            // Si c'est la dernière image, retournez à la première
            gsap.to('.desk-slide__image-content', { y: 0 });
            gsap.to('.desk-slide__title-content', { y: 0 });
            gsap.to('.desk-slide__num-content', { y: 0 });
            currentIndex = 0;
        }
    };

    const animateDown = () => {
        // Déplacez vers le bas seulement si ce n'est pas la première image
        if (currentIndex > 0) {
            gsap.to('.desk-slide__image-content', { y: `+=${imgHeight}` });
            gsap.to('.desk-slide__title-content', { y: `+=${titleHeight}` });
            gsap.to('.desk-slide__num-content', { y: `+=${numHeight}` });
            currentIndex--;
        } else {
            // Si c'est la première image, allez à la dernière
            const lastIndex = sliderComponent.length - 1;
            const imgDistanceToMove = -1 * lastIndex * imgHeight;
            const titleDistanceToMove = -1 * lastIndex * titleHeight;
            const numDistanceToMove = -1 * lastIndex * numHeight;
            gsap.to('.desk-slide__image-content', { y: imgDistanceToMove });
            gsap.to('.desk-slide__title-content', { y: titleDistanceToMove });
            gsap.to('.desk-slide__num-content', { y: numDistanceToMove });
            currentIndex = lastIndex;

        }
    };

    return (
        <React.Fragment>

            <div className="slides-container slides-container--mobile">
                {sliderComponent.map((slide, index) => (
                    <div key={index} className="slide">
                        <div className="slide__image-container">
                            <img src={slide.img} alt="" className="slide__image" />
                        </div>
                        <div className="slide__text-container">
                            <h2 className='slide__title'>
                                {slide.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </h2>
                            <h3 className='slide__subtitle'>{slide.subtitleShort}</h3>
                            <p className='slide__text'>{slide.detailsShort}</p>
                            <Button className='slide__button'>
                                <img src="/src/assets/images/add_to_cart.svg" alt="" className='slide__button-img' />
                                <p className='slide__button-text'>
                                    Order
                                </p>
                            </Button>
                            <p className='slide__num'>
                                {index + 1 <= 5 ? `0${index + 1}` : index++} / 05
                            </p>
                        </div>
                    </div>
                ))}
            </div>



            <div className="desk-slides-container desk-slides-container--show ">

                <div className="desk-slide">

                    <div className="desk-slide__text-container">
                        <img src="src/assets/images/slider/flower_slider1.png" alt="" className='desk-slide__text-img desk-slide__text-img--left' />

                        <div className="desk-slide__num-container">
                            <div className="desk-slide__num-content">
                                {sliderComponent.map((slide, index) => (
                                    <p className="desk-slide__num"  >
                                        {index + 1 <= 5 ? `0${index + 1}` : index++} / 05
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="desk-slide__title-container">
                            <div className="desk-slide__title-content">
                                {sliderComponent.map((slide, index) => (
                                    <h2 className="desk-slide__title">{slide.title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}</h2>
                                ))}
                            </div>
                        </div>

                        <h3 className="desk-slide__subtitle"> Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit lorem.  </h3>
                        <p className="desk-slide__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.  </p>

                        <Button className='desk-slide__button'>
                            <img src="/src/assets/images/add_to_cart.svg" alt="" className='slide__button-img' />
                            <p className='slide__button-text'>
                                Order
                            </p>
                        </Button>
                        <div className="desk-slide__bottom-container">
                            <div className="desk-slide__controls">
                                <img src="src/assets/images/slider/arrow_left.png" alt="" className='desk-slide__arrow desk-side__arrow--left' onClick={animateDown} />
                                <img src="src/assets/images/slider/arrow_right.png" alt="" className='desk-slide__arrow desk-side__arrow--right' onClick={animateUp} />
                            </div>
                            <img src="src/assets/images/slider/flower_slider2.png" alt="" className='desk-slide__text-img desk-slide__text-img--right' />
                        </div>
                    </div>


                    <div className="desk-slide__image-container">
                        <div className="desk-slide__image-content">
                            {sliderComponent.map((slide, index) => (
                                <img className='desk-slide__image' src={slide.img} alt="" />
                            ))}
                        </div>
                    </div>


                </div>

            </div>

        </React.Fragment>

    );
}