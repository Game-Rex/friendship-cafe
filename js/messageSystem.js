const messages = {
  pizza: "Friendship, like pizza, is best when shared with people who make life warm.",
  burger: "A good friend stacks up with you through every layer of life.",
  fries: "Some things are just better shared — like fries, and good friendships.",
  cake: "Here's to celebrating a friendship worth having, one slice at a time.",
  donut: "A friendship this sweet deserves a donut and a whole lot of love.",
  icecream: "Cool moments, warm hearts — that's what friendship is made of.",
  coffee: "Some friendships brew slowly but stay strong, just like a good cup of coffee.",
  momos: "Good friends and good momos both make everything better, one bite at a time.",
  cookies: "Friendship is the best kind of cookie — always better when shared.",
  chocolate: "A friend as sweet as chocolate makes every day a little brighter.",
  colddrink: "Here's to a friendship that stays refreshing no matter how much time passes.",
  ramen: "Like a good bowl of ramen, our friendship just gets better with time.",
};

export default {
  getMessage(foodId) {
    return messages[foodId] || 'Cheers to a wonderful friendship!';
  },
};