import AnimationSystem from './animationSystem.js';
const foods = [
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'fries', name: 'Fries', icon: '🍟' },
  { id: 'cake', name: 'Cake', icon: '🍰' },
  { id: 'donut', name: 'Donut', icon: '🍩' },
  { id: 'icecream', name: 'Ice Cream', icon: '🍦' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'momos', name: 'Momos', icon: '🥟' },
  { id: 'cookies', name: 'Cookies', icon: '🍪' },
  { id: 'chocolate', name: 'Chocolate', icon: '🍫' },
  { id: 'colddrink', name: 'Cold Drink', icon: '🥤' },
  { id: 'ramen', name: 'Ramen', icon: '🍜' },
];

const tableFood = document.getElementById('tableFood');
let eatCallback = null;

export default {
  getAllFoods() {
    return foods;
  },
  getFoodData(foodId) {
    return foods.find((f) => f.id === foodId) || null;
  },
  placeOnTable(foodIds) {
    tableFood.innerHTML = '';
    foodIds.forEach((id, index) => {
      const food = this.getFoodData(id);
      const item = document.createElement('span');
      item.className = 'table-food-item';
      item.textContent = food.icon;
      item.addEventListener('click', () => {
        if (eatCallback) eatCallback(id);
        item.remove();
      });
      tableFood.appendChild(item);
      AnimationSystem.reveal(item, index * 120);
    });
  },
  onEat(callback) {
    eatCallback = callback;
  },
};