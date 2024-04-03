export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burgers',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 3,
        name: 'Sushi',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 4,
        name: 'Desserts',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 5,
        name: 'Drinks',
        image: require('../assets/images/pizzaIcon.png'),
    }
];

export const restaurantData = {
    id: 1,
    title: 'Fast Food',
    description: 'Pizza, Fast Food',
    restaurant: [
        {
            id: 1,
            name: 'Pizza Hut',
            image: require('../assets/images/pizza.webp'),
            description: 'Pizza Fast Food',
            lng: -85.853048,
            lat: 38.254447,
            address: '38 Queen St, Auckland CBD',
            rating: 4.5,
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pepperoni Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 10.99,
                    rating: 4.5,
                    category: 'Pizza'
                },
                {
                    id: 2,
                    name: 'Cheese Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 9.99,
                    rating: 4.0,
                    category: 'Pizza'
                },
                {
                    id: 3,
                    name: 'Hawaiian Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 12.99,
                    rating: 4.5,
                    category: 'Pizza'
                }
            ]
        },
        {
            id: 2,
            name: 'Dominos',
            image: require('../assets/images/pizza.webp'),
            description: 'Pizza, Fast Food',
            lng: -85.853048,
            lat: 38.254447,
            address: '50 Queen St, Auckland CBD',
            rating: 4.5,
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pepperoni Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 10.99,
                    rating: 4.5,
                    category: 'Pizza'
                },
                {
                    id: 2,
                    name: 'Cheese Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 9.99,
                    rating: 4.0,
                    category: 'Pizza'
                },
                {
                    id: 3,
                    name: 'Hawaiian Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 12.99,
                    rating: 4.5,
                    category: 'Pizza'
                }
            ]
        },
        {
            id: 3,
            name: 'Sals',
            image: require('../assets/images/pizza.webp'),
            description: 'Pizza, Fast Food',
            lng: -85.853048,
            lat: 38.254447,
            address: '60 Queen St, Auckland CBD',
            rating: 4.5,
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Pepperoni Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 10.99,
                    rating: 4.5,
                    category: 'Pizza'
                },
                {
                    id: 2,
                    name: 'Cheese Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 9.99,
                    rating: 4.0,
                    category: 'Pizza'
                },
                {
                    id: 3,
                    name: 'Hawaiian Pizza',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 12.99,
                    rating: 4.5,
                    category: 'Pizza'
                }
            ]
        },
        {
            id: 4,
            name: 'Burger King',
            image: require('../assets/images/pizzaDish.webp'),
            description: 'American Fast Food',
            lng: -85.853048,
            lat: 38.254447,
            address: '100 Queen St, Auckland CBD',
            rating: 4.2,
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Whopper',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 10.99,
                    rating: 4.5,
                    category: 'Burger'
                },
                {
                    id: 2,
                    name: 'Cheese Burger',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 9.99,
                    rating: 4.0,
                    category: 'Burger'
                },
                {
                    id: 3,
                    name: 'Chicken Burger',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 12.99,
                    rating: 4.5,
                    category: 'Burger'
                }
            ]
          },
          {
            id: 5,
            name: 'KFC',
            image: require('../assets/images/pizzaDish.webp'),
            description: 'Finger Lickin’ Good',
            lng: -85.853048,
            lat: 38.254447,
            address: '200 Queen St, Auckland CBD',
            rating: 4.3,
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'Original Recipe Chicken',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 10.99,
                    rating: 4.5,
                    category: 'Chicken'
                },
                {
                    id: 2,
                    name: 'Zinger Burger',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 9.99,
                    rating: 4.0,
                    category: 'Burger'
                },
                {
                    id: 3,
                    name: 'Popcorn Chicken',
                    image: require('../assets/images/pizzaDish.webp'),
                    price: 12.99,
                    rating: 4.5,
                    category: 'Chicken'
                }
            ]
          },
            {
                id: 6,
                name: 'McDonalds',
                image: require('../assets/images/pizzaDish.webp'),
                description: 'I’m Lovin’ It',
                lng: -85.853048,
                lat: 38.254447,
                address: '300 Queen St, Auckland CBD',
                rating: 4.4,
                category: 'Fast Food',
                dishes: [
                    {
                        id: 1,
                        name: 'Big Mac',
                        image: require('../assets/images/pizzaDish.webp'),
                        price: 10.99,
                        rating: 4.5,
                        category: 'Burger'
                    },
                    {
                        id: 2,
                        name: 'Cheese Burger',
                        image: require('../assets/images/pizzaDish.webp'),
                        price: 9.99,
                        rating: 4.0,
                        category: 'Burger'
                    },
                    {
                        id: 3,
                        name: 'McChicken',
                        image: require('../assets/images/pizzaDish.webp'),
                        price: 12.99,
                        rating: 4.5,
                        category: 'Burger'
                    }
                ]
            },
            {
                id: 7,
                name: 'Hell Pizza',
                image: require('../assets/images/pizzaDish.webp'),
                description: 'Hellishly Good Pizza',
                lng: -85.853048,
                lat: 38.254447,
                address: '400 Queen St, Auckland CBD',
                rating: 4.5,
                category: 'Fast Food',
                dishes: [
                    {
                        id: 1,
                        name: 'Damned',
                        image: require('../assets/images/pizzaDish.webp'),
                        price: 10.99,
                        rating: 4.5,
                        category: 'Pizza'
                    },
                    {
                        id: 2,
                        name: 'Inferno',
                        image: require('../assets/images/pizzaDish.webp'),
                        price: 9.99,
                        rating: 4.0,
                        category: 'Pizza'
                    },
                    {
                        id: 3,
                        name: 'Purgatory',
                        image: require('../assets/images/pizzaDish.webp'),
                        price: 12.99,
                        rating: 4.5,
                        category: 'Pizza'
                    }


        ]
    }
]
    };


