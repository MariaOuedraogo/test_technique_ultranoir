import '../styles/index.css';
import { Button } from './Button';
import React, { useEffect } from 'react';


const sliderComponent = [
    {

        title: "discovery \n of the garden",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/garden.jpg"

    },

    {

        title: "extraction essences",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/essences.jpg"

    },

    {

        title: "the symbiosis lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/symbiosis.jpg"

    },
    {

        title: "from flower \n to bottle",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/flower_to_bottle.jpg"

    },
    {
        title: "miss dior \n scent",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. ",
        subtitleShort:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam. Proin placerat dignissim risus ac finibus. Sed fermentum, sem et dignissim venenatis, felis massa volutpat eros.",
        detailsShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget velit a elit finibus lacinia id at diam.",
        img: "/src/assets/images/slider/miss_dior.jpg"

    },


];



export function Slider() {
    useEffect(() => {
        const sliding = document.querySelector('.slides-container');

        let startX, startScrollLeft;

        const dragStart = (e) => {
            startX = e.touches[0].clientX;
            startScrollLeft = sliding.scrollLeft;
        }

        const dragging = (e) => {
            const currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
            sliding.scrollLeft = startScrollLeft + diffX;
        }

        sliding.addEventListener('touchstart', dragStart);
        sliding.addEventListener('touchmove', dragging);

        return () => {
            sliding.removeEventListener('touchstart', dragStart);
            sliding.removeEventListener('touchmove', dragging);
        };
    }, []);
    return (
        <div className="slides-container">
            {sliderComponent.map((slide, index) => (
                <div key={index} className="slides">
                    <div className="slides__image-container">
                        <img src={slide.img} alt="" className="slides__image" />
                    </div>
                    <div className="slides__text-container">
                        <h1 className='slides__title'>
                            {slide.title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h1>
                        <h2 className='slides__subtitle'>{slide.subtitleShort}</h2>
                        <p className='slides__text'>{slide.detailsShort}</p>
                        <Button className='slides__button'>
                            <img src="/src/assets/images/add_to_cart.svg" alt="" className='slides_button-img' />
                            <p className='slides__button-text'>
                                Order
                            </p>
                        </Button>
                        <p className='slides__num'>
                            {index + 1 <= 5 ? `0${index + 1}` : index++} / 05
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}