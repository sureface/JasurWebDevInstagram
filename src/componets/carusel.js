import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';

const items = [
    {
        src: "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    },
    {
        src: "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
    },
    {
        src: "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
    } ,
    {
        src: "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    },
    {
        src: "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    }
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item}

            >
                <img className="images" src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="caruselBox"
        >

            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />

            {slides}
        </Carousel>
    );
}

export default Example;