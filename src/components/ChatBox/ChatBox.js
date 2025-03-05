import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';
import { FaComments, FaTimes } from 'react-icons/fa';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '👋 Hello! I\'m your AI Travel Assistant. I\'m here to help plan your perfect trip!'
    },
    {
      type: 'bot',
      content: 'Which city would you like to explore? I can provide information about popular destinations in India like Delhi, Mumbai, Bangalore, Goa, Kerala, and many more! 🌟'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentDestination, setCurrentDestination] = useState('');
  const messagesEndRef = useRef(null);

  const weatherData = {
    'delhi': 'Currently 28°C (82°F), Mostly sunny with moderate humidity. Best time to visit is October to March for pleasant weather.',
    'mumbai': 'Currently 30°C (86°F), Partly cloudy with high humidity. October to February offers the most comfortable climate.',
    'bangalore': 'Currently 24°C (75°F), Pleasant weather with light breeze. Perfect for sightseeing!',
    'goa': 'Currently 29°C (84°F), Sunny with occasional clouds. Great beach weather!',
    'kerala': 'Currently 27°C (81°F), Tropical climate with light rainfall. Perfect for backwater tours!',
    'agra': 'Currently 30°C (86°F), Clear skies with moderate humidity. Great visibility for Taj Mahal visits!',
    'jaipur': 'Currently 32°C (90°F), Sunny and dry. Perfect for exploring the city palaces!'
  };

  const hotelData = {
    'delhi': [
      { name: 'The Imperial', rating: '⭐⭐⭐⭐⭐', price: '₹20,000+/night', features: 'Luxury spa, Colonial architecture, Fine dining' },
      { name: 'The Taj Palace', rating: '⭐⭐⭐⭐⭐', price: '₹15,000+/night', features: 'Multiple restaurants, Pool, Business center' },
      { name: 'Bloomrooms', rating: '⭐⭐⭐', price: '₹3,000+/night', features: 'Budget-friendly, Clean rooms, Central location' }
    ],
    'mumbai': [
      { name: 'The Taj Mahal Palace', rating: '⭐⭐⭐⭐⭐', price: '₹25,000+/night', features: 'Sea view, Heritage property, World-class dining' },
      { name: 'ITC Maratha', rating: '⭐⭐⭐⭐⭐', price: '₹12,000+/night', features: 'Near airport, Spa, Multiple restaurants' },
      { name: 'Treebo Trend', rating: '⭐⭐⭐', price: '₹2,500+/night', features: 'Budget stay, Clean rooms, Good location' }
    ]
  };

  const restaurantData = {
    'delhi': [
      { name: 'Indian Accent', cuisine: 'Modern Indian', price: '₹₹₹₹', famous: 'Innovative Indian cuisine' },
      { name: 'Bukhara', cuisine: 'North Indian', price: '₹₹₹', famous: 'Dal Bukhara, Tandoori dishes' },
      { name: 'Karim\'s', cuisine: 'Mughlai', price: '₹₹', famous: 'Authentic Mughlai cuisine' }
    ],
    'mumbai': [
      { name: 'Trishna', cuisine: 'Seafood', price: '₹₹₹', famous: 'Butter garlic crab' },
      { name: 'Britannia & Co.', cuisine: 'Parsi', price: '₹₹', famous: 'Berry pulao, Sali boti' },
      { name: 'Swati Snacks', cuisine: 'Street Food', price: '₹', famous: 'Pani puri, Mumbai chaat' }
    ]
  };

  const shoppingData = {
    'delhi': [
      { 
        area: 'Connaught Place',
        type: '🛍️ Modern Shopping Hub',
        famous: 'International brands, Local boutiques',
        specialties: 'Fashion, Electronics, Books',
        tips: 'Best for modern shopping experience, Has both street shops and malls'
      },
      {
        area: 'Chandni Chowk',
        type: '🏺 Traditional Market',
        famous: 'Textiles, Spices, Jewelry',
        specialties: 'Sarees, Traditional wear, Street food',
        tips: 'Great for wholesale shopping, Bargaining expected'
      },
      {
        area: 'Sarojini Nagar',
        type: '👕 Street Market',
        famous: 'Export surplus clothing',
        specialties: 'Fashion, Accessories, Shoes',
        tips: 'Known for budget shopping, Good bargaining skills needed'
      },
      {
        area: 'DLF Mall of India',
        type: '🏬 Modern Mall',
        famous: 'International brands',
        specialties: 'Fashion, Entertainment, Dining',
        tips: 'Premium shopping experience, Fixed prices'
      }
    ],
    'mumbai': [
      {
        area: 'Colaba Causeway',
        type: '🛍️ Street Market',
        famous: 'Fashion accessories, Antiques',
        specialties: 'Street fashion, Souvenirs, Art',
        tips: 'Great for budget shopping, Bargaining recommended'
      },
      {
        area: 'Linking Road',
        type: '👚 Fashion Street',
        famous: 'Trendy clothing, Footwear',
        specialties: 'Fashion, Accessories, Street food',
        tips: 'Mix of street shops and branded outlets'
      },
      {
        area: 'Crawford Market',
        type: '🏺 Traditional Market',
        famous: 'Fresh produce, Household items',
        specialties: 'Fruits, Spices, Home decor',
        tips: 'Historic architecture, Wholesale options'
      }
    ],
    'bangalore': [
      {
        area: 'Commercial Street',
        type: '🛍️ Shopping District',
        famous: 'Fashion, Electronics, Jewelry',
        specialties: 'Mix of modern and traditional items',
        tips: 'Bargaining possible in street shops'
      },
      {
        area: 'Brigade Road',
        type: '🏬 Modern Shopping',
        famous: 'Brand outlets, Cafes',
        specialties: 'Fashion, Electronics, Books',
        tips: 'Popular among youth, Fixed prices'
      },
      {
        area: 'UB City Mall',
        type: '💎 Luxury Shopping',
        famous: 'International luxury brands',
        specialties: 'Designer wear, High-end products',
        tips: 'Premium shopping experience'
      }
    ],
    'goa': [
      {
        area: 'Anjuna Flea Market',
        type: '🏖️ Beach Market',
        famous: 'Hippie culture items, Handicrafts',
        specialties: 'Beachwear, Accessories, Art',
        tips: 'Wednesday special market, Good for souvenirs'
      },
      {
        area: 'Mapusa Market',
        type: '🏺 Local Market',
        famous: 'Goan spices, Local products',
        specialties: 'Food items, Handicrafts',
        tips: 'Friday market is special, Authentic Goan products'
      },
      {
        area: 'Mall de Goa',
        type: '🏬 Modern Mall',
        famous: 'International brands',
        specialties: 'Fashion, Entertainment',
        tips: 'Air-conditioned shopping'
      }
    ],
    'kerala': [
      {
        area: 'MG Road (Kochi)',
        type: '🛍️ Shopping Hub',
        famous: 'Traditional Kerala items',
        specialties: 'Spices, Handlooms, Art',
        tips: 'Mix of modern and traditional shopping'
      },
      {
        area: 'Lulu Mall',
        type: '🏬 Modern Mall',
        famous: 'Largest mall in India',
        specialties: 'International brands, Entertainment',
        tips: 'One-stop shopping destination'
      },
      {
        area: 'Broadway Street',
        type: '🏺 Traditional Market',
        famous: 'Local products, Spices',
        specialties: 'Kerala handicrafts, Textiles',
        tips: 'Great for authentic Kerala products'
      }
    ],
    'agra': [
      {
        area: 'Sadar Bazaar',
        type: '🛍️ Local Market',
        famous: 'Leather goods, Marble items',
        specialties: 'Handicrafts, Souvenirs',
        tips: 'Good for Taj Mahal replicas'
      },
      {
        area: 'Kinari Bazaar',
        type: '👗 Traditional Market',
        famous: 'Fabrics, Jewelry',
        specialties: 'Wedding items, Embroidery',
        tips: 'Best for traditional shopping'
      },
      {
        area: 'TDI Mall',
        type: '🏬 Modern Mall',
        famous: 'Branded outlets',
        specialties: 'Fashion, Entertainment',
        tips: 'Air-conditioned shopping experience'
      }
    ],
    'jaipur': [
      {
        area: 'Johari Bazaar',
        type: '💎 Jewelry Market',
        famous: 'Jewelry, Precious stones',
        specialties: 'Traditional Rajasthani jewelry',
        tips: 'Known for authentic jewelry'
      },
      {
        area: 'Bapu Bazaar',
        type: '👗 Traditional Market',
        famous: 'Textiles, Juttis (footwear)',
        specialties: 'Rajasthani prints, Handicrafts',
        tips: 'Best for traditional items'
      },
      {
        area: 'World Trade Park',
        type: '🏬 Modern Mall',
        famous: 'International brands',
        specialties: 'Fashion, Entertainment',
        tips: 'Modern shopping experience'
      }
    ]
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Check for city mentions first
    const cities = ['delhi', 'mumbai', 'bangalore', 'goa', 'kerala', 'agra', 'jaipur'];
    const mentionedCity = cities.find(city => lowerInput.includes(city));

    if (mentionedCity) {
      setCurrentDestination(mentionedCity);
      return `Great choice! Let me tell you about ${mentionedCity.charAt(0).toUpperCase() + mentionedCity.slice(1)} 🌟\n\n` +
        `🌤️ Weather: ${weatherData[mentionedCity]}\n\n` +
        `🏨 Top Hotels:\n${hotelData[mentionedCity]?.map(hotel => 
          `• ${hotel.name} ${hotel.rating}\n  Price: ${hotel.price}\n  Features: ${hotel.features}`
        ).join('\n\n') || 'Hotel information coming soon!'}\n\n` +
        `🍽️ Must-try Restaurants:\n${restaurantData[mentionedCity]?.map(restaurant => 
          `• ${restaurant.name}\n  Cuisine: ${restaurant.cuisine}\n  Price: ${restaurant.price}\n  Famous for: ${restaurant.famous}`
        ).join('\n\n') || 'Restaurant information coming soon!'}\n\n` +
        'Would you like to know more about:\n1. Tourist attractions\n2. Local transportation\n3. Shopping areas\n4. Cultural experiences?';
    }

    // If user asks about specific aspects for current destination
    if (currentDestination) {
      if (lowerInput.includes('shop') || lowerInput.includes('mall') || lowerInput.includes('market') || lowerInput.includes('buy')) {
        return getShoppingInfo(currentDestination);
      }
      if (lowerInput.includes('weather')) {
        return `🌤️ Weather in ${currentDestination.charAt(0).toUpperCase() + currentDestination.slice(1)}:\n${weatherData[currentDestination]}`;
      }
      if (lowerInput.includes('hotel') || lowerInput.includes('stay')) {
        return `🏨 Best Hotels in ${currentDestination.charAt(0).toUpperCase() + currentDestination.slice(1)}:\n${hotelData[currentDestination]?.map(hotel => 
          `• ${hotel.name} ${hotel.rating}\n  Price: ${hotel.price}\n  Features: ${hotel.features}`
        ).join('\n\n') || 'Hotel information coming soon!'}`;
      }
      if (lowerInput.includes('restaurant') || lowerInput.includes('food') || lowerInput.includes('eat')) {
        return `🍽️ Popular Restaurants in ${currentDestination.charAt(0).toUpperCase() + currentDestination.slice(1)}:\n${restaurantData[currentDestination]?.map(restaurant => 
          `• ${restaurant.name}\n  Cuisine: ${restaurant.cuisine}\n  Price: ${restaurant.price}\n  Famous for: ${restaurant.famous}`
        ).join('\n\n') || 'Restaurant information coming soon!'}`;
      }
      if (lowerInput.includes('attraction') || lowerInput.includes('visit') || lowerInput.includes('see') || lowerInput.includes('place')) {
        return `🎯 Top Tourist Attractions in ${currentDestination.charAt(0).toUpperCase() + currentDestination.slice(1)}:\n` +
          getTouristAttractions(currentDestination);
      }
      if (lowerInput.includes('transport') || lowerInput.includes('travel') || lowerInput.includes('getting around')) {
        return getTransportInfo(currentDestination);
      }
    }

    // Check for greetings only if no other context is found
    if ((lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) && messages.length <= 2) {
      return "Which city would you like to visit? I can provide detailed information about popular destinations in India! 🌟";
    }

    // Default response if no specific query is detected
    return "I can help you with:\n" +
      "• Weather information 🌤️\n" +
      "• Hotel recommendations 🏨\n" +
      "• Restaurant suggestions 🍽️\n" +
      "• Tourist attractions 🎯\n" +
      "• Local transportation 🚗\n" +
      "• Shopping areas 🛍️\n\n" +
      "Please let me know which city you're interested in or what specific information you need!";
  };

  const getTouristAttractions = (city) => {
    const attractions = {
      'delhi': '• Red Fort 🏰 - Historical monument\n• Qutub Minar - UNESCO World Heritage site\n• India Gate - War memorial\n• Humayun\'s Tomb - Mughal architecture',
      'mumbai': '• Gateway of India 🏛️\n• Marine Drive - Queen\'s Necklace\n• Elephanta Caves\n• Colaba Causeway',
      'bangalore': '• Lalbagh Botanical Garden 🌸\n• Bangalore Palace\n• Cubbon Park\n• UB City',
      'goa': '• Calangute Beach 🏖️\n• Fort Aguada\n• Basilica of Bom Jesus\n• Dudhsagar Falls',
      'kerala': '• Alleppey Backwaters 🚣\n• Munnar Tea Gardens\n• Kovalam Beach\n• Wayanad Wildlife',
      'agra': '• Taj Mahal 🏰\n• Agra Fort\n• Fatehpur Sikri\n• Akbar\'s Tomb',
      'jaipur': '• Amber Fort 🏰\n• Hawa Mahal\n• City Palace\n• Jantar Mantar'
    };
    return attractions[city] || 'Tourist attraction information coming soon!';
  };

  const getTransportInfo = (city) => {
    const transport = {
      'delhi': '🚇 Metro: Extensive network covering most tourist spots\n🚗 Auto rickshaws: Convenient for short distances\n🚕 Uber/Ola: Available throughout the city\n🚌 Bus: DTC buses for budget travel',
      'mumbai': '🚂 Local Trains: Lifeline of Mumbai\n🚕 Taxis: Black & yellow cabs\n🚇 Metro: Limited but growing network\n🚌 BEST buses: Extensive network',
      'bangalore': '🚇 Metro: Covers major areas\n🚗 Auto rickshaws: Available everywhere\n🚕 Uber/Ola: Popular choice\n🚌 BMTC buses: Extensive network',
      'goa': '🛵 Scooter rental: Most popular\n🚕 Taxis: Available at tourist spots\n🚗 Car rental: Good for exploration\n🚌 Local buses: Budget option',
      'kerala': '🚌 KSRTC buses: Connects all major spots\n🚣 Water transport: In backwaters\n🚕 Taxis: Available in cities\n🚂 Trains: For inter-city travel',
      'agra': '🚗 Auto rickshaws: Best for local travel\n🚕 Taxis: For day tours\n🚌 Local buses: Budget option\n🚲 Cycle rickshaws: For short distances',
      'jaipur': '🚗 Auto rickshaws: Common mode\n🚕 Taxis: For comfortable travel\n🚌 Local buses: Budget option\n🐪 Camel rides: Tourist attraction'
    };
    return `🚗 Transportation Options in ${city.charAt(0).toUpperCase() + city.slice(1)}:\n\n${transport[city] || 'Transport information coming soon!'}`;
  };

  const getShoppingInfo = (city) => {
    const shopping = shoppingData[city];
    if (!shopping) return 'Shopping information coming soon!';

    return `🛍️ Shopping Guide for ${city.charAt(0).toUpperCase() + city.slice(1)}:\n\n${
      shopping.map(place => 
        `${place.area} - ${place.type}\n` +
        `• Famous for: ${place.famous}\n` +
        `• Specialties: ${place.specialties}\n` +
        `• Tips: ${place.tips}`
      ).join('\n\n')
    }\n\nWould you like specific details about any of these shopping areas?`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    
    // Simulate typing
    setIsTyping(true);
    
    // Generate response with delay for natural feel
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);

    setInputMessage('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaTimes className="chat-toggle-icon" />
        ) : (
          <div className="ai-assistant-icon" />
        )}
      </button>
      
      <div className="chat-box">
        <div className="chat-box-header">
          <h3 className="chat-box-header-title">
            <span className="ai-assistant-icon" /> Travel Assistant
          </h3>
          <div className="chat-box-header-close" onClick={() => setIsOpen(false)}>
            <FaTimes className="chat-box-header-close-icon" />
          </div>
        </div>

        <div className="chat-box-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.content}
            </div>
          ))}
          {isTyping && (
            <div className="typing">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input-field"
            placeholder="Ask me about your travel plans..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit" className="chat-input-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
