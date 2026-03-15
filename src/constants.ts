import { HolidayPackage } from './types';


export const HOLIDAY_PACKAGES: HolidayPackage[] = [
  {
    id: '1',
    title: 'The Land of 3 Seas : Kanyakumari',
    destination: 'Kanyakumari',
    duration: '9 Days / 8 Nights',
    price: 81999,
    image: '/assets/kanyakumari/Kanyakumari1.jpeg',
    images: [
      '/assets/kanyakumari/Kanyakumari1.jpeg',
      '/assets/kanyakumari/Kanyakumari2.jpeg',
      '/assets/kanyakumari/Kanyakumari3.jpeg',
      '/assets/kanyakumari/Kanyakumari4.jpeg',
      '/assets/kanyakumari/Kanyakumari5.jpeg'
    ],
    categories: ['Adventure'],
    highlights: [
      'Manimuthar Waterfalls',
      'Manjolai Tea Estate',
      'Agasthiyar Falls',
      'Kanyakumari Three-Ocean Sunrise',
      'Palaruvi Waterfall',
      'Gavi Forest Safari',
      'Ponmudi Hill Drive',
      'Leela Kovalam Cliff Resort'
    ],
    
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Thoothukudi',
        description: 'Begin with dawn pooja at the 2,000-year-old Shankara Rameshwarar Temple, followed by a walk through the working harbour and the historic Dutch and British merchant quarter. Visit the pearl market and salt pans in the afternoon, and end the day at the 1582 Our Lady of Snows Basilica. Enjoy local seafood meals throughout the day and stay at Regency Tuticorin by GRT Hotels.'
      },
      {
        day: 2,
        title: 'Manimuthar & Manjolai',
        description: 'Drive into Kalakad Mundanthurai Tiger Reserve to visit the hidden Manimuthar Waterfalls. Continue to Manjolai Tea Estate at 1,160 metres and walk the Kuthiraivetti viewpoint trail with views of Nilgiri Langurs. Visit the tea factory and end the day inside the tiger reserve at Kuthiraivetti Forest Guest House.'
      },
      {
        day: 3,
        title: 'Agasthiyar & Ambasamudram',
        description: 'Arrive early at Agasthiyar Falls for a swim in the natural pool and trek to the Papanasam hilltop shrine. Later visit the Karaiyar British-era dam and explore the Thamirabarani riverbank with ritual bathing ghats. Stay in a heritage bungalow overlooking the river.'
      },
      {
        day: 4,
        title: 'Journey to Kanyakumari',
        description: 'Stop at the scenic Pechiparai Reservoir and the historic 16th-century Padmanabhapuram Palace before reaching Kanyakumari. Visit Sanguthurai Fishing Village for an authentic coastal experience and watch the sunset where the Bay of Bengal, Arabian Sea, and Indian Ocean meet. Overnight at Sparsa Resort.'
      },
      {
        day: 5,
        title: 'Kanyakumari Sunrise',
        description: 'Wake early for pre-dawn darshan at Bhagavati Amman Temple and witness the famous three-ocean sunrise. Take the morning ferry to Vivekananda Rock Memorial and later visit Thirparappu Waterfalls. Enjoy local seafood and stay another night at Sparsa Resort.'
      },
      {
        day: 6,
        title: 'Palaruvi & Thekkady',
        description: 'Cross the Aryankavu mountain pass into Kerala and visit the 91-metre Palaruvi Waterfall. Arrive at Thekkady and check into Spice Village eco-cottages. In the evening attend a tribal dance performance showcasing the indigenous communities of the Periyar forest.'
      },
      {
        day: 7,
        title: 'Gavi Forest Experience',
        description: 'Row boat at dawn on Gavi Lake and take a plantation walk learning about Mannan tribal history. Later go on a jeep safari deep into Periyar Tiger Reserve to spot elephants, gaur bison, and deer. End the day around a forest bonfire and stay in a canvas cottage by the lake.'
      },
      {
        day: 8,
        title: 'Ponmudi & Kovalam',
        description: 'Start with an early safari before driving west to the coast. Stop at Magic Planet and take a detour to Ponmudi hill station with its scenic hairpin bends. Arrive at The Leela Kovalam, a cliff-top luxury resort overlooking the Arabian Sea, and relax with a spa experience.'
      },
      {
        day: 9,
        title: 'Departure from Trivandrum',
        description: 'Enjoy a morning Abhyanga oil massage at The Leela Spa, visit Napier Museum and Chitra Gallery, and shop at East Fort craft market. Attend evening darshan at Padmanabhaswamy Temple before a traditional Onam Sadya meal. Transfer to Trivandrum Airport for departure.'
      }
    ]
  },
  {
    id: '2',
    title: 'Royal Rajasthan Odyssey',
    destination: 'Rajasthan',
    duration: '8 Days / 7 Nights',
    price: 41999,
    image: '/assets/rajasthan/Rajasthanimg1.jpg',
    images: [
      '/assets/rajasthan/Rajasthanimg1.jpg',
      '/assets/rajasthan/Rajasthanimg2.jpg',
      '/assets/rajasthan/Rajasthanimg3.jpg',
      '/assets/rajasthan/Rajasthanimg4.jpg',
      '/assets/rajasthan/Rajasthanimg5.jpg'
    ],
    categories: ['Heritage'],
  
    highlights: [
      'Amber Fort & Jaipur Old City',
      'Lake Pichola Sunset Boat Ride',
      'Mehrangarh Fort Blue City Views',
      'Jaisalmer Desert Camel Safari',
      'Rajasthani Folk Shows',
      'Historic Palaces & Forts',
      'Traditional Bazaar Shopping',
      'Desert Camp Night Experience'
    ],
  
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur – The Pink City',
        description: 'Arrive in Jaipur and explore the historic old city. Visit City Palace, Jantar Mantar, and the iconic Hawa Mahal. Wander through Bapu Bazaar for traditional textiles, jewellery, and handicrafts before enjoying local Rajasthani cuisine.'
      },
      {
        day: 2,
        title: 'Amber Fort & Cultural Evening',
        description: 'Visit the magnificent Amber Fort early in the morning. Explore Sheesh Mahal and Diwan-e-Aam before heading to Nahargarh Fort for panoramic views of Jaipur. In the evening enjoy a cultural village experience at Chokhi Dhani with folk performances and Dal Baati Churma dinner.'
      },
      {
        day: 3,
        title: 'Travel to Udaipur – City of Lakes',
        description: 'Travel from Jaipur to Udaipur and check into your lakeside accommodation. Explore the grand City Palace complex and enjoy a sunset boat ride on Lake Pichola. End the evening with a traditional folk dance performance at Bagore Ki Haveli.'
      },
      {
        day: 4,
        title: 'Art, Culture & Lake Views',
        description: 'Take the cable car to Karni Mata Temple for panoramic views of Udaipur. Participate in a miniature painting workshop and explore Shilpgram crafts village. Later stroll along Fateh Sagar Lake and enjoy a traditional Rajasthani dinner.'
      },
      {
        day: 5,
        title: 'Arrival in Jodhpur – The Blue City',
        description: 'Travel to Jodhpur and visit the majestic Mehrangarh Fort, one of India’s greatest forts. Walk through the blue-painted lanes of the old city and visit Toorji Ka Jhalra stepwell. Enjoy rooftop dining overlooking the illuminated fort.'
      },
      {
        day: 6,
        title: 'Bishnoi Village & Local Markets',
        description: 'Take a Bishnoi village safari to experience traditional desert life and wildlife conservation culture. Return to explore Sardar Market and the Clock Tower bazaar. Visit Jaswant Thada before enjoying authentic desert cuisine in the evening.'
      },
      {
        day: 7,
        title: 'Journey to Jaisalmer & Desert Adventure',
        description: 'Travel to Jaisalmer, the Golden City in the Thar Desert. Explore the Jaisalmer Fort and Patwon Ki Haveli before heading into the desert for a camel safari. Spend the night at a desert camp with folk music, dance, and stargazing.'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Enjoy sunrise over the sand dunes before returning to Jaisalmer city. Transfer to the airport or railway station for your onward journey.'
      }
    ]
  },
  {
    id: '3',
    title: 'Kerala Cultural & Wellness Experience',
    destination: 'Kerala',
    duration: '10 Days / 9 Nights',
    price: 69999,
    image: '/assets/kerala/Kerala1.jpeg',
    images: [
      '/assets/kerala/Kerala1.jpeg',
      '/assets/kerala/Kerala2.jpeg',
      '/assets/kerala/Kerala3.jpeg',
      '/assets/kerala/Kerala4.jpeg',
      '/assets/kerala/Kerala5.jpeg',
      '/assets/kerala/Kerala6.jpeg'
    ],
  
    categories: ['Retreat'],
  
    highlights: [
      'Thrissur Pooram Festival',
      'Kerala Snake Boat Regatta',
      'Theyyam Sacred Ritual',
      'Village Canoe Backwater Tour',
      'Kalaripayattu Martial Arts Experience',
      'Traditional Kerala Cooking Masterclass',
      'Ayurvedic Panchakarma Retreat',
      'Luxury Wellness Stay in Trivandrum'
    ],
  
    itinerary: [
      {
        day: 1,
        title: 'Option A : Festival Experience: Thrissur Pooram and Onam',
        description: 'Best Months: March–April for Thrissur Pooram | August–September for Onam | Thrissur Pooram Festival: Witness Kerala’s most spectacular temple festival featuring decorated elephants, Panchavadyam percussion orchestras and grand fireworks at Vadakkunnathan Temple.'
      },
      {
        day: 1,
        title: 'Option B : Attuvela Mahotsav: Snake Boat Regatta',
        description: 'Best Months: August–September (post-Onam) | Attuvela Mahotsav Snake Boat Regatta: Watch synchronized snake boat races across the backwaters of Alappuzha and meet traditional rowing teams before enjoying a moonlit houseboat cruise.'
      },
      {
        day: 1,
        title: 'Option C - Theyyam: The Living God Ritual',
        description: 'Best Months: November–May (peak season: December–February) | Theyyam Ritual Experience: Attend the ancient Theyyam ritual in North Kerala where performers embody deities through elaborate costumes, trance dance and sacred storytelling.'
      },
      {
        day: 1,
        title: 'Option D - Theyyattu: Ritual Folk Art of Kerala Temples',
        description: 'Best Months: October–March | Theyyattu Temple Ritual: Observe this classical temple ritual dance performed with traditional percussion, intricate makeup artistry and mythological storytelling.'
      },
      {
        day: 1,
        title: 'Option E - Garudan Thookam: The Sacred Hook Swing',
        description: 'Best Months: March–April (Vishu season) | Garudan Thookam Ritual: Witness the rare Vishu-season ritual where devotees are suspended on hooks as a symbolic offering to the goddess in a powerful act of devotion.'
      },
      {
        day: 2,
        title: 'Village & Backwater Experience',
        description: 'Begin with a sunrise cruise across Vembanad Lake on a traditional houseboat. Explore narrow canals by canoe, walk through Kuttanad’s below-sea-level paddy fields, and enjoy a home-cooked lunch in a village home before returning by sunset cruise.'
      },
      {
        day: 3,
        title: 'Native Kerala Activities',
        description: 'Join fishermen for early morning fishing, operate the famous Chinese fishing nets at Fort Kochi, climb coconut trees with local guides and participate in a Kalaripayattu martial arts training session.'
      },
      {
        day: 4,
        title: 'Authentic Kerala Cuisine Day',
        description: 'Explore spice markets filled with cardamom and pepper before a cooking masterclass preparing Fish Molee, Avial, Olan and Payasam. Enjoy a traditional 26-course Sadhya meal followed by a tea estate visit and evening street food walk.'
      },
      {
        day: 5,
        title: 'Ayurvedic Wellness Retreat Begins',
        description: 'Check into a luxury Ayurvedic retreat near Trivandrum where a personal Vaidya designs a wellness program including Abhyanga, yoga, meditation and Ayurvedic diet therapy.'
      },
      {
        day: 6,
        title: 'Ayurveda Therapy & Yoga',
        description: 'Participate in daily yoga sessions followed by Ayurvedic treatments such as Shirodhara and herbal therapies designed to restore balance and detoxify the body.'
      },
      {
        day: 7,
        title: 'Panchakarma Healing Experience',
        description: 'Undergo personalized Panchakarma detox therapies and enjoy guided meditation sessions along with Ayurvedic nutritional meals.'
      },
      {
        day: 8,
        title: 'Wellness & Cultural Exploration',
        description: 'Balance therapy sessions with cultural activities including nature walks, traditional Kerala cooking demonstrations and wellness consultations.'
      },
      {
        day: 9,
        title: 'Final Wellness Day',
        description: 'Enjoy a final series of rejuvenation treatments and receive a personalized Ayurvedic lifestyle and diet plan before departure.'
      },
      {
        day: 10,
        title: 'Departure – Kochi Airport',
        description: 'Check out from the retreat, browse local handicrafts and spice markets, and transfer to Kochi International Airport.'
      }
    ]
  },
  {
    id: '4',
    title: 'Chettinad Heritage & Culinary Experience',
    destination: 'Karaikudi',
    duration: '4 Days / 3 Nights',
    price: 39999,
    image: '/assets/karaikudi/Karaikudi4.jpeg',
    images: [
      '/assets/karaikudi/Karaikudi2.jpeg',
      '/assets/karaikudi/Karaikudi3.jpeg',
      '/assets/karaikudi/Karaikudi4.jpeg',
      '/assets/karaikudi/Karaikudi5.jpeg',
      '/assets/karaikudi/Karaikudi6.jpeg'
    ],
  
    categories: ['Legacy'],
  
    highlights: [
      'Chettinad Mansion Heritage Stay',
      'Athangudi Tile Craft Workshop',
      'Chettinad Banana Leaf Feast',
      'Historic Merchant Palaces Tour',
      'Sri Solai Aandavar Temple Rituals',
      'Traditional Handloom Weaving Experience'
    ],
  
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Antique Trail',
        description: 'Arrive at Chettinad Mansion in Kanadukathan and explore antique markets filled with brass lamps, teak furniture and colonial relics. Visit Athangudi village and create your own handcrafted tile with a local artisan family.'
      },
      {
        day: 2,
        title: 'The Chettinad Culinary Experience',
        description: 'Enjoy a slow cultural day centered around Chettinad cuisine. After a spice walk with the chef, experience a traditional 15-dish banana-leaf meal followed by evening tea, homemade snacks and a relaxed mansion walk.'
      },
      {
        day: 3,
        title: 'Merchant Palaces & Temples',
        description: 'Visit the famous Thousand Windows House and Kanadukathan Palace. End the day at Sri Solai Aandavar Temple where terracotta horses are offered as devotional vows.'
      },
      {
        day: 4,
        title: 'Craft & Cultural Farewell',
        description: 'Visit the Chettinad Handloom Weaving Centre to observe artisans creating sarees entirely by hand. Try weaving and shop directly from artisans before a farewell lunch at the mansion.'
      }
    ]
  },
  {
    id: '5',
    title: 'Himalayan Odyssey',
    destination: 'Uttarakhand',
    duration: '12 Days / 11 Nights',
    price: 49999,
    image: '/assets/uttarakhand/Uttarakhand1.jpg',
    images: [
      '/assets/uttarakhand/Uttarakhand1.jpg',
      '/assets/uttarakhand/Uttarakhand2.jpg',
      '/assets/uttarakhand/Uttarakhand3.jpg',
      '/assets/uttarakhand/Uttarakhand4.jpg'
    ],
    categories: ['Serenity'],
  
    highlights: [
      'White Water Rafting in Rishikesh',
      'Ganga Aarti at Triveni Ghat',
      'Mall Road & Lal Tibba in Mussoorie',
      'Tungnath & Chandrashila Summit Trek',
      'Deoria Tal Alpine Lake',
      'Manali Mountain Adventures',
      'Solang Valley Activities',
      'Himalayan Scenic Drives'
    ],
  
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Rishikesh',
        description: 'Arrive in Rishikesh and check into a riverside guesthouse near Laxman Jhula. Explore Laxman Jhula and Ram Jhula bridges, visit the Trimbakeshwar temple and attend the evening Ganga Aarti at Triveni Ghat before enjoying a rooftop dinner overlooking the Ganga.'
      },
      {
        day: 2,
        title: 'Adventure Activities in Rishikesh',
        description: 'Start the day with white-water rafting on the Ganga. Later try bungee jumping or the giant swing at Jumping Heights. Visit the Beatles Ashram in the afternoon and attend a yoga or meditation session in the evening.'
      },
      {
        day: 3,
        title: 'Temple Trek & Himalayan Sunrise',
        description: 'Wake early to watch the sunrise from Kunjapuri Temple. After breakfast trek through dense forest to Neelkanth Mahadev Temple. Spend the evening kayaking or relaxing by the river before preparing for the journey to Mussoorie.'
      },
      {
        day: 4,
        title: 'Travel to Mussoorie',
        description: 'Drive from Rishikesh to Mussoorie. Explore Lal Tibba viewpoint and take a scenic walk along Camel’s Back Road at sunset. Enjoy a relaxed evening on Mall Road with local food and shopping.'
      },
      {
        day: 5,
        title: 'Waterfalls & Forest Trails',
        description: 'Visit Cloud’s End forest area before heading to Kempty Falls. Later explore Dhanaulti’s quiet mountain meadows and cedar forests before returning to Mussoorie in the evening.'
      },
      {
        day: 6,
        title: 'Journey to Chopta',
        description: 'Drive through the Garhwal Himalayas via Devprayag and Ukhimath before reaching the alpine meadows of Chopta. Spend the evening exploring the surrounding forests and enjoy stargazing in the clear mountain sky.'
      },
      {
        day: 7,
        title: 'Tungnath & Chandrashila Trek',
        description: 'Begin the early morning trek to Tungnath, the highest Shiva temple in the world. Continue further to the Chandrashila summit for panoramic views of Nanda Devi, Kedarnath and Chaukhamba peaks before descending back to Chopta.'
      },
      {
        day: 8,
        title: 'Deoria Tal & Departure for Manali',
        description: 'Visit the beautiful Deoria Tal lake at sunrise where the surrounding Himalayan peaks reflect in the water. Later begin the scenic journey towards Manali.'
      },
      {
        day: 9,
        title: 'Arrival in Manali',
        description: 'Reach Manali and explore Old Manali village, Hadimba Devi Temple and the charming cafés along the Beas River.'
      },
      {
        day: 10,
        title: 'Solang Valley Adventure',
        description: 'Visit Solang Valley for adventure activities such as paragliding, zip-lining, skiing (seasonal) and ATV rides while enjoying stunning Himalayan landscapes.'
      },
      {
        day: 11,
        title: 'Rohtang Pass / Local Exploration',
        description: 'Take a scenic drive to Rohtang Pass (seasonal) or explore nearby villages and mountain viewpoints around Manali. Enjoy shopping and cafés in the evening.'
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Enjoy a relaxed breakfast in Manali before transferring to the airport or bus terminal for your onward journey.'
      }
    ]
  }
];
