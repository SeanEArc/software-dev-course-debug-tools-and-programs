const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

// Fixed
function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate < 1 && discountRate > 0) {
  return total - total * discountRate; // Bug: Missing validation for discountRate

  } else {

    return total
  }
}

function generateReceipt(cartItems, total) {
  if (isNaN(total)) {
    return "Total may not be a number"
  }

  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


//Empty Cart
const emptyCart = [];
const total1 = calculateTotal(emptyCart);
const discounted1 = applyDiscount(total1, 0.2);
console.log(generateReceipt(emptyCart, discounted1));


// One Cart Item
const oneCartItem = [{ name: "Mouse", price: 30 }];
const total2 = calculateTotal(oneCartItem);
const discounted2 = applyDiscount(total2, 0.1);
console.log(generateReceipt(oneCartItem, discounted2));


// Discount rate 1
const discountRate1 = [{ name: "Ramen", price: 100000 }];
const total4 = calculateTotal(discountRate1);
const discounted4 = applyDiscount(total4, 1);
console.log(generateReceipt(discountRate1, discounted4));