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

const servingTray = document.getElementById('servingTray');
let eatCallback = null;

export default {
  getAllFoods() {
    return foods;
  },
  getFoodData(foodId) {
    return foods.find((f) => f.id === foodId) || null;
  },
  sendTrayToTable(foodIds) {
    const shown = foodIds.slice(0, 4);

    servingTray.innerHTML = shown
      .map((id) => `<span class="tray-food-item" data-id="${id}">${this.getFoodData(id).icon}</span>`)
      .join('');

    servingTray.classList.add('visible', 'at-waiter');
    servingTray.classList.remove('at-table');

    // Force layout so the "at-waiter" position registers before we animate
    void servingTray.offsetWidth;

    requestAnimationFrame(() => {
      servingTray.classList.remove('at-waiter');
      servingTray.classList.add('at-table');
    });

    servingTray.querySelectorAll('.tray-food-item').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        item.remove();
        const trayNowEmpty = servingTray.children.length === 0;
        if (eatCallback) eatCallback(id, trayNowEmpty);
      });
    });
  },
  onEat(callback) {
    eatCallback = callback;
  },
};