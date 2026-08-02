import FoodSystem from './foodSystem.js';

const waiter = document.getElementById('waiter');
const tray = document.getElementById('waiterTray');

export default {
  serve(foodIds, onComplete) {
    const shown = foodIds.slice(0, 4);
    tray.innerHTML = shown
      .map((id) => `<span>${FoodSystem.getFoodData(id).icon}</span>`)
      .join('');

    const ENTER_DURATION = 1800;
    const PAUSE_DURATION = 1500;
    const EXIT_DURATION = 1800;

    waiter.classList.add('walking-in');

    setTimeout(() => {
      waiter.classList.remove('walking-in');
      waiter.classList.add('walking-out');
      tray.innerHTML = '';
      if (onComplete) onComplete();
    }, ENTER_DURATION + PAUSE_DURATION);

    setTimeout(() => {
      waiter.classList.remove('walking-out');
    }, ENTER_DURATION + PAUSE_DURATION + EXIT_DURATION);
  },
};