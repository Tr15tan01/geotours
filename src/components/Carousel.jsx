
import Carousel from 'react-bootstrap/Carousel';
const img1 = 'https://images.unsplash.com/photo-1553307236-8783cc0a3b9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
const img2 = 'https://images.unsplash.com/photo-1600206287932-4b8888bd78f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
const img3 = 'https://images.unsplash.com/photo-1604631715696-5ba4c27d021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

function CarouselComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="bg-img" style={{
                    backgroundImage: `url(${img1})`
                }}></div>
                <Carousel.Caption>
                    <h3>Tours In Georgia</h3>
                    <p>Best Adventures In Georgia On The Internet.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="bg-img" style={{
                    backgroundImage: `url(${img2})`
                }}></div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <div className="bg-img" style={{
                    backgroundImage: `url(${img3})`
                }}></div>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default CarouselComponent;