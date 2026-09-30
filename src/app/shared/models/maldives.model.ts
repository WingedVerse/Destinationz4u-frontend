export class Maldives {
    id = 'maldives';
    title = 'Maldives';
    herobg = 'assets/destinations/Maldives.jpeg';
    location = 'Maldives';

    perfectFor = ['Honeymoon', 'Luxury Travel', 'Couples', 'Beach Lovers', 'Relaxation'];

    duration = '4-6';
    placesCount = '9'; // ✅ naturally fewer (premium destination)
    rating = '4.9';

    transport = ['Flight', 'Seaplane', 'Boat'];

    aboutDescription = 'Maldives is a world-famous tropical destination known for its luxury overwater villas, crystal-clear lagoons, white-sand beaches, and vibrant marine life. It offers a peaceful and exclusive experience, making it one of the best destinations for honeymooners and luxury travelers.';

    mapUrl = 'https://www.google.com/maps?q=maldives&output=embed';

    places = [
        { img: 'assets/destinations/Maldives/Male.jpeg', name: 'Male', desc: 'Capital city with local markets, mosques, and culture.' },

        { img: 'assets/destinations/Maldives/Maafushi-Island.jpeg', name: 'Maafushi Island', desc: 'Popular local island with budget stays and activities.' },

        { img: 'assets/destinations/Maldives/Hulhumale-Island.jpeg', name: 'Hulhumale Island', desc: 'Modern island near airport with beaches and resorts.' },

        { img: 'assets/destinations/Maldives/Banana-Reef.jpeg', name: 'Banana Reef', desc: 'Famous diving spot with rich coral and marine life.' },

        { img: 'assets/destinations/Maldives/Vaadhoo-Island.jpeg', name: 'Vaadhoo Island (Bioluminescent Beach)', desc: 'Known for glowing “Sea of Stars” at night.' },

        { img: 'assets/destinations/Maldives/Alimatha-Island.jpeg', name: 'Alimatha Island', desc: 'Popular for water sports and diving experiences.' },

        { img: 'assets/destinations/Maldives/Baros-Island.jpeg', name: 'Baros Island', desc: 'Luxury resort island known for overwater villas.' },

        { img: 'assets/destinations/Maldives/Sun-Island.jpeg', name: 'Sun Island (Nalaguraidhoo)', desc: 'Famous for beaches, resorts, and water activities.' },

        { img: 'assets/destinations/Maldives/Veligandu-Island.jpg', name: 'Veligandu Island', desc: 'Romantic island known for crystal-clear lagoons.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/Scuba-Diving.jpeg', name: 'Scuba Diving' },
        { img: 'assets/destinations/Activities/Snorkeling.jpeg', name: 'Snorkeling' },
        { img: 'assets/destinations/Activities/Island-Hopping.jpeg', name: 'Island Hopping' },
        { img: 'assets/destinations/Activities/Kayaking.jpeg', name: 'Kayaking' },
        { img: 'assets/destinations/Activities/Parasailing.jpeg', name: 'Parasailing' },
        { img: 'assets/destinations/Activities/Jet-Ski.jpeg', name: 'Jet Ski' },
        { img: 'assets/destinations/Activities/dolphin.jpeg', name: 'Dolphin Watching' },
        { img: 'assets/destinations/Activities/Spa.jpeg', name: 'Spa & Wellness' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' }
    ];

    faq = [
        {
            question: 'What is Maldives famous for?',
            answer: 'Maldives is famous for its luxury resorts, overwater villas, clear lagoons, and marine life.'
        },
        {
            question: 'What is the best time to visit Maldives?',
            answer: 'November to April is the best time with dry weather and calm seas.'
        },
        {
            question: 'How can I reach Maldives?',
            answer: 'You can reach via international flights to Male, followed by seaplane or speedboat transfers.'
        },
        {
            question: 'Is Maldives good for honeymoon?',
            answer: 'Yes, it is one of the best honeymoon destinations in the world.'
        },
        {
            question: 'Is Maldives expensive?',
            answer: 'Yes, it is a luxury destination, but budget stays are available on local islands like Maafushi.'
        },
        {
            question: 'Do I need a visa for Maldives?',
            answer: 'Most nationalities get visa on arrival for short stays.'
        },
        {
            question: 'Is Maldives safe for tourists?',
            answer: 'Yes, Maldives is very safe and tourist-friendly.'
        }
    ];
}