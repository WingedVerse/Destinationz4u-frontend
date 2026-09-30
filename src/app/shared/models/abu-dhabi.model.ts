export class AbuDhabi {
    id = 'abudhabi';
    title = 'Abu Dhabi';
    herobg = 'assets/destinations/Abu-Dhabi.jpeg';
    location = 'UAE';

    perfectFor = ['Luxury Travel', 'Family Trip', 'Culture', 'Honeymoon', 'City Experience'];

    duration = '3-5';
    placesCount = '11'; // ✅ natural top places
    rating = '4.7';

    transport = ['Flight', 'Bus', 'Car'];

    aboutDescription = 'Abu Dhabi, the capital of the UAE, is known for its grand architecture, cultural landmarks, luxury experiences, and modern attractions. From the majestic Sheikh Zayed Grand Mosque to thrilling theme parks and desert landscapes, it offers a perfect blend of tradition and modernity.';

    mapUrl = 'https://www.google.com/maps?q=abu+dhabi&output=embed';

    places = [
        { img: 'assets/destinations/Abu-Dhabi/Sheikh-Zayed-Grand-Mosque.jpeg', name: 'Sheikh Zayed Grand Mosque', desc: 'One of the world’s largest and most beautiful mosques.' },

        { img: 'assets/destinations/Abu-Dhabi/Louvre-Abu-Dhabi.jpeg', name: 'Louvre Abu Dhabi', desc: 'Famous museum showcasing global art and architecture.' },

        { img: 'assets/destinations/Abu-Dhabi/Ferrari-World.jpeg', name: 'Ferrari World', desc: 'Theme park known for the world’s fastest roller coaster.' },

        { img: 'assets/destinations/Abu-Dhabi/Yas-Island.jpeg', name: 'Yas Island', desc: 'Entertainment hub with theme parks and attractions.' },

        { img: 'assets/destinations/Abu-Dhabi/Warner-Bros.jpeg', name: 'Warner Bros. World Abu Dhabi', desc: 'Indoor theme park with movie-themed rides.' },

        { img: 'assets/destinations/Abu-Dhabi/Yas-Waterworld.jpeg', name: 'Yas Waterworld', desc: 'Popular water park with thrilling slides and rides.' },

        { img: 'assets/destinations/Abu-Dhabi/Corniche-Beach.jpeg', name: 'Corniche Beach', desc: 'Beautiful beachfront with walking and cycling paths.' },

        { img: 'assets/destinations/Abu-Dhabi/Emirates-Palace.jpeg', name: 'Emirates Palace', desc: 'Luxury hotel known for grand architecture.' },

        { img: 'assets/destinations/Abu-Dhabi/Qasr-Al-Watan.jpeg', name: 'Qasr Al Watan', desc: 'Presidential palace showcasing Arabian culture and design.' },

        { img: 'assets/destinations/Abu-Dhabi/Saadiyat-Island.jpeg', name: 'Saadiyat Island', desc: 'Cultural and beach destination with luxury resorts.' },

        { img: 'assets/destinations/Abu-Dhabi/Desert-Safari.jpeg', name: 'Desert Safari (Abu Dhabi Desert)', desc: 'Experience dune bashing, camel rides, and desert camps.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/Desert-Safari.jpeg', name: 'Desert Safari' },
        { img: 'assets/destinations/Activities/Dune-Bashing.jpeg', name: 'Dune Bashing' },
        { img: 'assets/destinations/Activities/camel-ride.jpeg', name: 'Camel Ride' },
        { img: 'assets/destinations/Activities/Theme-Parks.jpeg', name: 'Theme Parks' },
        { img: 'assets/destinations/Activities/Water-Parks.jpeg', name: 'Water Parks' },
        { img: 'assets/destinations/Activities/City-Tour.jpeg', name: 'City Tours' },
        { img: 'assets/destinations/Activities/Shopping-goa.jpeg', name: 'Shopping' },
        { img: 'assets/destinations/Activities/River-Cruises.jpeg', name: 'Dhow Cruise' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' },
        { img: 'assets/destinations/Activities/Spa.jpeg', name: 'Spa & Wellness' }
    ];

    faq = [
        {
            question: 'What is Abu Dhabi famous for?',
            answer: 'Abu Dhabi is famous for Sheikh Zayed Grand Mosque, luxury experiences, and cultural landmarks.'
        },
        {
            question: 'What is the best time to visit Abu Dhabi?',
            answer: 'November to March is the best time with pleasant weather.'
        },
        {
            question: 'How can I reach Abu Dhabi?',
            answer: 'You can reach via international flights to Abu Dhabi International Airport.'
        },
        {
            question: 'Is Abu Dhabi safe for tourists?',
            answer: 'Yes, Abu Dhabi is very safe and tourist-friendly.'
        },
        {
            question: 'Do I need a visa for Abu Dhabi?',
            answer: 'Visa rules are similar to Dubai; Indian citizens may get visa on arrival under certain conditions.'
        },
        {
            question: 'Is Abu Dhabi good for family trips?',
            answer: 'Yes, it is great for families with theme parks and cultural attractions.'
        },
        {
            question: 'Is Abu Dhabi expensive?',
            answer: 'It is a luxury destination, but mid-range options are also available.'
        }
    ];
}