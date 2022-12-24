import React from 'react'
import Container from 'react-bootstrap/Container'

const img1 = 'https://images.unsplash.com/photo-1553307236-8783cc0a3b9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
const img2 = 'https://images.unsplash.com/photo-1600206287932-4b8888bd78f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
const img3 = 'https://images.unsplash.com/photo-1604631715696-5ba4c27d021f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

export default function Content() {
    return (
        <Container>
            
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to this is the last block of representative placeholder content. Again, not really intended to this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <div className="features-image" style={{ backgroundImage: `url(${img3})`, marginTop: 32 }}></div>
                </div>
            </div>
            <hr className="featurette-divider" />
            
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to this is the last block of representative placeholder content. Again, not really intended to this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <div className="features-image" style={{ backgroundImage: `url(${img3})`, marginTop: 32 }}></div>
                </div>
            </div>
            <hr className="featurette-divider" />
        </Container>
    )
}
