import React, { useState } from 'react';
import './TripPlanner.css';
import { destinations } from '../data/destinations';
import CitySlideshow from './CitySlideshow';
const TripPlanner = () => {
  const [days, setDays] = useState('');
  const [destination, setDestination] = useState('');
  const [showPlan, setShowPlan] = useState(false);
  const [activeTab, setActiveTab] = useState('places');

  const cityData = destination ? destinations[destination] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Parse days as a number
    const numberOfDays = parseInt(days, 10);
    
    // Debug logs
    console.log('Submit clicked:', { destination, numberOfDays });
    
    if (destination && numberOfDays > 0) {
      // Force state updates
      Promise.resolve().then(() => {
        setShowPlan(true);
        setActiveTab('places');
        console.log('States should be updated:', { destination, numberOfDays, showPlan: true });
      });
    } else {
      alert('Please select a destination and enter a valid number of days');
    }
  };

  const handleBack = () => {
    setShowPlan(false);
    setDestination('');
    setDays('');
    setActiveTab('places');
  };

  const handleNext = () => {
    const tabs = ['places', 'hotels', 'restaurants', 'adventures', 'transport', 'itinerary'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const tabs = ['places', 'hotels', 'restaurants', 'adventures', 'transport', 'itinerary'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const generateItinerary = (numberOfDays, cityData) => {
    if (!cityData || !cityData.places) return [];

    const itinerary = [];
    const allPlaces = [...cityData.places];
    const placesPerDay = 3; // Assuming 3 places per day is comfortable

    for (let day = 1; day <= numberOfDays; day++) {
      const dayPlaces = allPlaces.splice(0, placesPerDay);
      const dayPlan = {
        day: day,
        morning: dayPlaces[0],
        afternoon: dayPlaces[1],
        evening: dayPlaces[2],
        meals: {
          breakfast: cityData.restaurants ? cityData.restaurants[day % cityData.restaurants.length] : null,
          lunch: cityData.restaurants ? cityData.restaurants[(day + 1) % cityData.restaurants.length] : null,
          dinner: cityData.restaurants ? cityData.restaurants[(day + 2) % cityData.restaurants.length] : null
        },
        hotel: cityData.hotels ? cityData.hotels[day % cityData.hotels.length] : null,
        activity: cityData.adventures ? cityData.adventures[day % cityData.adventures.length] : null
      };
      itinerary.push(dayPlan);
    }

    return itinerary;
  };

  const renderTabs = () => (
    <div className="tabs-container">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'places' ? 'active' : ''}`}
          onClick={() => setActiveTab('places')}
        >
          Places to Visit
        </button>
        <button 
          className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          Hotels
        </button>
        <button 
          className={`tab ${activeTab === 'restaurants' ? 'active' : ''}`}
          onClick={() => setActiveTab('restaurants')}
        >
          Restaurants
        </button>
        <button 
          className={`tab ${activeTab === 'adventures' ? 'active' : ''}`}
          onClick={() => setActiveTab('adventures')}
        >
          Adventures
        </button>
        <button 
          className={`tab ${activeTab === 'transport' ? 'active' : ''}`}
          onClick={() => setActiveTab('transport')}
        >
          Transport
        </button>
        <button 
          className={`tab ${activeTab === 'itinerary' ? 'active' : ''}`}
          onClick={() => setActiveTab('itinerary')}
        >
          Day-wise Itinerary
        </button>
      </div>
      <div className="tab-navigation">
        <button 
          className="nav-button previous"
          onClick={handlePrevious}
          disabled={activeTab === 'places'}
        >
          ← Previous
        </button>
        <button 
          className="nav-button next"
          onClick={handleNext}
          disabled={activeTab === 'itinerary'}
        >
          Next →
        </button>
      </div>
    </div>
  );

  const renderItinerary = () => {
    const itinerary = generateItinerary(parseInt(days), cityData);

    return (
      <div className="itinerary-container">
        <h2>Your {days}-Day Itinerary for {destination}</h2>
        {itinerary.map((dayPlan, index) => (
          <div key={index} className="day-plan">
            <h3>Day {dayPlan.day}</h3>
            
            <div className="timeline">
              <div className="time-slot">
                <h4>Morning</h4>
                {dayPlan.morning && (
                  <div className="place-card">
                    <img src={dayPlan.morning.image} alt={dayPlan.morning.name} />
                    <div className="place-details">
                      <h5>{dayPlan.morning.name}</h5>
                      <p>{dayPlan.morning.description}</p>
                      <div className="place-info">
                        <span>🕒 {dayPlan.morning.timeNeeded}</span>
                        <span>💰 {dayPlan.morning.entryFee}</span>
                      </div>
                    </div>
                  </div>
                )}
                {dayPlan.meals.breakfast && (
                  <div className="meal-suggestion">
                    <h6>Breakfast at: {dayPlan.meals.breakfast.name}</h6>
                    <p>Cuisine: {dayPlan.meals.breakfast.cuisine}</p>
                  </div>
                )}
              </div>

              <div className="time-slot">
                <h4>Afternoon</h4>
                {dayPlan.afternoon && (
                  <div className="place-card">
                    <img src={dayPlan.afternoon.image} alt={dayPlan.afternoon.name} />
                    <div className="place-details">
                      <h5>{dayPlan.afternoon.name}</h5>
                      <p>{dayPlan.afternoon.description}</p>
                      <div className="place-info">
                        <span>🕒 {dayPlan.afternoon.timeNeeded}</span>
                        <span>💰 {dayPlan.afternoon.entryFee}</span>
                      </div>
                    </div>
                  </div>
                )}
                {dayPlan.meals.lunch && (
                  <div className="meal-suggestion">
                    <h6>Lunch at: {dayPlan.meals.lunch.name}</h6>
                    <p>Cuisine: {dayPlan.meals.lunch.cuisine}</p>
                  </div>
                )}
              </div>

              <div className="time-slot">
                <h4>Evening</h4>
                {dayPlan.evening && (
                  <div className="place-card">
                    <img src={dayPlan.evening.image} alt={dayPlan.evening.name} />
                    <div className="place-details">
                      <h5>{dayPlan.evening.name}</h5>
                      <p>{dayPlan.evening.description}</p>
                      <div className="place-info">
                        <span>🕒 {dayPlan.evening.timeNeeded}</span>
                        <span>💰 {dayPlan.evening.entryFee}</span>
                      </div>
                    </div>
                  </div>
                )}
                {dayPlan.meals.dinner && (
                  <div className="meal-suggestion">
                    <h6>Dinner at: {dayPlan.meals.dinner.name}</h6>
                    <p>Cuisine: {dayPlan.meals.dinner.cuisine}</p>
                  </div>
                )}
              </div>

              {dayPlan.activity && (
                <div className="activity-suggestion">
                  <h4>Suggested Activity</h4>
                  <div className="activity-card">
                    <img src={dayPlan.activity.image} alt={dayPlan.activity.name} />
                    <div className="activity-details">
                      <h5>{dayPlan.activity.name}</h5>
                      <p>{dayPlan.activity.description}</p>
                      <p>Price: ₹{dayPlan.activity.price}</p>
                      <p>Timing: {dayPlan.activity.timing}</p>
                    </div>
                  </div>
                </div>
              )}

              {dayPlan.hotel && (
                <div className="hotel-suggestion">
                  <h4>Stay at</h4>
                  <div className="hotel-card">
                    <img src={dayPlan.hotel.image} alt={dayPlan.hotel.name} />
                    <div className="hotel-details">
                      <h5>{dayPlan.hotel.name}</h5>
                      <p>{dayPlan.hotel.description}</p>
                      <p>Price: ₹{dayPlan.hotel.priceRange}/night</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'places':
        return (
          <div className="places-grid">
            {cityData?.places?.map((place, index) => (
              <div key={index} className="place-card">
                <img 
                  src={place.image || 'default-place-image.jpg'} 
                  alt={place.name} 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
                  }}
                />
                <div className="card-content">
                  <h4>{place.name}</h4>
                  <p>{place.description}</p>
                  {place.timeNeeded && place.entryFee && (
                    <div className="place-details">
                      <span>🕒 {place.timeNeeded}</span>
                      <span>💰 {place.entryFee}</span>
                    </div>
                  )}
                </div>
              </div>
            )) || <div>No places data available</div>}
          </div>
        );

      case 'hotels':
        return (
          <div className="hotels-grid">
            {cityData?.hotels?.map((hotel, index) => (
              <div key={index} className="hotel-card">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Hotel+Image';
                  }}
                />
                <div className="hotel-details">
                  <h3>{hotel.name}</h3>
                  <div className="hotel-info">
                    <span className="price">Price: {hotel.priceRange}</span>
                    <span className="rating">Rating: {hotel.rating}⭐</span>
                  </div>
                  <div className="amenities">
                    <h4>Amenities:</h4>
                    <ul>
                      {hotel.amenities.map((amenity, i) => (
                        <li key={i}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) || <div>No hotel data available for this destination</div>}
          </div>
        );

      case 'restaurants':
        return (
          <div className="restaurants-grid">
            {cityData?.restaurants?.map((restaurant, index) => (
              <div key={index} className="restaurant-card">
                <div className="budget-category">
                  {restaurant.price === '₹' ? '💰 Budget' : 
                   restaurant.price === '₹₹' ? '💰💰 Mid-Range' : 
                   '💰💰💰 Fine Dining'}
                </div>
                <img src={restaurant.image} alt={restaurant.name} />
                <div className="card-content">
                  <h4>{restaurant.name}</h4>
                  <p>{restaurant.cuisine}</p>
                  <div className="restaurant-details">
                    <span>{restaurant.price}</span>
                    <span>⭐ {restaurant.rating}</span>
                  </div>
                  <div className="price-range">
                    Average cost: {restaurant.averageCost}
                  </div>
                  <div className="must-try">
                    <h5>Must Try:</h5>
                    <ul>
                      {restaurant.mustTry?.map((dish, i) => (
                        <li key={i}>{dish}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) || <div>No restaurants data available</div>}
          </div>
        );

      case 'adventures':
        return (
          <div className="adventures-section">
            <h3>Things to Do & Experiences</h3>
            <div className="adventures-grid">
              {cityData?.adventures?.map((activity, index) => (
                <div key={index} className="activity-card">
                  <img 
                    src={activity.image} 
                    alt={activity.name}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300?text=Activity+Image'
                    }}
                  />
                  <div className="card-content">
                    <h4>{activity.name}</h4>
                    <p className="activity-description">{activity.description}</p>
                    
                    <div className="activity-highlights">
                      <h5>Highlights:</h5>
                      <ul>
                        {activity.highlights.map((highlight, i) => (
                          <li key={i}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="activity-details">
                      <div className="timing">
                        <span className="label">⏰ Duration:</span>
                        <span>{activity.timing}</span>
                      </div>
                      <div className="price">
                        <span className="label">💰 Price:</span>
                        <span>₹{activity.price}/person</span>
                      </div>
                    </div>

                    <div className="includes">
                      <h5>Package Includes:</h5>
                      <ul>
                        {activity.includes.map((item, i) => (
                          <li key={i}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="book-button">Book Experience</button>
                  </div>
                </div>
              )) || <div>No activities data available</div>}
            </div>
          </div>
        );

      case 'transport':
        return (
          <div className="transport-grid">
            {cityData?.transport?.map((option, index) => (
              <div key={index} className="transport-card">
                <div className="card-content">
                  <h4>{option.type}</h4>
                  <div className="transport-details">
                    <span>💰 {option.price}</span>
                    <span className={option.availability ? 'available' : 'unavailable'}>
                      {option.availability ? '✅ Available' : '❌ Not Available'}
                    </span>
                  </div>
                </div>
              </div>
            )) || <div>No transport data available</div>}
          </div>
        );

      case 'itinerary':
        return renderItinerary();

      default:
        return <div>Please select a tab to view details</div>;
    }
  };

  return (
    <div className="trip-planner">
      {!showPlan && (
        <div className="dashboard-slideshow">
          <h2>Top Destinations</h2>
          <CitySlideshow />
        </div>
      )}
      {!showPlan ? (
        <div className="input-section">
          <h2>Plan Your Trip</h2>
          <form onSubmit={handleSubmit}>
            <select 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="">Select Destination</option>
              {Object.keys(destinations).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Number of Days"
              min="1"
              max="30"
              required
            />
            
            <button 
              type="submit" 
              disabled={!destination || !days}
              className={(!destination || !days) ? 'disabled' : ''}
            >
              Plan My Trip
            </button>
          </form>
        </div>
      ) : (
        <div className="trip-details">
          <div className="navigation-buttons">
            <button onClick={handleBack} className="back-button">
              ← Back to Search
            </button>
          </div>
          
          <div className="destination-header">
            <img 
              src={cityData?.image} 
              alt={destination}
              className="destination-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
              }}
            />
            <h2>Your {days}-Day Trip to {destination}</h2>
          </div>
          
          {renderTabs()}
          <div className="tab-content">
            {renderContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlanner; 