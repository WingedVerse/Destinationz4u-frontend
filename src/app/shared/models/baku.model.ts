export class Baku {
    id = 'baku';
    title = 'Baku';
    herobg = 'assets/destinations/Baku.jpeg';
    location = 'Azerbaijan';

    perfectFor = ['City Experience', 'Culture', 'History', 'Luxury Travel', 'Friends / Group Trips'];

    duration = '3-5';
    placesCount = '10'; // ✅ natural top places
    rating = '4.6';

    transport = ['Flight', 'Metro', 'Bus', 'Car'];

    aboutDescription = 'Baku, the capital of Azerbaijan, is a fascinating blend of ancient history and modern architecture. Located on the Caspian Sea, it features UNESCO-listed Old City, futuristic landmarks, cultural sites, and unique natural wonders like mud volcanoes and fire mountains, offering a diverse travel experience.';

    mapUrl = 'https://www.google.com/maps?q=baku&output=embed';

    places = [
        { img: 'assets/destinations/Baku/Icherisheher.jpeg', name: 'Icherisheher (Old City)', desc: 'Historic walled city with narrow streets and heritage sites.' },

        { img: 'assets/destinations/Baku/Flame-Towers.jpeg', name: 'Flame Towers', desc: 'Iconic skyscrapers symbolizing modern Baku skyline.' },

        { img: 'assets/destinations/Baku/Heydar-Aliyev-Center.jpeg', name: 'Heydar Aliyev Center', desc: 'Futuristic architectural landmark and cultural center.' },

        { img: 'assets/destinations/Baku/Baku-Boulevard.jpeg', name: 'Baku Boulevard', desc: 'Seaside promenade along the Caspian Sea.' },

        { img: 'assets/destinations/Baku/Maiden-Tower.jpeg', name: 'Maiden Tower', desc: 'Ancient tower and symbol of Baku.' },

        { img: 'assets/destinations/Baku/Palace-of-the-Shirvanshahs.jpeg', name: 'Palace of the Shirvanshahs', desc: 'Historic palace complex in Old City.' },

        { img: 'assets/destinations/Baku/Ateshgah-Fire-Temple.jpeg', name: 'Ateshgah Fire Temple', desc: 'Historic fire-worship temple with cultural significance.' },

        { img: 'assets/destinations/Baku/Yanar-Dag.jpeg', name: 'Yanar Dag (Burning Mountain)', desc: 'Natural gas fire burning continuously on hillside.' },

        { img: 'assets/destinations/Baku/Gobustan-National-Park.jpeg', name: 'Gobustan National Park', desc: 'Famous for rock carvings and mud volcanoes.' },

        { img: 'assets/destinations/Baku/Nizami-Street.jpeg', name: 'Nizami Street', desc: 'Popular shopping street with cafes and nightlife.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/City-Tour.jpeg', name: 'City Tours' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' },
        { img: 'assets/destinations/Activities/Shopping-goa.jpeg', name: 'Shopping' },
        { img: 'assets/destinations/Activities/nightlife-goa.jpeg', name: 'Nightlife' },
        { img: 'assets/destinations/Activities/Theme-Parks.jpeg', name: 'Funicular Ride' },
        { img: 'assets/destinations/Activities/road-trip.jpeg', name: 'Day Trips (Gobustan, Yanar Dag)' },
        { img: 'assets/destinations/Activities/Walking-Tours.jpeg', name: 'Walking Tours' }
    ];

    faq = [
        {
            question: 'What is Baku famous for?',
            answer: 'Baku is famous for its Old City, modern architecture like Flame Towers, and natural wonders like Yanar Dag.'
        },
        {
            question: 'What is the best time to visit Baku?',
            answer: 'April to June and September to October are the best times with pleasant weather.'
        },
        {
            question: 'How can I reach Baku?',
            answer: 'You can reach via international flights to Heydar Aliyev International Airport.'
        },
        {
            question: 'Is Baku safe for tourists?',
            answer: 'Yes, Baku is generally safe and tourist-friendly.'
        },
        {
            question: 'Do I need a visa for Baku?',
            answer: 'Many travelers can apply for an e-visa online before visiting Azerbaijan.'
        },
        {
            question: 'Is Baku good for family trips?',
            answer: 'Yes, it offers a mix of culture, sightseeing, and modern attractions suitable for families.'
        },
        {
            question: 'Is Baku expensive?',
            answer: 'Baku is moderately priced compared to other international destinations.'
        }
    ];
}