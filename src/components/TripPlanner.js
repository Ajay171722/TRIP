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
    const tabs = ['places', 'hotels', 'restaurants', 'adventures', 'transport'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const tabs = ['places', 'hotels', 'restaurants', 'adventures', 'transport'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
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
          disabled={activeTab === 'transport'}
        >
          Next →
        </button>
      </div>
    </div>
  );

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
                <div className="budget-category">
                  {hotel.priceRange <= 5000 ? '💰 Budget' : 
                   hotel.priceRange <= 15000 ? '💰💰 Mid-Range' : 
                   '💰💰💰 Luxury'}
                </div>
                <img 
                  src={hotel.image || 'default-hotel-image.jpg'} 
                  alt={hotel.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
                  }}
                />
                <div className="card-content">
                  <h4>{hotel.name}</h4>
                  <p>{hotel.description}</p>
                  <div className="hotel-details">
                    <div className="price">₹{hotel.priceRange}/night</div>
                    {hotel.rating && <div className="rating">⭐ {hotel.rating}</div>}
                  </div>
                  {hotel.amenities && (
                    <div className="amenities">
                      {hotel.amenities.map((amenity, i) => (
                        <span key={i} className="amenity-tag">{amenity}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )) || <div>No hotels data available</div>}
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