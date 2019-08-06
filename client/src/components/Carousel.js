import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import image1 from "../images/beautiful-bestfriends.jpg"
import image2 from "../images/adult-adventure.jpg"
import image3 from "../images/adult-bestfriends.jpg"
import image4 from "../images/band-celebration.jpg"
import image5 from "../images/friends-dinner-drinks.jpg"
import image6 from "../images/adult-bar-birthday.jpg"
import image7 from "../images/unicorn-beer.jpg"


const CarouselTest = () => {
    return (
        <Carousel interval={2700} indicators={false} controls={false}>
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
