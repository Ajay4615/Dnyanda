
import React, { useState ,useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Philosopy() {
    const images = [
        '/images/philo.jpg',
        '/images/philo1.jpg',
        '/images/philo2.jpg',
        '/images/philo3.jpg',
        '/images/philo4.jpg',
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
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
      };
    
      return (
        <div className="p-4">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="p-10 ">
                <img src={image} alt={`Image ${index + 1}`} className="w-full h-50vh rounded-tl-3xl rounded-br-3xl" />
              </div>
            ))}
          </Slider>
        </div>
      );
    };

export default Philosopy
