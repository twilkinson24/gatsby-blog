import React from 'react';
import Carousel from 'nuka-carousel';

const TestimonialSlider = () => (
    <Carousel 
        renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide}>&lt;</button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>&gt;</button>
        )}
        renderTopCenterControls={({ currentSlide }) => (
            <div>Slide: {currentSlide}</div>
          )}
        > 
                <div className="testimonial-slide">
            <div className="card-wrap">
                <div className="card">
                    <div className="testimonial-content">
                        <p>
                            <em>"Taylor is incredible. He is so easy to work with and is able to translate my thoughts/ handwritten notes into a website. His communication is out of this world- fantastic! I highly recommend Taylor."</em>
                        </p>
                        <h4>- <a href="https://www.ranialfers.com/" target="_blank" style={{color: '#ccc'}}>Rani Alfers</a></h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial-slide">
            <div className="card-wrap">
                <div className="card">
                    <div className="testimonial-content">
                        <p>
                            <em>"Taylor is consistent, reliable, quick, knowledgeable and respectful. Our work together is always easy with great results."</em>
                        </p>
                        <h4>- <a href="https://twofifteenagency.com/about-me/" target="_blank" style={{color: '#ccc'}}>Eric Jordan</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </Carousel>
);

  export default TestimonialSlider;