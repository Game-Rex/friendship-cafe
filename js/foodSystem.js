const foods = [
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'fries', name: 'Fries', icon: '🍟' },
  { id: 'cake', name: 'Cake', icon: '🍰' },
  { id: 'donut', name: 'Donut', icon: '🍩' },
  { id: 'icecream', name: 'Ice Cream', icon: '🍦' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'bubbletea', name: 'Bubble Tea', icon: '🧋' },
  { id: 'cookies', name: 'Cookies', icon: '🍪' },
  { id: 'chocolate', name: 'Chocolate', icon: '🍫' },
  { id: 'colddrink', name: 'Cold Drink', icon: '🥤' },
  { id: 'ramen', name: 'Ramen', icon: '🍜' },
];

export default {
  getAllFoods() {
    return foods;
  },
  getFoodData(foodId) {
    return foods.find((f) => f.id === foodId) || null;
  },
};