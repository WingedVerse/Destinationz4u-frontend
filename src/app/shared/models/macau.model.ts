export class Macau {
    id = 'macau';
    title = 'Macau';
    herobg = 'assets/destinations/Macau.jpeg';
    location = 'Macau';

    perfectFor = ['Luxury Travel', 'Nightlife', 'Culture', 'Family Trip', 'City Experience'];

    duration = '2-4';
    placesCount = '10'; // ✅ natural top places
    rating = '4.6';

    transport = ['Flight', 'Ferry', 'Bus', 'Car'];

    aboutDescription = 'Macau is a vibrant destination known for its unique blend of Portuguese heritage and modern luxury. Famous for its casinos, historic sites, and entertainment, it offers a mix of culture, nightlife, and world-class attractions, making it one of Asia’s most exciting city destinations.';

    mapUrl = 'https://www.google.com/maps?q=macau&output=embed';

    places = [
        { img: 'assets/destinations/Macau/Ruins-of-St.Pauls.jpeg', name: 'Ruins of St. Paul’s', desc: 'Iconic historic church façade and UNESCO heritage site.' },

        { img: 'assets/destinations/Macau/Senado-Square.jpeg', name: 'Senado Square', desc: 'Famous square with Portuguese-style architecture and shops.' },

        { img: 'assets/destinations/Macau/The-Venetian-Macao.jpeg', name: 'The Venetian Macao', desc: 'Luxury resort with canals, shopping, and casinos.' },

        { img: 'assets/destinations/Macau/Macau-Tower.jpeg', name: 'Macau Tower', desc: 'Observation tower known for views and adventure activities.' },

        { img: 'assets/destinations/Macau/A-Ma-Temple.jpeg', name: 'A-Ma Temple', desc: 'One of the oldest temples dedicated to the sea goddess.' },

        { img: 'assets/destinations/Macau/Fishermans-Wharf.jpeg', name: 'Fisherman’s Wharf', desc: 'Entertainment complex with themed attractions.' },

        { img: 'assets/destinations/Macau/Coloane-Village.jpeg', name: 'Coloane Village', desc: 'Peaceful area with beaches and local charm.' },

        { img: 'assets/destinations/Macau/Taipa-Village.jpeg', name: 'Taipa Village', desc: 'Cultural area with heritage houses and food streets.' },

        { img: 'assets/destinations/Macau/City-of-Dreams.jpeg', name: 'City of Dreams', desc: 'Modern entertainment complex with shows and nightlife.' },

        { img: 'assets/destinations/Macau/Grand-Lisboa-Casino.jpeg', name: 'Grand Lisboa Casino', desc: 'Iconic casino and landmark building in Macau skyline.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/casino.jpeg', name: 'Casino Experience' },
        { img: 'assets/destinations/Activities/Shopping-goa.jpeg', name: 'Shopping' },
        { img: 'assets/destinations/Activities/City-Tour.jpeg', name: 'City Tours' },
        { img: 'assets/destinations/Macau/Fishermans-Wharf.jpeg', name: 'Heritage Exploration' },
        { img: 'assets/destinations/Activities/nightlife-goa.jpeg', name: 'Nightlife' },
        { img: 'assets/destinations/Activities/Street-Food.jpeg', name: 'Food Exploration' },
        { img: 'assets/destinations/Activities/Bungee.jpeg', name: 'Skywalk & Bungee (Macau Tower)' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' },
        { img: 'assets/destinations/Activities/Entertainment.jpeg', name: 'Live Shows & Entertainment' }
    ];

    faq = [
        {
            question: 'What is Macau famous for?',
            answer: 'Macau is famous for casinos, Portuguese heritage, and luxury entertainment.'
        },
        {
            question: 'What is the best time to visit Macau?',
            answer: 'October to December is ideal with pleasant weather.'
        },
        {
            question: 'How can I reach Macau?',
            answer: 'You can reach via flights or ferry from Hong Kong.'
        },
        {
            question: 'Is Macau safe for tourists?',
            answer: 'Yes, Macau is very safe and tourist-friendly.'
        },
        {
            question: 'Do I need a visa for Macau?',
            answer: 'Many travelers can enter visa-free for short stays depending on nationality.'
        },
        {
            question: 'Is Macau good for family trips?',
            answer: 'Yes, it offers entertainment, shows, and sightseeing suitable for families.'
        },
        {
            question: 'Is Macau expensive?',
            answer: 'It can be expensive, especially in luxury hotels and casinos.'
        }
    ];
}