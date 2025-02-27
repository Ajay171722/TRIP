import React, { useState, useEffect } from 'react';
import './CitySlideshow.css';

const CitySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cities = [
    {
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'Experience the blend of history and modernity',
      attractions: ['Red Fort', 'Qutub Minar', 'India Gate']
    },
    {
      name: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      description: 'The Pink City with royal heritage',
      attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace']
    },
    {
      name: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6',
      description: 'The spiritual capital of India',
      attractions: ['Ganges Ghats', 'Kashi Vishwanath', 'Evening Aarti']
    },
    {
      name: 'Agra',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada',
      description: 'Home to the magnificent Taj Mahal',
      attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri']
    },
    {
      name: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66',
      description: 'The City of Lakes',
      attractions: ['Lake Palace', 'City Palace', 'Lake Pichola']
    },
    {
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      description: 'Beach paradise of India',
      attractions: ['Calangute Beach', 'Fort Aguada', 'Basilica of Bom Jesus']
    },
    {
      name: 'Rishikesh',
      image: 'https://blog.weekendthrill.com/wp-content/uploads/2017/12/120717_0715_21Placestov6.jpg',
      description: 'Yoga Capital of the World',
      attractions: ['Laxman Jhula', 'River Rafting', 'Beatles Ashram']
    },
    {
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7',
      description: 'The City of Dreams',
      attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves']
    },
    {
      name: 'Kochi',
      image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68100-Cochin.jpg',
      description: 'Queen of the Arabian Sea',
      attractions: ['Chinese Fishing Nets', 'Fort Kochi', 'Mattancherry Palace']
    },
    {
      name: 'Amritsar',
      image: 'https://www.worldatlas.com/upload/2f/2a/83/shutterstock-725535832.jpg',
      description: 'The Golden City',
      attractions: ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh']
    },
    {
      name: 'Shimla',
      image: 'https://www.indiantempletour.com/wp-content/uploads/2022/08/shimla-1.jpg',
      description: 'Queen of Hill Stations',
      attractions: ['Mall Road', 'Ridge', 'Jakhu Temple'],
      bestTime: 'March to June',
      knownFor: ['Colonial Architecture', 'Toy Train', 'Snow Sports']
    },
    {
      name: 'Manali',
      image: 'http://image3.mouthshut.com/images/Restaurant/Photo/-44272_8285.jpg',
      description: 'Adventure Sports Paradise',
      attractions: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple'],
      bestTime: 'October to June',
      knownFor: ['Skiing', 'River Rafting', 'Trekking']
    },
    {
      name: 'Ooty',
      image: 'http://blog.rideally.com/wp-content/uploads/2022/05/Ooty.jpg',
      description: 'The Queen of Nilgiris',
      attractions: ['Botanical Gardens', 'Nilgiri Mountain Railway', 'Ooty Lake'],
      bestTime: 'October to June',
      knownFor: ['Tea Gardens', 'Colonial Heritage', 'Pleasant Weather']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === cities.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === cities.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? cities.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slides">
        {cities.map((city, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <img src={city.image} alt={city.name} />
            <div className="slide-content">
              <h2>{city.name}</h2>
              <p>{city.description}</p>
              <div className="city-details">
                <div className="attractions">
                  <h3>Top Attractions:</h3>
                  <ul>
                    {city.attractions.map((attraction, i) => (
                      <li key={i}>{attraction}</li>
                    ))}
                  </ul>
                </div>
                {city.bestTime && (
                  <div className="best-time">
                    <h3>Best Time to Visit:</h3>
                    <p>{city.bestTime}</p>
                  </div>
                )}
                {city.knownFor && (
                  <div className="known-for">
                    <h3>Known For:</h3>
                    <ul>
                      {city.knownFor.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="slide-btn prev" onClick={prevSlide}>❮</button>
      <button className="slide-btn next" onClick={nextSlide}>❯</button>
      
      <div className="slide-dots">
        {cities.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CitySlideshow; 