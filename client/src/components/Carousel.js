import React from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../data.json";


const ImageCarousel = () => {
    return (
        // move margin to content div in app.js
        <Carousel interval={2700} indicators={false} controls={false} style={{ margin: "10px" }}>
            {data.map((image, i) => (
                <Carousel.Item key={i}>
                    <img key={i} src={image.src} alt={image.name} className="w-100"/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;