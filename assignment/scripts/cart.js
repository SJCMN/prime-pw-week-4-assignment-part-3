console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = []

function addItem ( item ) {
  basket.push(item);
  console.log(`The ${item} are added to your basket`)
  return true;
}

console.log(addItem ('napkins'));
console.log(addItem ('forks'));
console.log(addItem ('ice'));

console.log(addItem ('oranges'));

function listItems ( yourBasket ){
  for (const item of yourBasket) {
    console.log(item);
  }
  return yourBasket;
}

console.log('Your basket contains: ', listItems(basket));

function empty (basketArr) {
  basketArr = [];
  return basketArr;
}

console.log('Your cart is now empty: ', empty(basket));

console.log(`Basket is ${basket}`);
console.log(`Adding apples to basket`, addItem('apples'));
console.log(`Basket is now ${basket}`);
