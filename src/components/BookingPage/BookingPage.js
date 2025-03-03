import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = ({ adventure, onClose }) => {
  const [bookingOptions, setBookingOptions] = useState({
    date: '',
    people: 1,
    timeSlot: '',
    pickupRequired: false,
    pickupLocation: '',
    specialRequirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking confirmed! Check your email for details.');
    onClose();
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <button className="back-button" onClick={onClose}>← Back</button>
        <h1>Book Your Experience</h1>
      </div>

      <div className="adventure-details">
        <img src={adventure.image} alt={adventure.name} />
        <div className="adventure-info">
          <h2>{adventure.name}</h2>
          <p className="description">{adventure.description}</p>
          <div className="price">₹{adventure.price}/person</div>
          <div className="includes">
            <h3>Package Includes:</h3>
            <ul>
              {adventure.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Select Date</label>
            <input 
              type="date" 
              value={bookingOptions.date}
              onChange={(e) => setBookingOptions({...bookingOptions, date: e.target.value})}
              min={new Date().toISOString().split('T')[0]}
              required 
            />
          </div>

          <div className="form-group">
            <label>Number of People</label>
            <input 
              type="number" 
              value={bookingOptions.people}
              onChange={(e) => setBookingOptions({...bookingOptions, people: e.target.value})}
              min="1" 
              max="10"
              required 
            />
          </div>

          <div className="form-group">
            <label>Preferred Time Slot</label>
            <select 
              value={bookingOptions.timeSlot}
              onChange={(e) => setBookingOptions({...bookingOptions, timeSlot: e.target.value})}
              required
            >
              <option value="">Select time</option>
              <option value="morning">Morning (6 AM - 10 AM)</option>
              <option value="afternoon">Afternoon (11 AM - 2 PM)</option>
              <option value="evening">Evening (3 PM - 6 PM)</option>
            </select>
          </div>

          <div className="form-group checkbox">
            <label>
              <input 
                type="checkbox"
                checked={bookingOptions.pickupRequired}
                onChange={(e) => setBookingOptions({...bookingOptions, pickupRequired: e.target.checked})}
              />
              Require Pickup Service
            </label>
          </div>
        </div>

        {bookingOptions.pickupRequired && (
          <div className="form-group full-width">
            <label>Pickup Location</label>
            <input 
              type="text"
              value={bookingOptions.pickupLocation}
              onChange={(e) => setBookingOptions({...bookingOptions, pickupLocation: e.target.value})}
              placeholder="Enter hotel name or address"
              required
            />
          </div>
        )}

        <div className="form-group full-width">
          <label>Special Requirements</label>
          <textarea 
            value={bookingOptions.specialRequirements}
            onChange={(e) => setBookingOptions({...bookingOptions, specialRequirements: e.target.value})}
            placeholder="Any dietary restrictions, accessibility needs, etc."
          />
        </div>

        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <div className="summary-details">
            <div>Base Price: ₹{adventure.price} × {bookingOptions.people} people</div>
            <div>Pickup Service: {bookingOptions.pickupRequired ? '₹500' : '₹0'}</div>
            <div className="total">
              Total: ₹{(adventure.price * bookingOptions.people) + (bookingOptions.pickupRequired ? 500 : 0)}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-booking">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage; 