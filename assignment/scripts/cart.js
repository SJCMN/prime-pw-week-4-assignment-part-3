console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

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

function empty () {
  basket = [];
  return basket;
}

console.log(`Basket is ${basket}`);

console.log('Your cart is now empty: ', empty());

console.log(`Adding apples to basket`, addItem('apples'));

console.log(`Basket is now ${basket}`);

const maxItems = 5;

function full() {
  if (basket.length >= maxItems){
    return true;
  } else if (basket.length < maxItems) {
    return false;
  }
}
console.log(basket, basket.length);
console.log('Your basket is full' ,full());
