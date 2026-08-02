import FoodSystem from './foodSystem.js';

const overlay = document.getElementById('menuOverlay');
const list = document.getElementById('menuList');
let selectCallback = null;

function render() {
  list.innerHTML = '';
  FoodSystem.getAllFoods().forEach((food) => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.innerHTML = `<span class="menu-item-icon">${food.icon}</span><span class="menu-item-name">${food.name}</span>`;
    item.addEventListener('click', () => {
      if (selectCallback) selectCallback(food.id);
    });
    list.appendChild(item);
  });
}

export default {
  open() {
    render();
    overlay.classList.remove('hidden');
  },
  close() {
    overlay.classList.add('hidden');
  },
  onSelect(callback) {
    selectCallback = callback;
  },
};