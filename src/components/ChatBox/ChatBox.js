import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '👋 Hi! I\'m your Travel Assistant. I can help you plan your perfect trip!'
    },
    {
      type: 'bot',
      content: 'I can help you with:\n' +
        '🌍 Popular destinations\n' +
        '📅 Trip planning\n' +
        '💰 Budget tips\n' +
        '🏨 Best places to stay\n' +
        '🍽️ Local cuisine\n' +
        '🎯 Must-visit places\n' +
        '🚗 Getting around\n\n' +
        'What would you like to know about?'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const travelKnowledge = {
    destinations: {
      'delhi': {
        highlights: ['Red Fort', 'Qutub Minar', 'India Gate', 'Humayun\'s Tomb'],
        food: ['Butter Chicken', 'Paranthe', 'Chaat', 'Biryani'],
        transport: ['Metro', 'Auto rickshaw', 'Bus', 'Taxi'],
        bestTime: 'October to March',
        budget: 'Budget: ₹2000-3000/day | Mid-range: ₹5000-7000/day | Luxury: ₹10000+/day'
      },
      'agra': {
        highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Akbar\'s Tomb'],
        food: ['Petha', 'Paratha', 'Bedai', 'Chaat'],
        transport: ['Auto rickshaw', 'Taxi', 'Local bus'],
        bestTime: 'October to March',
        budget: 'Budget: ₹1500-2500/day | Mid-range: ₹4000-6000/day | Luxury: ₹8000+/day'
      },
      'jaipur': {
        highlights: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar'],
        food: ['Dal Baati Churma', 'Laal Maas', 'Pyaaz Kachori', 'Lassi'],
        transport: ['Auto rickshaw', 'Taxi', 'Local bus', 'Metro'],
        bestTime: 'October to March',
        budget: 'Budget: ₹2000-3000/day | Mid-range: ₹5000-7000/day | Luxury: ₹9000+/day'
      },
      'mumbai': {
        highlights: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Colaba'],
        food: ['Vada Pav', 'Pav Bhaji', 'Bhel Puri', 'Mumbai Sandwich'],
        transport: ['Local Train', 'Metro', 'Bus', 'Auto rickshaw'],
        bestTime: 'October to February',
        budget: 'Budget: ₹3000-4000/day | Mid-range: ₹7000-10000/day | Luxury: ₹15000+/day'
      },
      'bangalore': {
        highlights: ['Lalbagh', 'Cubbon Park', 'MG Road', 'Bangalore Palace'],
        food: ['Dosa', 'Filter Coffee', 'Biryani', 'Street Food'],
        transport: ['Metro', 'Bus', 'Auto rickshaw', 'Cab services'],
        bestTime: 'November to February',
        budget: 'Budget: ₹2500-3500/day | Mid-range: ₹6000-8000/day | Luxury: ₹12000+/day'
      },
      'goa': {
        highlights: ['Calangute Beach', 'Fort Aguada', 'Basilica of Bom Jesus', 'Dudhsagar Falls'],
        food: ['Seafood', 'Vindaloo', 'Xacuti', 'Bebinca'],
        transport: ['Bike rental', 'Taxi', 'Bus', 'Auto rickshaw'],
        bestTime: 'November to February',
        budget: 'Budget: ₹2000-3000/day | Mid-range: ₹5000-8000/day | Luxury: ₹10000+/day'
      },
      'kerala': {
        highlights: ['Alleppey Backwaters', 'Munnar', 'Kovalam Beach', 'Wayanad'],
        food: ['Kerala Fish Curry', 'Appam', 'Puttu', 'Sadya'],
        transport: ['Bus', 'Auto rickshaw', 'Boat', 'Taxi'],
        bestTime: 'October to February',
        budget: 'Budget: ₹2000-3000/day | Mid-range: ₹5000-7000/day | Luxury: ₹10000+/day'
      },
      'varanasi': {
        highlights: ['Ghats', 'Kashi Vishwanath Temple', 'Sarnath', 'Evening Aarti'],
        food: ['Banarasi Paan', 'Kachori', 'Lassi', 'Thandai'],
        transport: ['Auto rickshaw', 'Cycle rickshaw', 'Boat', 'Walking'],
        bestTime: 'October to March',
        budget: 'Budget: ₹1500-2500/day | Mid-range: ₹4000-6000/day | Luxury: ₹8000+/day'
      }
    }
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Add suggestions for popular destinations
    if (lowerInput.includes('where') || lowerInput.includes('destination') || lowerInput.includes('place to visit')) {
      return "Here are some popular destinations in India:\n\n" +
        "🏰 North India:\n" +
        "• Delhi - Historical monuments & street food\n" +
        "• Agra - Home of the Taj Mahal\n" +
        "• Jaipur - The Pink City\n\n" +
        "🌊 West India:\n" +
        "• Mumbai - City of Dreams\n" +
        "• Goa - Beaches & nightlife\n\n" +
        "🌿 South India:\n" +
        "• Bangalore - Garden City\n" +
        "• Kerala - God's Own Country\n\n" +
        "🕉️ Spiritual:\n" +
        "• Varanasi - The Holy City\n\n" +
        "Which destination interests you? I can provide more specific information!";
    }

    // Greeting patterns
    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
      return "Hello! 👋 How can I help you plan your trip today?";
    }

    // Destination information
    for (const city in travelKnowledge.destinations) {
      if (lowerInput.includes(city)) {
        const cityInfo = travelKnowledge.destinations[city];
        
        if (lowerInput.includes('food') || lowerInput.includes('eat')) {
          return `🍽️ Popular food in ${city.charAt(0).toUpperCase() + city.slice(1)}:\n\n${cityInfo.food.map(item => `• ${item}`).join('\n')}`;
        }
        
        if (lowerInput.includes('transport') || lowerInput.includes('travel') || lowerInput.includes('getting around')) {
          return `🚗 Getting around in ${city.charAt(0).toUpperCase() + city.slice(1)}:\n\n${cityInfo.transport.map(item => `• ${item}`).join('\n')}`;
        }
        
        if (lowerInput.includes('budget') || lowerInput.includes('cost') || lowerInput.includes('price')) {
          return `💰 Budget guide for ${city.charAt(0).toUpperCase() + city.slice(1)}:\n\n${cityInfo.budget}`;
        }
        
        if (lowerInput.includes('when') || lowerInput.includes('best time')) {
          return `🗓️ Best time to visit ${city.charAt(0).toUpperCase() + city.slice(1)}: ${cityInfo.bestTime}`;
        }

        // Default city information
        return `📍 ${city.charAt(0).toUpperCase() + city.slice(1)} Travel Guide:\n\n` +
          `🎯 Must-visit places:\n${cityInfo.highlights.map(place => `• ${place}`).join('\n')}\n\n` +
          `🗓️ Best time to visit: ${cityInfo.bestTime}\n\n` +
          `💰 Budget: ${cityInfo.budget}\n\n` +
          `Would you like to know more about:\n` +
          `• Local food\n• Transportation\n• Accommodation\n• Guided tours?`;
      }
    }

    // General travel queries
    if (lowerInput.includes('budget') || lowerInput.includes('cost')) {
      return "Here's a general budget guide for traveling in India:\n\n" +
        "🎯 Budget Travel (₹2000-3000/day):\n" +
        "• Hostels/Budget hotels\n" +
        "• Street food & local eateries\n" +
        "• Public transport\n\n" +
        "🎯 Mid-range (₹5000-7000/day):\n" +
        "• 3-star hotels\n" +
        "• Good restaurants\n" +
        "• Taxis & guided tours\n\n" +
        "🎯 Luxury (₹10000+/day):\n" +
        "• 4/5-star hotels\n" +
        "• Fine dining\n" +
        "• Private transport\n\n" +
        "Which city are you planning to visit? I can provide more specific information.";
    }

    if (lowerInput.includes('weather') || lowerInput.includes('climate')) {
      return "India has diverse weather conditions. The general seasons are:\n\n" +
        "🌸 Spring (Feb-Mar): Moderate temperatures\n" +
        "☀️ Summer (Apr-Jun): Hot in most regions\n" +
        "🌧️ Monsoon (Jul-Sep): Rainfall across country\n" +
        "❄️ Winter (Oct-Jan): Cool and pleasant\n\n" +
        "Which city's weather would you like to know about?";
    }

    // Default response
    return "I can help you with:\n\n" +
      "• Destination information\n" +
      "• Budget planning\n" +
      "• Weather guidance\n" +
      "• Local transportation\n" +
      "• Food recommendations\n" +
      "• Best time to visit\n\n" +
      "Please let me know which city or topic you're interested in!";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking and typing
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const travelIcons = ['✈️', '🗺️', '🌎', '🧳'];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % travelIcons.length);
    }, 2000);
    return () => clearInterval(iconInterval);
  }, []);

  return (
    <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : travelIcons[currentIconIndex]}
      </button>

      <div className="chat-box">
        <div className="chat-box-header">
          <h3 className="chat-box-header-title">🌍 Travel Assistant</h3>
        </div>

        <div className="chat-box-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.content}
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about your travel plans..."
            className="chat-input-field"
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