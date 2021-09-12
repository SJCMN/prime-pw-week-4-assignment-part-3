console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
const maxItems = 5;

function addItem ( item ) {
  let extraItems
  if (full() === false){
  basket.push(item);
} else {
  if (full() === true) {
  for (i = maxItems-1; i < basket.length; i++ ){
    extraItems = basket[i]
  }
    console.log(`Sorry your cart is full, please remove ${extraItems} from your cart`, listItems(basket));
    return false;
  }
}
  console.log(`The ${item} are added to your basket`)
  console.log(`There are ${basket.length} items in your basket`);
  return true;
}

console.log(addItem ('napkins'));
console.log(addItem ('forks'));
console.log(addItem ('ice'));

console.log(addItem ('oranges'));
console.log(addItem ('grapes'));
console.log(addItem ('cake'));

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

function full() {
  if (basket.length >= maxItems){
    return true;
  } else {
    if (basket.length < maxItems) {
    return false;
    }
  }
}
console.log(basket, basket.length);
console.log('Your basket is full' ,full());

basket = ["napkins", "forks", "ice", "oranges", "grapes", "pears", "peaches"]

console.log(`Adding cups to basket`, addItem('cups'));

function removeItem( item ) {
  const removed = basket.indexOf(item);
  let result;
  if (removed >= 0) {
    basket.splice(removed,1);
    result = basket;
      console.log(`Your ${item} have been removed from your basket`);
  } else {
    result = null;
      console.log(`Your basket does not contain any ${item}`);
      }
    return result;
  }


console.log(`Please remove Forks from my basket`, removeItem('forks'));
console.log(`Please remove Spoons from my basket`, removeItem('spoons'));
