import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import image1 from "../images/beautiful-bestfriends.jpg"
import image2 from "../images/adult-adventure.jpg"
import image3 from "../images/adult-bestfriends.jpg"
import image4 from "../images/band-celebration.jpg"
import image5 from "../images/friends-dinner-drinks.jpg"
import image6 from "../images/adult-bar-birthday.jpg"
import image7 from "../images/unicorn-beer.jpg"

const styleCarousel = {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: 0,
    padding: 0,
    zIndex: "-1"
}

const CarouselTest = () => {
    console.log("style isnt working")
    return (
        // <Carousel interval={2700} indicators={false} controls={false} style={styleCarousel}>
        <Carousel interval={2700} indicators={false} controls={false} style={{margin: "25px"}}>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={image7}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselTest;
