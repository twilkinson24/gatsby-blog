import React, {Component} from 'react';
import Carousel from 'nuka-carousel';
 class TestimonialSlider extends Component {
    render() {
        return (
          <Carousel>
                  <div className="testimonial-slide">
                <div className="card-wrap">
                    <div className="card">
                        <div className="testimonial-content">
                            <h4>Rani Alfers</h4>
                            <p>
                                <em>Taylor is incredible. He is so easy to work with and is able to translate my thoughts/ handwritten notes into a website. His communication is out of this world- fantastic! I highly recommend Taylor.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-slide">
                <div className="card-wrap">
                    <div className="card">
                        <div className="testimonial-content">
                            <h4>Eric Jordan</h4>
                            <p>
                                <em>Taylor is consistent, reliable, quick, knowledgeable and respectful. Our work together is always easy with great results.</em>         
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </Carousel>
        );
      }
  }
  export default TestimonialSlider;