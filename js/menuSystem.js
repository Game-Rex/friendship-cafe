import FoodSystem from './foodSystem.js';

const overlay = document.getElementById('menuOverlay');
const list = document.getElementById('menuList');
const placeOrderBtn = document.getElementById('placeOrderBtn');
let placeOrderCallback = null;
const selectedIds = new Set();

function render() {
  list.innerHTML = '';
  selectedIds.clear();
  FoodSystem.getAllFoods().forEach((food) => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.innerHTML = `<span class="menu-item-icon">${food.icon}</span><span class="menu-item-name">${food.name}</span>`;
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
      if (selectedIds.has(food.id)) {
        selectedIds.delete(food.id);
      } else {
        selectedIds.add(food.id);
      }
    });
    list.appendChild(item);
  });
}

placeOrderBtn.addEventListener('click', () => {
  if (selectedIds.size === 0) return;
  const foodIds = Array.from(selectedIds);
  if (placeOrderCallback) placeOrderCallback(foodIds);
});

export default {
  open() {
    render();
    overlay.classList.remove('hidden');
  },
  close() {
    overlay.classList.add('hidden');
  },
  onPlaceOrder(callback) {
    placeOrderCallback = callback;
  },
};