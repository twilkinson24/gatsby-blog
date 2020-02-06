import React from 'react';
import dunesBGImg from '../images/lake-michigan-dunes.jpg'
import { Parallax} from 'react-parallax';
import TestimonialSlider from './testimonial-slider';

const Testimonial = () => {
  return(
      <section id="testimonial">
        <Parallax bgImage={dunesBGImg} strength={500} className="testimonial_area">
            <div className="testimonial_area">
                <div className="container">
                    <div className="columns">
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        </Parallax>
     </section>
  )
}
export default Testimonial;