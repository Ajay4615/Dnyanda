
import React, { useState ,useEffect} from 'react';
import Slider from 'react-slick';
import show from './Show'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Split() {
    const images = [
        '/images/campus1.jpg',
        '/images/campus2.jpg',
        '/images/campus3.jpg',
        '/images/campus4.jpg',
        '/images/campus5.jpg',
        '/images/campus6.jpg',
        // Add more image URLs as needed
      ];

      const [slidesToShow, setSlidesToShow] = useState(1);

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 1034) {
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
        slidesToScroll: 1,
        arrows : false
      };
      return (
        <div className="" >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className={`py-8 px-3 md:py-2 md:px-10 h-96  `}>
                <img src={image} alt={`Image ${index + 1}`} className="object-cover h-full w-full  rounded-tl-3xl rounded-br-3xl" />
              </div>
            ))}
          </Slider>
        </div>
      );
    };

export default Split
