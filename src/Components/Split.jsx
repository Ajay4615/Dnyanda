
import React, { useState ,useEffect} from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Split() {
    const images = [
        '/images/campus1.jpg',
        '/images/campus2.jpg',
        '/images/campus3.jpg',
        '/images/campus4.jpg',
        '/images/campus5.jpg',
        '/images/philo5.jpg',
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
        slidesToScroll: 1,
      };
      return (
        <div className="p-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="py-4 px-2 md:py-6 md:px-8 lg:py-8 lg:px-10 h-60 sm:h-80 md:h-96 lg:h-128">
              <img src={image} alt={`Image ${index + 1}`} className="object-cover h-full w-full rounded-tl-3xl rounded-br-3xl" />
            </div>
          ))}
        </Slider>
        
      </div>
      );
    };

export default Split
