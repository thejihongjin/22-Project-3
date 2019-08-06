import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import data from "../data.json"


const ImageCarousel = () => {
    return (
        <Carousel interval={2700} indicators={false} controls={false}>
            {data.map((image, i) => (
                <Carousel.Item>
                    <img
                        key={i}
                        src={image.src}
                        alt={image.name}
                        className="w-100"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
