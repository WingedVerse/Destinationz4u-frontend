export class Vietnam {
    id = 'vietnam';
    title = 'Vietnam';
    herobg = 'assets/destinations/Vietnam.jpeg';
    location = 'Vietnam';

    perfectFor = ['Adventure', 'Nature Lovers', 'Couples', 'Friends / Group Trips', 'Culture'];

    duration = '6-8';
    placesCount = '12'; // ✅ only top places
    rating = '4.7';

    transport = ['Flight', 'Train', 'Bus', 'Car', 'Boat'];

    aboutDescription = 'Vietnam is a beautiful Southeast Asian destination known for its stunning landscapes, rich history, vibrant cities, and scenic coastlines. From the limestone karsts of Ha Long Bay to the cultural streets of Hoi An and the bustling energy of Ho Chi Minh City, Vietnam offers a perfect mix of nature, adventure, and cultural experiences.';

    mapUrl = 'https://www.google.com/maps?q=vietnam&output=embed';

    places = [
        { img: 'assets/destinations/Vietnam/Hanoi.jpeg', name: 'Hanoi', desc: 'Capital city known for old quarter, lakes, and culture.' },

        { img: 'assets/destinations/Vietnam/Ha-Long-Bay.jpeg', name: 'Ha Long Bay', desc: 'UNESCO site famous for limestone islands and cruises.' },

        { img: 'assets/destinations/Vietnam/Ho-Chi-Minh-City.jpeg', name: 'Ho Chi Minh City', desc: 'Vibrant city with history, nightlife, and markets.' },

        { img: 'assets/destinations/Vietnam/Hoi-An.jpeg', name: 'Hoi An', desc: 'Charming ancient town with lantern-lit streets.' },

        { img: 'assets/destinations/Vietnam/Da-Nang.jpeg', name: 'Da Nang', desc: 'Coastal city known for beaches and modern attractions.' },

        { img: 'assets/destinations/Vietnam/Golden-Bridge.jpeg', name: 'Golden Bridge (Ba Na Hills)', desc: 'Famous bridge held by giant stone hands.' },

        { img: 'assets/destinations/Vietnam/Hue.jpeg', name: 'Hue', desc: 'Historic city known for imperial citadel and heritage.' },

        { img: 'assets/destinations/Vietnam/Phong-Nha-Ke-Bang-National-Park.jpeg', name: 'Phong Nha-Ke Bang National Park', desc: 'Famous for caves and adventure activities.' },

        { img: 'assets/destinations/Vietnam/Sapa.jpeg', name: 'Sapa', desc: 'Mountain region with rice terraces and trekking.' },

        { img: 'assets/destinations/Vietnam/Mekong-Delta.jpeg', name: 'Mekong Delta', desc: 'River region known for floating markets and villages.' },

        { img: 'assets/destinations/Vietnam/Nha-Trang.jpeg', name: 'Nha Trang', desc: 'Beach destination with resorts and nightlife.' },

        { img: 'assets/destinations/Vietnam/Phu-Quoc-Island.jpeg', name: 'Phu Quoc Island', desc: 'Tropical island with beaches and clear waters.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/River-Cruises.jpeg', name: 'Cruise in Ha Long Bay' },
        { img: 'assets/destinations/Activities/Trekking.jpeg', name: 'Trekking in Sapa' },
        { img: 'assets/destinations/Activities/cave-exploration.jpeg', name: 'Cave Exploration' },
        { img: 'assets/destinations/Activities/Boat-Tours.jpeg', name: 'Boat Tours' },
        { img: 'assets/destinations/Activities/City-Tour.jpeg', name: 'City Tours' },
        { img: 'assets/destinations/Activities/Street-Food.jpeg', name: 'Street Food Experience' },
        { img: 'assets/destinations/Activities/Shopping-goa.jpeg', name: 'Market Shopping' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' },
        { img: 'assets/destinations/Activities/cycling.jpeg', name: 'Cycling Tours' }
    ];

    faq = [
        {
            question: 'What is Vietnam famous for?',
            answer: 'Vietnam is famous for Ha Long Bay, scenic landscapes, rich culture, street food, and historical sites.'
        },
        {
            question: 'What is the best time to visit Vietnam?',
            answer: 'October to April is generally the best time with pleasant weather across most regions.'
        },
        {
            question: 'How can I reach Vietnam?',
            answer: 'You can reach via international flights to Hanoi or Ho Chi Minh City.'
        },
        {
            question: 'Is Vietnam safe for tourists?',
            answer: 'Yes, Vietnam is generally safe for tourists including solo travelers.'
        },
        {
            question: 'Do I need a visa for Vietnam?',
            answer: 'Many travelers require an e-visa before arrival depending on nationality.'
        },
        {
            question: 'Is Vietnam good for honeymoon?',
            answer: 'Yes, destinations like Ha Long Bay and Phu Quoc are perfect for couples.'
        },
        {
            question: 'Is Vietnam expensive?',
            answer: 'Vietnam is very budget-friendly with affordable food, transport, and accommodation.'
        }
    ];
}