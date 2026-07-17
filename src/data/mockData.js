export const restaurants = [
  {
    id: '1',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '25-35 min',
    image: 'https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Pizza+Palace',
    distance: '1.2 km',
    priceRange: '$$',
    menu: [
      { id: 'm1', name: 'Margherita Pizza', price: 12.99, description: 'Classic tomato sauce, mozzarella, basil', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Pizza' },
      { id: 'm2', name: 'Pepperoni Pizza', price: 14.99, description: 'Tomato sauce, mozzarella, pepperoni', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Pepperoni' },
      { id: 'm3', name: 'Garlic Bread', price: 4.99, description: 'Fresh baked garlic bread with butter', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Garlic+Bread' },
    ]
  },
  {
    id: '2',
    name: 'Burger House',
    cuisine: 'American',
    rating: 4.3,
    deliveryTime: '20-30 min',
    image: 'https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Burger+House',
    distance: '0.8 km',
    priceRange: '$',
    menu: [
      { id: 'm4', name: 'Classic Burger', price: 9.99, description: 'Beef patty, lettuce, tomato, cheese', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Burger' },
      { id: 'm5', name: 'Double Cheese Burger', price: 12.99, description: 'Double beef patty, double cheese', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Double+Burger' },
      { id: 'm6', name: 'French Fries', price: 3.99, description: 'Crispy golden fries', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Fries' },
    ]
  },
  {
    id: '3',
    name: 'Sushi Express',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: '30-40 min',
    image: 'https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Sushi+Express',
    distance: '2.5 km',
    priceRange: '$$$',
    menu: [
      { id: 'm7', name: 'California Roll', price: 15.99, description: 'Crab, avocado, cucumber', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=California' },
      { id: 'm8', name: 'Salmon Nigiri', price: 18.99, description: 'Fresh salmon over rice', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Salmon' },
    ]
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.1,
    deliveryTime: '15-25 min',
    image: 'https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Taco+Fiesta',
    distance: '1.8 km',
    priceRange: '$',
    menu: [
      { id: 'm9', name: 'Chicken Tacos', price: 8.99, description: '3 tacos with chicken, salsa, guacamole', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Tacos' },
      { id: 'm10', name: 'Quesadilla', price: 7.99, description: 'Cheese and chicken quesadilla', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Quesadilla' },
    ]
  },
  {
    id: '5',
    name: 'Healthy Bowl',
    cuisine: 'Healthy',
    rating: 4.4,
    deliveryTime: '20-30 min',
    image: 'https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Healthy+Bowl',
    distance: '3.0 km',
    priceRange: '$$',
    menu: [
      { id: 'm11', name: 'Buddha Bowl', price: 13.99, description: 'Quinoa, avocado, kale, hummus', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Buddha' },
      { id: 'm12', name: 'Smoothie Bowl', price: 9.99, description: 'Acai, berries, granola', image: 'https://via.placeholder.com/100x100/FF6B35/FFFFFF?text=Smoothie' },
    ]
  }
];

export const categories = [
  { id: 'c1', name: 'Pizza', icon: '🍕' },
  { id: 'c2', name: 'Burgers', icon: '🍔' },
  { id: 'c3', name: 'Sushi', icon: '🍣' },
  { id: 'c4', name: 'Tacos', icon: '🌮' },
  { id: 'c5', name: 'Healthy', icon: '🥗' },
  { id: 'c6', name: 'Desserts', icon: '🍰' },
];
