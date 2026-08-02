export default {
  reveal(element, delay = 0) {
    setTimeout(() => {
      element.classList.add('reveal');
    }, delay);
  },
};