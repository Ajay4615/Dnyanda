
import React, { useState ,useEffect} from 'react';
import Slider from 'react-slick';
import show from './Show'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Split() {
    const images = [
        '/images/campus1.jpeg',
        '/images/campus2.jpeg',
        '/images/campus3.jpeg',
        '/images/campus4.jpeg',
        '/images/campus5.jpeg',
        '/images/campus6.jpeg',
        // Add more image URLs as needed
      ];

      const [slidesToShow, setSlidesToShow] = useState(1);

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 700) {
            setSlidesToShow(1);
          } else {
            setSlidesToShow(2);
          }
        };
    
        // Initial setup
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
      };
      return (
        <div className="p-4" >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className={`p-10`}>
                <img src={image} alt={`Image ${index + 1}`} className="w-full h-50vh rounded-tl-3xl rounded-br-3xl " />
              </div>
            ))}
          </Slider>
        </div>
      );
    };

export default Split
