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
document.getElementById('enterCafeBtn').addEventListener('click', () => {
  document.getElementById('welcomeScreen').classList.add('hidden');
  MessageSystem.showStatus("Welcome! The menu is on the table. Feel free to order anything you'd like.✨");
});

document.getElementById('menuCard').addEventListener('click', () => {
  MenuSystem.open();
});

MenuSystem.onPlaceOrder((foodIds) => {
  MenuSystem.close();
  PopupSystem.show('Your order is coming right up!', () => {
    WaiterSystem.serve(foodIds, () => {
      FoodSystem.sendTrayToTable(foodIds);
      MessageSystem.showFinalMessage();
    });
  });
});

FoodSystem.onEat((foodId, trayNowEmpty) => {
  const message = MessageSystem.getMessage(foodId);
  const text = trayNowEmpty ? `${message} Feel free to order again!` : message;
  MessageSystem.showStatus(text);
});