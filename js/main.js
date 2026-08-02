import MenuSystem from './menuSystem.js';
import PopupSystem from './popupSystem.js';
import WaiterSystem from './waiterSystem.js';
import FoodSystem from './foodSystem.js';
import MessageSystem from './messageSystem.js';
import AnimationSystem from './animationSystem.js';

console.log('MenuSystem loaded', MenuSystem);
console.log('PopupSystem loaded', PopupSystem);
console.log('WaiterSystem loaded', WaiterSystem);
console.log('FoodSystem loaded', FoodSystem);
console.log('MessageSystem loaded', MessageSystem);
console.log('AnimationSystem loaded', AnimationSystem);
document.getElementById('menuCard').addEventListener('click', () => {
  MenuSystem.open();
});

MenuSystem.onPlaceOrder((foodIds) => {
  MenuSystem.close();
  PopupSystem.show('Your order is coming right up!', () => {
    WaiterSystem.serve(foodIds, () => {
      FoodSystem.placeOnTable(foodIds);
    });
  });
});