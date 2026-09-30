export class Ladakh {
    id = 'ladakh';
    title = 'Ladakh';
    herobg = 'assets/destinations/Ladakh.avif';
    location = 'India';

    perfectFor = ['Adventure', 'Road Trips', 'Solo Travel', 'Friends / Group Trips', 'Nature Lovers'];

    duration = '6-8';
    placesCount = '15'; // ✅ updated
    rating = '4.8';

    transport = ['Flight', 'Car', 'Bike'];

    aboutDescription = 'Ladakh, located in the northernmost region of India, is known for its breathtaking landscapes, high-altitude mountain passes, crystal-clear lakes, and Buddhist monasteries. It offers a unique blend of adventure and serenity, making it a dream destination for bikers, trekkers, and nature lovers.';

    mapUrl = 'https://www.google.com/maps?q=ladakh&output=embed';

    places = [
        { img: 'assets/destinations/Ladakh/leh.avif', name: 'Leh', desc: 'Main town and gateway to Ladakh with markets, cafes, and monasteries.' },

        { img: 'assets/destinations/Ladakh/Pong-Lake.jpeg', name: 'Pangong Lake', desc: 'Famous high-altitude lake known for its changing blue shades.' },

        { img: 'assets/destinations/Ladakh/Nubra-Valley.jpeg', name: 'Nubra Valley', desc: 'Cold desert valley known for sand dunes and double-humped camels.' },

        { img: 'assets/destinations/Ladakh/Khardung-La-Pass.jpeg', name: 'Khardung La Pass', desc: 'One of the highest motorable roads in the world.' },

        { img: 'assets/destinations/Ladakh/Tso-Moriri-Lake.jpeg', name: 'Tso Moriri Lake', desc: 'Peaceful and less crowded lake surrounded by mountains.' },

        { img: 'assets/destinations/Ladakh/Magnetic-hill-mountain.jpeg', name: 'Magnetic Hill', desc: 'Unique spot where vehicles appear to move uphill naturally.' },

        { img: 'assets/destinations/Ladakh/Shanti-Stupa.jpeg', name: 'Shanti Stupa', desc: 'White-domed Buddhist stupa offering panoramic views of Leh.' },

        { img: 'assets/destinations/Ladakh/Hemis-Monastery.jpeg', name: 'Hemis Monastery', desc: 'Largest monastery in Ladakh known for its annual festival.' },

        { img: 'assets/destinations/Ladakh/Thiksey-Monastery.jpeg', name: 'Thiksey Monastery', desc: 'Beautiful monastery resembling the Potala Palace of Tibet.' },

        { img: 'assets/destinations/Ladakh/Lamayuru-Monastery.jpeg', name: 'Lamayuru Monastery', desc: 'Ancient monastery set amidst moon-like landscapes.' },

        { img: 'assets/destinations/Ladakh/Zanskar-Valley.jpeg', name: 'Zanskar Valley', desc: 'Remote valley famous for trekking and the Chadar Trek.' },

        { img: 'assets/destinations/Ladakh/Hunder-sand-dunes.jpeg', name: 'Hunder Sand Dunes', desc: 'Unique desert landscape in Nubra Valley with camel rides.' },

        { img: 'assets/destinations/Ladakh/Diskit-Monastery.jpeg', name: 'Diskit Monastery', desc: 'Famous for its giant Buddha statue overlooking Nubra Valley.' },

        { img: 'assets/destinations/Ladakh/Sangam-Point.jpeg', name: 'Sangam Point', desc: 'Confluence of the Indus and Zanskar rivers.' },

        { img: 'assets/destinations/Ladakh/Tso-Kar-Lake.jpeg', name: 'Tso Kar Lake', desc: 'Salt lake known for birdlife and scenic beauty.' }
    ];

    activities = [
        { img: 'assets/destinations/Activities/bike-trip.jpeg', name: 'Bike Trip' },
        { img: 'assets/destinations/Activities/road-trip.jpeg', name: 'Road Trip' },
        { img: 'assets/destinations/Activities/Trekking.jpeg', name: 'Trekking' },
        { img: 'assets/destinations/Activities/camping.jpeg', name: 'Camping' },
        { img: 'assets/destinations/Activities/river-rafting.jpeg', name: 'River Rafting' },
        { img: 'assets/destinations/Activities/camel-ride.jpeg', name: 'Camel Ride (Nubra)' },
        { img: 'assets/destinations/Activities/photography.jpeg', name: 'Photography' },
        { img: 'assets/destinations/Activities/monastery.jpeg', name: 'Monastery Visits' },
        { img: 'assets/destinations/Activities/stargazing.jpeg', name: 'Stargazing' },
        { img: 'assets/destinations/Activities/cycling.jpeg', name: 'Mountain Cycling' }
    ];

    faq = [
        {
            question: 'What is Ladakh famous for?',
            answer: 'Ladakh is famous for its high-altitude landscapes, lakes like Pangong, monasteries, and adventurous road trips.'
        },
        {
            question: 'What is the best time to visit Ladakh?',
            answer: 'May to September is the best time when roads are open and weather is suitable for travel.'
        },
        {
            question: 'How can I reach Ladakh?',
            answer: 'You can reach Leh by flight or via road trips from Manali or Srinagar.'
        },
        {
            question: 'Is Ladakh safe for tourists?',
            answer: 'Yes, it is safe, but travelers should acclimatize properly due to high altitude.'
        },
        {
            question: 'Do I need a permit to visit Ladakh?',
            answer: 'Yes, Inner Line Permits are required for certain areas like Nubra Valley and Pangong Lake.'
        },
        {
            question: 'Is Ladakh suitable for family trips?',
            answer: 'Yes, but proper planning and acclimatization are important, especially for kids and elders.'
        },
        {
            question: 'Is Ladakh expensive?',
            answer: 'It can be moderately expensive due to transport and remote location, especially during peak season.'
        }
    ];
}