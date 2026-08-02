import FoodSystem from './foodSystem.js';

const waiter = document.getElementById('waiter');
const tray = document.getElementById('waiterTray');

export default {
  serve(foodIds, onComplete) {
    const shown = foodIds.slice(0, 4);
    tray.innerHTML = shown
      .map((id) => `<span>${FoodSystem.getFoodData(id).icon}</span>`)
      .join('');

    waiter.classList.add('walking-in');

    setTimeout(() => {
      waiter.classList.remove('walking-in');
      waiter.classList.add('walking-out');
      if (onComplete) onComplete();
    }, 1400);

    setTimeout(() => {
      waiter.classList.remove('walking-out');
    }, 2400);
  },
};