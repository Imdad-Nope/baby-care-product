import React from 'react';
import { Carousel } from 'react-bootstrap';
import babyca1 from '../../../images/babyca1.png';
import babyca2 from '../../../images/babyca2.png';
import babyca3 from '../../../images/babyca3.png';

const Banner = () => {
    return (
        <>

            <Carousel style={{ marginTop: 8 }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={babyca1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '650px' }}
                        className="d-block w-100"
                        src={babyca2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img sx={{ height: '20%' }}
                        className="d-block w-100"
                        src={babyca3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;