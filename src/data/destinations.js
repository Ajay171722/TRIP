export const destinations = {
  'Delhi': {
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
    places: [
      {
        name: 'Red Fort',
        image: 'https://images.unsplash.com/photo-1585136917972-7e21c13f9acd',
        description: 'UNESCO World Heritage Site and iconic symbol of Delhi',
        timeNeeded: '3-4 hours',
        entryFee: '₹35',
        bestTime: 'Early morning',
        tips: ['Visit during flag hoisting', 'Take guided tour', 'Light show in evening']
      },
      {
        name: 'Qutub Minar',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
        description: 'UNESCO World Heritage Site, tallest brick minaret in the world',
        timeNeeded: '2-3 hours',
        entryFee: '₹30',
        bestTime: 'Late afternoon',
        tips: ['Great sunset photos', 'Visit Iron Pillar']
      },
      {
        name: 'Humayun\'s Tomb',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada',
        description: 'Beautiful Mughal architecture and gardens',
        timeNeeded: '2-3 hours',
        entryFee: '₹30',
        bestTime: 'Morning',
        tips: ['Photography paradise', 'Less crowded weekdays']
      },
      {
        name: 'India Gate',
        image: 'https://images.unsplash.com/photo-india-gate',
        description: 'War memorial and iconic landmark',
        timeNeeded: '1-2 hours',
        entryFee: 'Free',
        bestTime: 'Evening',
        tips: ['Visit during lighting', 'Enjoy street food']
      },
      {
        name: 'Akshardham Temple',
        image: 'https://images.unsplash.com/photo-akshardham',
        description: 'Largest Hindu temple complex in the world',
        timeNeeded: '4-5 hours',
        entryFee: 'Free (Exhibition: ₹170)',
        bestTime: 'Afternoon',
        tips: ['Watch light show', 'No cameras allowed']
      },
      {
        name: 'Lotus Temple',
        image: 'https://images.unsplash.com/photo-lotus-temple',
        description: 'Architectural marvel and peaceful meditation spot',
        timeNeeded: '1-2 hours',
        entryFee: 'Free',
        bestTime: 'Morning',
        tips: ['Silence inside', 'Long queues weekends']
      },
      {
        name: 'Jama Masjid',
        image: 'https://images.unsplash.com/photo-jama-masjid',
        description: 'India\'s largest mosque',
        timeNeeded: '2 hours',
        entryFee: 'Free (Camera: ₹300)',
        bestTime: 'Early morning',
        tips: ['Dress conservatively', 'Remove shoes']
      },
      {
        name: 'National Museum',
        image: 'https://images.unsplash.com/photo-national-museum',
        description: 'Rich collection of Indian heritage',
        timeNeeded: '3-4 hours',
        entryFee: '₹20',
        bestTime: 'Weekday morning',
        tips: ['Take audio guide', 'Tuesday closed']
      },
      {
        name: 'Lodhi Gardens',
        image: 'https://images.unsplash.com/photo-lodhi-garden',
        description: 'Historic park with monuments',
        timeNeeded: '2-3 hours',
        entryFee: 'Free',
        bestTime: 'Early morning/Evening',
        tips: ['Great for jogging', 'Photography']
      },
      {
        name: 'Hauz Khas Complex',
        image: 'https://images.unsplash.com/photo-hauz-khas',
        description: 'Historic complex with modern village',
        timeNeeded: '3-4 hours',
        entryFee: 'Free',
        bestTime: 'Evening',
        tips: ['Sunset views', 'Trendy restaurants']
      }
    ],
    hotels: [
      {
        name: 'The Imperial',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
        description: 'Luxury 5-star heritage hotel',
        priceRange: 20000,
        rating: 4.8,
        amenities: ['Spa', 'Pool', 'Multiple Restaurants', 'Gym'],
        category: 'Luxury'
      },
      {
        name: 'The Oberoi',
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
        description: 'Premium luxury hotel',
        priceRange: '₹18,000 - ₹45,000',
        rating: 4.7,
        amenities: ['Spa', 'Pool', 'Fine Dining', 'Business Center']
      },
      {
        name: 'Hotel Palace Heights',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        description: 'Comfortable mid-range hotel in Connaught Place',
        priceRange: 5000,
        rating: 4.2,
        amenities: ['Restaurant', 'Room Service', 'WiFi', 'Central Location'],
        category: 'Moderate'
      },
      {
        name: 'Bloomrooms',
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
        description: 'Modern budget hotel with great amenities',
        priceRange: 2500,
        rating: 4.0,
        amenities: ['Free WiFi', 'Cafe', 'Air Conditioning'],
        category: 'Budget'
      },
      {
        name: 'The Claridges',
        image: 'https://images.unsplash.com/photo-claridges',
        description: 'Colonial charm with modern amenities',
        priceRange: 12000,
        rating: 4.5,
        amenities: ['Pool', 'Spa', 'Multiple Restaurants'],
        category: 'Luxury',
        location: 'Lutyens Delhi'
      },
      {
        name: 'The Metropolitan',
        image: 'https://images.unsplash.com/photo-metropolitan',
        description: 'Business hotel with great location',
        priceRange: 7000,
        rating: 4.3,
        amenities: ['Business Center', 'Restaurant', 'Gym'],
        category: 'Premium'
      }
    ],
    restaurants: [
      {
        name: 'Indian Accent',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        cuisine: 'Modern Indian',
        price: '₹₹₹',
        rating: 4.8,
        averageCost: '₹4,000 for two',
        mustTry: ['Dal Moradabadi', 'Butter Chicken']
      },
      {
        name: 'Bukhara',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
        cuisine: 'North Indian',
        price: '₹₹₹₹',
        rating: 4.7,
        mustTry: ['Dal Bukhara', 'Tandoori Roti']
      },
      {
        name: 'Saravana Bhavan',
        image: 'https://images.unsplash.com/photo-1567337710282-00832b415979',
        cuisine: 'South Indian',
        price: '₹₹',
        rating: 4.3,
        averageCost: '₹600 for two',
        mustTry: ['Masala Dosa', 'Filter Coffee']
      },
      {
        name: 'Karim\'s',
        image: 'https://images.unsplash.com/photo-1576621934720-5f0400ca11a3',
        cuisine: 'Mughlai',
        price: '₹₹',
        rating: 4.4,
        averageCost: '₹800 for two',
        mustTry: ['Mutton Korma', 'Butter Chicken']
      },
      {
        name: 'Dum Pukht',
        image: 'https://images.unsplash.com/photo-dum-pukht',
        cuisine: 'Awadhi',
        price: '₹₹₹₹',
        rating: 4.8,
        mustTry: ['Biryani', 'Kakori Kebab'],
        averageCost: '₹5000 for two'
      },
      {
        name: 'Dilli 32',
        image: 'https://images.unsplash.com/photo-dilli-32',
        cuisine: 'North Indian',
        price: '₹₹₹',
        rating: 4.6,
        mustTry: ['Dal Makhani', 'Raan'],
        averageCost: '₹3000 for two'
      },
      {
        name: 'Soda Bottle Opener Wala',
        image: 'https://images.unsplash.com/photo-soda-bottle',
        cuisine: 'Parsi',
        price: '₹₹',
        rating: 4.3,
        mustTry: ['Berry Pulao', 'Dhansak'],
        averageCost: '₹1500 for two'
      }
    ],
    transport: [
      { type: 'Metro', availability: true, price: '₹20-60' },
      { type: 'Auto', availability: true, price: '₹100-300' },
      { type: 'Taxi', availability: true, price: '₹200-1000' }
    ],
    budget: {
      budget: 2000,
      luxury: 5000
    },
    adventures: [
      {
        name: 'Old Delhi Food & Heritage Walk',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
        description: 'Experience the bustling streets of Old Delhi, try famous street food, and explore hidden gems',
        highlights: [
          'Visit Jama Masjid',
          'Try famous Paranthe Wali Gali',
          'Shop at Chandni Chowk',
          'Explore spice market'
        ],
        timing: '9 AM - 2 PM',
        price: 2500,
        includes: ['Food tastings', 'Local guide', 'Rickshaw ride']
      },
      {
        name: 'Evening at Kingdom of Dreams',
        image: 'https://images.unsplash.com/photo-kingdom-of-dreams',
        description: 'Enjoy Bollywood style entertainment and dining experience',
        highlights: [
          'Watch cultural shows',
          'Try pan-Indian cuisine',
          'Cultural shopping',
          'Live performances'
        ],
        timing: '6 PM - 11 PM',
        price: 3000,
        includes: ['Show ticket', 'Dinner buffet']
      },
      {
        name: 'Delhi Shopping Tour',
        image: 'https://images.unsplash.com/photo-delhi-market',
        description: 'Visit best shopping spots from local markets to luxury malls',
        highlights: [
          'Sarojini Nagar Market',
          'Dilli Haat',
          'Select Citywalk',
          'Janpath Market'
        ],
        timing: 'Flexible (6-7 hours)',
        price: 1500,
        includes: ['Transport', 'Local guide', 'Lunch']
      }
    ],
    seasons: {
      best: 'October to March',
      avoid: 'May to July (Extreme Heat)',
      monsoon: 'July to September'
    },
    advisory: {
      safety: 'Moderate',
      tips: [
        'Be cautious in crowded areas',
        'Use official taxi services or metro',
        'Avoid late night travel in unknown areas',
        'Keep valuables secure'
      ],
      emergencyContacts: {
        police: '100',
        ambulance: '102',
        tourist_police: '1363'
      }
    },
    culture: {
      dress: 'Conservative, modest clothing recommended',
      customs: [
        'Remove shoes before entering temples',
        'Ask permission before taking photos of people',
        'Right hand for eating and passing items'
      ],
      festivals: [
        {
          name: 'Diwali',
          month: 'October/November',
          description: 'Festival of lights with fireworks and celebrations'
        },
        {
          name: 'Republic Day',
          month: 'January',
          description: 'Grand parade and cultural displays'
        }
      ]
    },
    shopping: [
      {
        name: 'Chandni Chowk',
        type: 'Traditional Market',
        speciality: ['Textiles', 'Spices', 'Street Food'],
        bestTime: 'Morning',
        priceRange: 'Budget to Mid-range',
        location: 'Old Delhi',
        tips: ['Bargaining expected', 'Crowded during weekends']
      },
      {
        name: 'Connaught Place',
        type: 'Modern Shopping',
        speciality: ['Brand Outlets', 'Restaurants', 'Entertainment'],
        bestTime: 'Afternoon/Evening',
        priceRange: 'Mid-range to Luxury',
        location: 'Central Delhi'
      }
    ],
    localCuisine: [
      {
        name: 'Street Food Tour',
        description: 'Famous street food locations',
        mustTry: [
          {
            dish: 'Chole Bhature',
            where: 'Chandni Chowk',
            price: '₹50-100'
          },
          {
            dish: 'Paranthe',
            where: 'Paranthe Wali Gali',
            price: '₹40-80'
          }
        ]
      }
    ],
    dayTrips: [
      {
        destination: 'Agra',
        distance: '230 km',
        travelTime: '3-4 hours',
        transport: [
          {
            mode: 'Train',
            duration: '2 hours',
            cost: '₹750-1500'
          },
          {
            mode: 'Private Taxi',
            duration: '3-4 hours',
            cost: '₹3000-4000'
          }
        ],
        highlights: ['Taj Mahal', 'Agra Fort']
      }
    ],
    medical: {
      hospitals: [
        {
          name: 'AIIMS Delhi',
          type: 'Government',
          emergency: true,
          contact: '+91-11-26588500'
        }
      ],
      pharmacies: ['24x7 Available in major areas'],
      vaccinations: ['Routine vaccines recommended']
    },
    suggestedItinerary: {
      "Day 1": {
        morning: "Red Fort & Jama Masjid",
        afternoon: "Chandni Chowk food tour",
        evening: "Light & Sound show at Red Fort"
      },
      "Day 2": {
        morning: "Qutub Minar",
        afternoon: "Humayun's Tomb",
        evening: "Nizamuddin Dargah"
      },
      // ... continue for 10 days
    }
  },
  'Mumbai': {
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7',
    places: [
      {
        name: 'Gateway of India',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
        description: 'Iconic arch monument built in the 20th century',
        timeNeeded: '1-2 hours',
        entryFee: 'Free'
      },
      {
        name: 'Marine Drive',
        image: 'https://tse1.mm.bing.net/th?id=OIP.s1bm3ypFdZ1JK574KhWAOQHaJQ&w=474&h=474&c=7',
        description: 'A 3.6-kilometer-long boulevard, also known as the Queen\'s Necklace',
        timeNeeded: '2-3 hours',
        entryFee: 'Free'
      }
    ],
    hotels: [
      {
        name: 'Taj Mahal Palace',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        description: 'Iconic luxury hotel',
        priceRange: '₹30,000 - ₹80,000',
        rating: 4.9,
        amenities: ['Spa', 'Pool', 'Sea View', 'Multiple Restaurants']
      }
    ],
    restaurants: [
      {
        name: 'Trishna',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
        cuisine: 'Seafood',
        price: '₹₹₹',
        rating: 4.5,
        mustTry: ['Butter Garlic Crab', 'Neer Dosa']
      }
    ],
    transport: [
      { type: 'Local Train', availability: true, price: '₹10-20' },
      { type: 'Taxi', availability: true, price: '₹200-500' }
    ],
    budget: {
      budget: 2500,
      luxury: 6000
    }
  },
  'Jaipur': {
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
    places: [
      {
        name: 'Amber Fort',
        image: 'https://tse2.mm.bing.net/th?id=OIP.Y6OOUI0qEEs-Dy5aOcRU7QHaE7&w=315&h=315&c=7',
        description: 'Majestic fort complex with stunning architecture',
        timeNeeded: '3-4 hours',
        entryFee: '₹200'
      },
      {
        name: 'Hawa Mahal',
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
        description: 'Iconic palace with 953 windows',
        timeNeeded: '1-2 hours',
        entryFee: '₹50'
      },
      {
        name: 'City Palace',
        image: 'https://tse1.mm.bing.net/th?id=OIP.CwuXEyWCX5GkKnP4lfkmCgHaFj&w=355&h=355&c=7',
        description: 'Royal residence with museums',
        timeNeeded: '2-3 hours',
        entryFee: '₹300'
      }
    ],
    hotels: [
      {
        name: 'Rambagh Palace',
        image: 'https://tse4.mm.bing.net/th?id=OIP.TUm_ACHpNypo6B-aYKhhhwHaEq&w=298&h=298&c=7',
        description: 'Former royal residence turned luxury hotel',
        priceRange: 35000,
        rating: 4.9,
        amenities: ['Palace Tours', 'Spa', 'Multiple Restaurants']
      },
      {
        name: 'Zostel Jaipur',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        description: 'Trendy hostel with private rooms',
        priceRange: 2000,
        rating: 4.3,
        amenities: ['Rooftop Cafe', 'Common Area', 'Tours'],
        category: 'Moderate'
      },
      {
        name: 'Hotel Kalyan',
        image: 'https://i0.wp.com/www.rajasthandirect.com/wp-content/uploads/2014/08/Hotel-Kalyan-Jaipur.jpg?fit=680%2C300&ssl=1',
        description: 'Traditional haveli style hotel',
        priceRange: 4000,
        rating: 4.1,
        amenities: ['Restaurant', 'Rooftop', 'Heritage Architecture'],
        category: 'Moderate'
      }
    ],
    restaurants: [
      {
        name: '1135 AD',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        cuisine: 'Royal Rajasthani',
        price: '₹₹₹₹',
        rating: 4.7,
        mustTry: ['Laal Maas', 'Dal Baati']
      },
      {
        name: 'Lassiwala',
        image: 'https://images.unsplash.com/photo-1567337710282-00832b415979',
        cuisine: 'Street Food & Beverages',
        price: '₹',
        rating: 4.5,
        averageCost: '₹100 for two',
        mustTry: ['Lassi', 'Kachori']
      },
      {
        name: 'Niros',
        image: 'https://tse2.mm.bing.net/th?id=OIP.hfLqQ-ylhOKs1eyvHCcXcQHaFj&w=355&h=355&c=7',
        cuisine: 'Multi-cuisine',
        price: '₹₹',
        rating: 4.2,
        averageCost: '₹1000 for two',
        mustTry: ['Dal Bati', 'Laal Maas']
      }
    ],
    transport: [
      { type: 'Auto', availability: true, price: '₹100-250' },
      { type: 'Taxi', availability: true, price: '₹1500/day' }
    ],
    budget: {
      budget: 2500,
      luxury: 6000
    },
    adventures: [
      {
        name: 'Pink City Heritage Walk',
        image: 'https://tse3.mm.bing.net/th?id=OIP.y4vrr49xaarXaXxpgCnLTgHaFs&w=364&h=364&c=7',
        description: 'Explore the historic walled city of Jaipur',
        highlights: [
          'Visit local markets',
          'Traditional architecture',
          'Street food tasting',
          'Artisan workshops'
        ],
        timing: '7 AM - 11 AM',
        price: 1500,
        includes: ['Guide', 'Breakfast', 'Monument entries']
      },
      {
        name: 'Hot Air Balloon Ride',
        image: 'https://tse2.mm.bing.net/th?id=OIP.OCQFyeTWwgo-EQxUasoeogHaE8&w=316&h=316&c=7',
        description: 'Aerial view of the Pink City',
        highlights: [
          'Sunrise views',
          'Bird\'s eye view of forts',
          'Photography opportunities',
          'Champagne breakfast'
        ],
        timing: '5:30 AM - 8:30 AM',
        price: 12000,
        includes: ['Balloon ride', 'Breakfast', 'Transport', 'Photos']
      },
      {
        name: 'Elephant Village Experience',
        image: 'https://tse2.mm.bing.net/th?id=OIP.pwp54eKw7Z3QWNiw0V9-UwHaE8&w=316&h=316&c=7',
        description: 'Ethical elephant interaction and care',
        highlights: [
          'Feed the elephants',
          'Learn about elephant care',
          'Traditional lunch',
          'Paint with elephants'
        ],
        timing: '9 AM - 2 PM',
        price: 3500,
        includes: ['Activities', 'Lunch', 'Transport']
      }
    ]
  },
  'Goa': {
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    places: [
      {
        name: 'Calangute Beach',
        image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f',
        description: 'Popular beach known for water sports and nightlife',
        timeNeeded: '4-5 hours',
        entryFee: 'Free'
      },
      {
        name: 'Basilica of Bom Jesus',
        image: 'https://tse2.mm.bing.net/th?id=OIP._wTe5BpSrBLVRSsG-SkNpQHaFj&w=355&h=355&c=7',
        description: 'UNESCO World Heritage Site, houses remains of St. Francis Xavier',
        timeNeeded: '1-2 hours',
        entryFee: 'Free'
      },
      {
        name: 'Fort Aguada',
        image: 'https://tse4.mm.bing.net/th?id=OIP.POHCCOMxFicXTHX7mj-VsAHaDt&w=237&h=237&c=7',
        description: '17th-century Portuguese fort with lighthouse',
        timeNeeded: '2-3 hours',
        entryFee: '₹50'
      }
    ],
    hotels: [
      {
        name: 'Taj Fort Aguada',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
        description: 'Luxury beach resort',
        priceRange: '₹25,000 - ₹60,000',
        rating: 4.7,
        amenities: ['Private Beach', 'Spa', 'Pool', 'Water Sports']
      },
      {
        name: 'W Goa',
        image: 'https://www.travoh.com/wp-content/uploads/2021/11/013-W-Goa-Vagator-Beach-Resort-Goa-India-Hotel-Exterior-Front-Entrance.jpg',
        description: 'Modern luxury hotel',
        priceRange: '₹30,000 - ₹70,000',
        rating: 4.8,
        amenities: ['Beachfront', 'Spa', 'Nightclub', 'Multiple Restaurants']
      },
      {
        name: 'Palolem Beach Resort',
        image: 'https://tse3.mm.bing.net/th?id=OIP.RUWa0UfPWDzf6l5hsFld2QHaE8&w=316&h=316&c=7',
        description: 'Beachfront cottages',
        priceRange: 3500,
        rating: 4.0,
        amenities: ['Beach Access', 'Restaurant', 'Water Sports'],
        category: 'Moderate'
      },
      {
        name: 'Backpacker Panda',
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c',
        description: 'Social hostel with private rooms',
        priceRange: 1500,
        rating: 4.2,
        amenities: ['Pool', 'Bar', 'Common Area'],
        category: 'Budget'
      }
    ],
    restaurants: [
      {
        name: 'Thalassa',
        image: 'https://tse1.mm.bing.net/th?id=OIP.zmNPiFVAJwEnHdlIPLSp1QHaFj&w=355&h=355&c=7',
        cuisine: 'Greek & Seafood',
        price: '₹2000',
        rating: 4.6,
        mustTry: ['Grilled Octopus', 'Moussaka']
      },
      {
        name: 'Fisherman\'s Wharf',
        image: 'https://tse1.mm.bing.net/th?id=OIP.kdlbYGYF01mjSAxUEJjQnAHaE8&w=316&h=316&c=7',
        cuisine: 'Seafood',
        price: '₹14,300/per night',
        rating: 4.4,
        mustTry: ['Goan Fish Curry', 'Prawn Recheado']
      },
      {
        name: 'Britto\'s',
        image: 'https://c8.alamy.com/comp/DEKPNG/facade-of-a-restaurant-brittos-restaurant-calangute-north-goa-goa-DEKPNG.jpg',
        cuisine: 'Seafood, Goan',
        price: '₹2000/per day',
        rating: 4.3,
        averageCost: '₹1200 for two',
        mustTry: ['Fish Thali', 'Prawn Curry']
      },
      {
        name: 'Curlies',
        image: 'https://images.unsplash.com/photo-1576621934720-5f0400ca11a3',
        cuisine: 'Multi-cuisine, Beach Shack',
        price: '₹₹',
        rating: 4.1,
        averageCost: '₹800 for two',
        mustTry: ['King Fish Fry', 'Beach Burger']
      }
    ],
    transport: [
      { type: 'Scooter Rental', availability: true, price: '₹400/day' },
      { type: 'Taxi', availability: true, price: '₹1500/day' },
      { type: 'Bike Rental', availability: true, price: '₹800/day' }
    ],
    budget: {
      budget: 3000,
      luxury: 8000
    },
    seasons: {
      best: 'November to February',
      avoid: 'June to September (Heavy Monsoon)',
      peak: 'December to January'
    },
    advisory: {
      safety: 'Generally Safe',
      tips: [
        'Be careful while swimming',
        'Rent vehicles from authorized dealers',
        'Keep beach safety flags in mind',
        'Stay hydrated'
      ],
      emergencyContacts: {
        police: '100',
        beach_safety: '1091',
        tourist_helpline: '1800-222-265'
      }
    },
    waterSports: [
      {
        name: 'Jet Skiing',
        location: 'Baga Beach',
        price: '₹1500/30 mins',
        bestTime: 'Morning',
        safetyGear: 'Provided',
        minAge: 16
      },
      {
        name: 'Banana Boat Ride',
        location: 'Calangute Beach',
        price: '₹500/person',
        bestTime: 'Morning/Evening',
        groupSize: '4-6 people'
      }
    ],
    nightlife: [
      {
        name: 'Tito\'s Lane',
        type: 'Club Street',
        location: 'Baga',
        bestTime: '10 PM onwards',
        priceRange: '₹₹₹',
        famous: ['Club Tito\'s', 'Cafe Mambo']
      }
    ],
    beaches: [
      {
        name: 'Anjuna',
        type: 'Rocky/Sandy',
        famous: 'Flea Market (Wednesdays)',
        activities: ['Parasailing', 'Beach Shacks'],
        crowdType: 'Young/International'
      }
    ],
    adventures: [
      {
        name: 'Beach Hopping & Water Sports',
        image: 'https://tse1.mm.bing.net/th?id=OIP.BOKcD8UA-K9MywMqdF6rNwHaE8&w=316&h=316&c=7',
        description: 'Experience the best beaches and water activities',
        highlights: [
          'Visit Calangute & Baga',
          'Parasailing & Jet Ski',
          'Beach shack lunch',
          'Sunset at Anjuna'
        ],
        timing: '9 AM - 6 PM',
        price: 3500,
        includes: ['Transport', 'Water sports', 'Lunch']
      },
      {
        name: 'South Goa Heritage Tour',
        image: 'https://tse2.mm.bing.net/th?id=OIP.2Pd8d-zScVx0kd8h21YCzQHaD2&w=246&h=246&c=7',
        description: 'Explore Portuguese heritage and serene beaches',
        highlights: [
          'Se Cathedral',
          'Basilica of Bom Jesus',
          'Colva Beach',
          'Spice Plantation'
        ],
        timing: '8 AM - 5 PM',
        price: 2500,
        includes: ['AC Transport', 'Guide', 'Lunch', 'Entry fees']
      },
      {
        name: 'Goan Nightlife Experience',
        image: 'https://tse1.mm.bing.net/th?id=OIP.EV8khcmtreWrp9zMMQDE6QHaHa&w=474&h=474&c=7',
        description: 'Experience the famous Goan nightlife',
        highlights: [
          'Beach sunset',
          'Tito\'s Lane',
          'Club hopping',
          'Night market (seasonal)'
        ],
        timing: '4 PM - 12 AM',
        price: 2000,
        includes: ['Club entries', 'One welcome drink', 'Transport']
      }
    ]
  },
  'Varanasi': {
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6',
    places: [
      {
        name: 'Dashashwamedh Ghat',
        image: 'https://www.adotrip.com/public/images/areas/master_images/5c98accb78e72-Dashashwamedh_Ghat_Attractions.jpg',
        description: 'Famous ghat known for evening Ganga Aarti',
        timeNeeded: '2-3 hours',
        entryFee: 'Free',
        bestTime: 'Evening',
        tips: ['Arrive early for good spots', 'Photography allowed']
      },
      {
        name: 'Kashi Vishwanath Temple',
        image: 'https://ghoomophiro.com/wp-content/uploads/2023/05/Kashi-Vishwanath-2-1536x980.jpg',
        description: 'One of the most famous Hindu temples',
        timeNeeded: '1-2 hours',
        entryFee: 'Free',
        bestTime: 'Early Morning',
        tips: ['ID proof required', 'No phones allowed']
      }
    ],
    hotels: [
      {
        name: 'Taj Ganges',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/4b/f5/e7/hero-picture.jpg?h=-1&s=1&w=1400',
        description: 'Luxury hotel with modern amenities',
        priceRange: 12000,
        rating: 4.6,
        amenities: ['Pool', 'Spa', 'Multiple Restaurants'],
        category: 'Luxury'
      },
      {
        name: 'BrijRama Palace',
        image: 'https://www.theluxevoyager.com/wp-content/uploads/2020/06/Brijrama-Palace-Hotel-Terrace-Varanasi-2-Copy.jpg',
        description: 'Heritage hotel on Darbhanga Ghat',
        priceRange: 15000,
        rating: 4.8,
        amenities: ['River View', 'Heritage Architecture', 'Boat Service'],
        category: 'Luxury'
      }
    ],
    restaurants: [
      {
        name: 'Varanasi Cafe',
        image: 'https://fastly.4sqi.net/img/general/original/134003027_Or40yijLWh887Q72DUtVh_ZEOXfglrJC8T08jNUDJzs.jpg',
        cuisine: 'North Indian',
        price: '₹₹',
        rating: 4.3,
        averageCost: '₹800 for two',
        mustTry: ['Banarasi Thali', 'Lassi']
      },
      {
        name: 'Blue Lassi Shop',
        image: 'https://visitkashi.in/backend/admin/product_images/168087247773.jpg',
        cuisine: 'Beverages & Snacks',
        price: '₹',
        rating: 4.5,
        averageCost: '₹200 for two',
        mustTry: ['Special Lassi', 'Thandai']
      }
    ],
    transport: [
      { type: 'Auto', availability: true, price: '₹50-200' },
      { type: 'Boat Ride', availability: true, price: '₹500-1000' },
      { type: 'Cycle Rickshaw', availability: true, price: '₹30-100' }
    ],
    adventures: [
      {
        name: 'Sunrise Boat Tour',
        image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca',
        description: 'Experience the magical sunrise on the Ganges',
        highlights: [
          'Morning rituals',
          'Sunrise views',
          'Visit multiple ghats',
          'Photography opportunities'
        ],
        timing: '5 AM - 8 AM',
        price: 1500,
        includes: ['Boat ride', 'Guide', 'Morning tea', 'Flower offering']
      },
      {
        name: 'Evening Spiritual Walk',
        image: 'https://res.klook.com/images/fl_lossy.progressive%2Cq_65/c_fill%2Cw_1295%2Ch_918/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/wqjkp0dyhmmxhqef7ilr/SpiritualWalkAndBoatRideInVaranasiWithGangaAartiExperience.jpg',
        description: 'Explore the spiritual heart of India',
        highlights: [
          'Ganga Aarti ceremony',
          'Temple visits',
          'Local markets',
          'Cultural insights'
        ],
        timing: '4 PM - 8 PM',
        price: 2000,
        includes: ['Expert guide', 'Aarti participation', 'Snacks']
      },
      {
        name: 'Food Trail Tour',
        image: 'https://www.holidaytourstravel.com/wp-content/uploads/2021/11/header-chittering-valley.jpg',
        description: 'Taste the authentic flavors of Varanasi',
        highlights: [
          'Street food tasting',
          'Famous sweet shops',
          'Local specialties',
          'Hidden food gems'
        ],
        timing: '4 PM - 7 PM',
        price: 1800,
        includes: ['All food tastings', 'Guide', 'Water']
      }
    ],
    budget: {
      budget: 2000,
      luxury: 8000
    }
  },
  'Udaipur': {
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66',
    places: [
      {
        name: 'City Palace',
        image: 'https://tse1.mm.bing.net/th?id=OIP.CwuXEyWCX5GkKnP4lfkmCgHaFj&w=355&h=355&c=7',
        description: 'Magnificent palace complex on Lake Pichola',
        timeNeeded: '3-4 hours',
        entryFee: '₹300',
        bestTime: 'Morning',
        tips: ['Take guided tour', 'Visit museum inside']
      },
      {
        name: 'Lake Pichola',
        image: 'https://tse2.mm.bing.net/th?id=OIP.Y6OOUI0qEEs-Dy5aOcRU7QHaE7&w=315&h=315&c=7',
        description: 'Artificial freshwater lake with palace views',
        timeNeeded: '2-3 hours',
        entryFee: '₹800 (boat ride)',
        bestTime: 'Evening',
        tips: ['Sunset boat ride', 'Visit Jag Mandir']
      },
      {
        name: 'Jagdish Temple',
        image: 'https://tse4.mm.bing.net/th?id=OIP.TUm_ACHpNypo6B-aYKhhhwHaEq&w=298&h=298&c=7',
        description: 'Indo-Aryan architecture temple',
        timeNeeded: '1-2 hours',
        entryFee: 'Free',
        bestTime: 'Morning',
        tips: ['Morning aarti', 'Architecture photography']
      }
    ],
    hotels: [
      {
        name: 'Taj Lake Palace',
        image: 'https://tse2.mm.bing.net/th?id=OIP.hfLqQ-ylhOKs1eyvHCcXcQHaFj&w=355&h=355&c=7',
        description: 'Luxury hotel on Lake Pichola',
        priceRange: 35000,
        rating: 4.9,
        amenities: ['Lake View', 'Spa', 'Pool', 'Royal Service'],
        category: 'Luxury'
      },
      {
        name: 'The Oberoi Udaivilas',
        image: 'https://tse3.mm.bing.net/th?id=OIP.y4vrr49xaarXaXxpgCnLTgHaFs&w=364&h=364&c=7',
        description: 'Premium luxury resort',
        priceRange: 45000,
        rating: 4.8,
        amenities: ['Private Pool', 'Spa', 'Lake View'],
        category: 'Luxury'
      },
      {
        name: 'Hotel Lakend',
        image: 'https://tse2.mm.bing.net/th?id=OIP.OCQFyeTWwgo-EQxUasoeogHaE8&w=316&h=316&c=7',
        description: 'Lake facing hotel',
        priceRange: 8000,
        rating: 4.3,
        amenities: ['Pool', 'Restaurant', 'Lake View'],
        category: 'Premium'
      }
    ],
    restaurants: [
      {
        name: 'Upre by 1559 AD',
        image: 'https://tse2.mm.bing.net/th?id=OIP.pwp54eKw7Z3QWNiw0V9-UwHaE8&w=316&h=316&c=7',
        cuisine: 'Indian, Continental',
        price: '₹₹₹',
        rating: 4.6,
        mustTry: ['Laal Maas', 'Lake View Dining'],
        averageCost: '₹2500 for two'
      },
      {
        name: 'Ambrai',
        image: 'https://tse2.mm.bing.net/th?id=OIP._wTe5BpSrBLVRSsG-SkNpQHaFj&w=355&h=355&c=7',
        cuisine: 'Rajasthani',
        price: '₹₹',
        rating: 4.5,
        mustTry: ['Dal Baati', 'Gatte ki Sabzi'],
        averageCost: '₹1500 for two'
      }
    ],
    transport: [
      { type: 'Auto', availability: true, price: '₹100-300' },
      { type: 'Taxi', availability: true, price: '₹1500/day' },
      { type: 'Boat', availability: true, price: '₹800/person' }
    ],
    adventures: [
      {
        name: 'Sunset Boat Ride',
        image: 'https://tse4.mm.bing.net/th?id=OIP.POHCCOMxFicXTHX7mj-VsAHaDt&w=237&h=237&c=7',
        description: 'Romantic lake tour during sunset',
        highlights: [
          'Lake Pichola views',
          'Palace photography',
          'Sunset views',
          'Island visit'
        ],
        timing: '5 PM - 7 PM',
        price: 1500,
        includes: ['Boat ride', 'Guide', 'Snacks']
      },
      {
        name: 'Heritage Walk',
        image: 'https://www.travoh.com/wp-content/uploads/2021/11/013-W-Goa-Vagator-Beach-Resort-Goa-India-Hotel-Exterior-Front-Entrance.jpg',
        description: 'Explore old city architecture',
        highlights: [
          'Ancient havelis',
          'Local markets',
          'Traditional art',
          'Street food'
        ],
        timing: '9 AM - 12 PM',
        price: 1200,
        includes: ['Guide', 'Water', 'Snacks']
      }
    ],
    budget: {
      budget: 3000,
      luxury: 10000
    }
  },
  'Agra': {
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada',
    places: [
      {
        name: 'Taj Mahal',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
        description: 'UNESCO World Heritage Site, symbol of eternal love',
        timeNeeded: '2-3 hours',
        entryFee: '₹1100'
      },
      {
        name: 'Agra Fort',
        image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/Jahangiri-Mahal-Agra-Fort1.jpg',
        description: 'UNESCO World Heritage Site, Mughal architectural marvel',
        timeNeeded: '2-3 hours',
        entryFee: '₹550'
      }
    ],
    hotels: [
      {
        name: 'The Oberoi Amarvilas',
        image: 'https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-amarvilas-agra/gallery/featured/amarvilas-gallery-featured-2-hotel-exterior-724x407.jpg',
        description: 'Luxury hotel with Taj Mahal views',
        priceRange: 35000,
        rating: 4.9,
        amenities: ['Taj View', 'Spa', 'Pool'],
        category: 'Luxury'
      },
      {
        name: 'Crystal Sarovar',
        image: 'https://img4.nbstatic.in/tr:w-500/568176280b04512cde6a41b2.jpg',
        description: 'Modern hotel with good amenities',
        priceRange: 5000,
        rating: 4.2,
        amenities: ['Restaurant', 'Pool', 'WiFi'],
        category: 'Moderate'
      }
    ],
    restaurants: [
      {
        name: 'Pind Balluchi',
        image: 'https://s3-img.pixpa.com/com/large/24618/1592562104-195072-pind-balluchicp-1-jpeg-for-web-srgbjpg.jpg',
        cuisine: 'North Indian',
        price: '₹₹',
        rating: 4.3,
        averageCost: '₹1200 for two',
        mustTry: ['Butter Chicken', 'Dal Makhani']
      },
      {
        name: 'Bon Barbecue',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/3d/c4/6c/bon-barbecue-restaurant.jpg',
        cuisine: 'Mughlai',
        price: '₹₹',
        rating: 4.2,
        averageCost: '₹1000 for two',
        mustTry: ['Kebabs', 'Biryani']
      }
    ],
    transport: [
      { type: 'Auto', availability: true, price: '₹100-300' },
      { type: 'Taxi', availability: true, price: '₹1000/day' }
    ],
    budget: {
      budget: 2500,
      luxury: 6000
    },
    adventures: [
      {
        name: 'Taj Mahal Sunrise Tour',
        image: 'https://www.agrasamedaytours.com/images/tajsunrise-main.jpg',
        description: 'Experience the Taj at its most beautiful hour',
        highlights: [
          'Beat the crowds',
          'Perfect lighting for photos',
          'Expert photography tips',
          'Breakfast at luxury hotel'
        ],
        timing: '5 AM - 9 AM',
        price: 4000,
        includes: ['Guide', 'Entry fees', 'Breakfast', 'Transport']
      },
      {
        name: 'Mughal Heritage Walk',
        image: 'https://thetajwondertours.com/wp-content/uploads/2022/07/sa3-768x448.jpg',
        description: 'Explore the lesser-known Mughal monuments',
        highlights: [
          'Hidden gems',
          'Local villages',
          'Craft workshops',
          'Authentic cuisine'
        ],
        timing: '3 PM - 7 PM',
        price: 2500,
        includes: ['Expert guide', 'Snacks', 'Entry fees']
      }
    ]
  },
  'Kochi': {
    image: 'https://blog.japanwondertravel.com/wp-content/uploads/2020/08/b29ab879ccd509299cc00351eada04b1-1200x795.jpg',
    places: [
      {
        name: 'Chinese Fishing Nets',
        image: 'https://3.bp.blogspot.com/-KrO_SZ6pBk4/TwEZgn9_deI/AAAAAAAAMqs/sHgCknefZzM/s1600/IMG_3044.JPG',
        description: 'Iconic fishing nets at Fort Kochi',
        timeNeeded: '1-2 hours',
        entryFee: 'Free'
      }
    ],
    hotels: [
      {
        name: 'Grand Hyatt',
        image: 'https://sunstylefiles.com/wp-content/uploads/2018/10/best-luxury-hotel-kochi-grand-hyatt-bolgatty-building-e1540124626383.jpg',
        description: 'Luxury hotel',
        priceRange: 11700,
        rating: 4.9,
        amenities: ['View', 'Spa', 'Pool'],
        category: 'Luxury'
      }
    ],
    restaurants: [
      {
        name: 'Chilliout Cafe',
        image: 'https://ldstudio.mk/wp-content/uploads/2020/04/Chill-03.jpg',
        cuisine: 'Multi-cuisine',
        price: '₹₹',
        rating: 4.3,
        averageCost: '₹1000 for two',
        mustTry: ['Burgers', 'Sandwiches']
      }
    ],
    adventures: [
      {
        name: 'Backwater Houseboat Cruise',
        image: 'https://static.wixstatic.com/media/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg/v1/fill/w_2500,h_1666,al_c/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg',
        description: 'Traditional Kerala houseboat experience',
        highlights: [
          'Scenic backwaters',
          'Local village life',
          'Fresh seafood',
          'Sunset views'
        ],
        timing: '12 PM - Next day 9 AM',
        price: 8000,
        includes: ['Accommodation', 'All meals', 'Activities']
      },
      {
        name: 'Fort Kochi Food Trail',
        image: 'http://asoulwindow.com/wp-content/uploads/2016/08/img_2839.jpg',
        description: 'Culinary journey through Kerala\'s history',
        highlights: [
          'Syrian Christian cuisine',
          'Jewish delicacies',
          'Fresh seafood',
          'Spice market visit'
        ],
        timing: '4 PM - 8 PM',
        price: 2000,
        includes: ['All tastings', 'Guide', 'Recipe booklet']
      }
    ],
    transport: [
      { type: 'Auto', availability: true, price: '₹100-300' },
      { type: 'Taxi', availability: true, price: '₹1000/day' }
    ],
    budget: {
      budget: 2500,
      luxury: 6000
    }
  },
  'Rishikesh': {
    image: 'https://imgcld.yatra.com/ytimages/image/upload/v1438854506/Domestic%20Holidays/Uttarakhand/Rishikesh/Rishikesh77.jpg',
    places: [
      {
        name: 'Laxman Jhula',
        image: 'https://www.hoteldekho.com/storage/img/tourattraction/1651231977lakshman-jhula.jpg',
        description: 'Famous suspension bridge over Ganges',
        timeNeeded: '1 hour',
        entryFee: 'Free'
      }
    ],
    hotels: [
      {
        name: 'Regenta Inn On The Ganges Rishikesh',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/53/05/3b/suite-room.jpg?w=1200&h=-1&s=1',
        priceRange: 5000,
        rating: 4.9,
        amenities: ['View', 'Pool'],
        category: 'Luxury'
      }
    ],
    restaurants: [
      {
        name: 'Avaana On The Cliff',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/9a/03/72/fresh-homemade-food-using.jpg?w=500&h=400&s=1',
        cuisine: 'Multi-cuisine',
        price: '₹₹',
        rating: 4.3,
        averageCost: '₹5000 for two',
        mustTry: ['Sprouted Mung Bean Salad', 'Garlic Buckwheat Noodles']
      }
    ],
    adventures: [
      {
        name: 'White Water Rafting',
        image: 'http://www.activehighs.co.uk/wp-content/uploads/2015/12/Raft-Header-4.jpg',
        description: 'Adventure on the Ganges rapids',
        highlights: [
          '16km river stretch',
          'Grade 3 rapids',
          'Beach camping',
          'Cliff jumping'
        ],
        timing: '9:30 AM - 2 PM',
        price: 1800,
        includes: ['Equipment', 'Safety gear', 'Lunch', 'Photos']
      },
      {
        name: 'Yoga and Meditation Retreat',
        image: 'https://www.lifestylephuket.com/wp-content/uploads/2023/08/Top-5-Meditation-Retreats-in-Phuket-5.jpg',
        description: 'Spiritual wellness experience',
        highlights: [
          'Morning yoga',
          'Meditation sessions',
          'Ayurvedic food',
          'Nature walks'
        ],
        timing: 'Full day',
        price: 3500,
        includes: ['Classes', 'Meals', 'Mat', 'Certificate']
      }
    ]
  }
}; 
