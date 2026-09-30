export class Philippines {
    id = 'philippines';
    title = 'Philippines';
    herobg = 'assets/destinations/Philippines.jpeg';
    location = 'Philippines';

    perfectFor = ['Honeymoon', 'Beach Lovers', 'Adventure', 'Friends / Group Trips', 'Nature Lovers'];

    duration = '6-8';
    placesCount = '12'; // ✅ only top places
    rating = '4.7';

    transport = ['Flight', 'Ferry', 'Boat', 'Car', 'Scooter'];

    aboutDescription = 'The Philippines is a tropical paradise made up of over 7,000 islands, known for its white-sand beaches, crystal-clear waters, and vibrant marine life. From the lagoons of Palawan to the chocolate hills of Bohol and the stunning beaches of Boracay, it offers a perfect mix of relaxation, adventure, and island experiences.';

    mapUrl = 'https://www.google.com/maps?q=philippines&output=embed';

    places = [
        { img: 'assets/destinations/Philippines/Manila.jpeg', name: 'Manila', desc: 'Capital city known for history, culture, and nightlife.' },

        { img: 'assets/destinations/Philippines/Palawan.jpeg', name: 'Palawan (El Nido)', desc: 'Famous for lagoons, limestone cliffs, and island hopping.' },

        { img: 'assets/destinations/Philippines/Coron.jpeg', name: 'Coron', desc: 'Known for shipwreck diving and crystal-clear lakes.' },

        { img: 'assets/destinations/Philippines/Boracay.jpeg', name: 'Boracay', desc: 'World-famous for white sand beaches and nightlife.' },

        { img: 'assets/destinations/Philippines/Cebu.jpeg', name: 'Cebu', desc: 'Popular for waterfalls, beaches, and whale shark tours.' },

        { img: 'assets/destinations/Philippines/Bohol.jpeg', name: 'Bohol', desc: 'Famous for Chocolate Hills and tarsier sanctuary.' },

        { img: 'assets/destinations/Philippines/Siargao.jpeg', name: 'Siargao', desc: 'Surfing capital known for laid-back island vibes.' },

        { img: 'assets/destinations/Philippines/Chocolate-Hills.jpeg', name: 'Chocolate Hills', desc: 'Unique geological formation with hundreds of hills.' },

        { img: 'assets/destinations/Philippines/Puerto-Princesa.jpeg', name: 'Puerto Princesa Underground River', desc: 'UNESCO site with river cave system.' },

        { img: 'assets/destinations/Philippines/Moalboal.jpeg', name: 'Moalboal', desc: 'Famous for sardine run and snorkeling.' },

        { img: 'assets/destinations/Philippines/Davao.jpeg', name: 'Davao', desc: 'City known for Mount Apo and nature attractions.' },

        { img: 'assets/destinations/Philippines/Taal-Volcano.jpeg', name: 'Taal Volcano', desc: 'One of the world’s smallest active volcanoes.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/Island-Hopping.jpeg', name: 'Island Hopping' },
        { img: 'assets/destinations/Activities/Scuba-Diving.jpeg', name: 'Scuba Diving' },
        { img: 'assets/destinations/Activities/Snorkeling.jpeg', name: 'Snorkeling' },
        { img: 'assets/destinations/Activities/Surfing.jpeg', name: 'Surfing' },
        { img: 'assets/destinations/Activities/Boat-Tours.jpeg', name: 'Boat Tours' },
        { img: 'assets/destinations/Activities/Trekking.jpeg', name: 'Trekking' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' },
        { img: 'assets/destinations/Activities/Street-Food.jpeg', name: 'Local Food Experience' }
    ];

    faq = [
        {
            question: 'What is the Philippines famous for?',
            answer: 'The Philippines is famous for its islands, beaches, diving spots, and natural beauty.'
        },
        {
            question: 'What is the best time to visit the Philippines?',
            answer: 'November to April is the best time with dry weather and clear skies.'
        },
        {
            question: 'How can I reach the Philippines?',
            answer: 'You can reach via international flights to Manila or Cebu.'
        },
        {
            question: 'Is the Philippines safe for tourists?',
            answer: 'Yes, most tourist areas are safe, but travelers should follow standard precautions.'
        },
        {
            question: 'Do I need a visa for the Philippines?',
            answer: 'Many nationalities get visa-free entry for short stays depending on policies.'
        },
        {
            question: 'Is the Philippines good for honeymoon?',
            answer: 'Yes, it is one of the best destinations for honeymoon with stunning beaches and islands.'
        },
        {
            question: 'Is the Philippines expensive?',
            answer: 'It is relatively affordable, though island travel can increase costs.'
        }
    ];
}