const popup = document.getElementById('orderPopup');
const text = document.getElementById('orderPopupText');
let hideTimeout = null;

export default {
  show(message, onComplete) {
    clearTimeout(hideTimeout);
    text.textContent = message;
    popup.classList.add('visible');
    hideTimeout = setTimeout(() => {
      popup.classList.remove('visible');
      if (onComplete) onComplete();
    }, 1500);
  },
};