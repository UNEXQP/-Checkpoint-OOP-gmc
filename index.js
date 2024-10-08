
//Step 1: Create a Product Class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  
  //Step 2: Create a ShoppingCartItem Class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }


//create a shopping cart class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get total items in the cart
    getTotalItems() {
      return this.items.length;
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  
    // Method to remove an item from the cart based on product id
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display cart items
    displayCart() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);
      });
    }
  }
  
  //Step 4: Test the Objects and Methods
// Create products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Headphones", 100);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);

// Display the cart
cart.displayCart();

// Output the total number of items in the cart
console.log(`Total items in cart: ${cart.getTotalItems()}`);

// Remove an item (headphones) from the cart
cart.removeItem(2);

// Display the cart after removal
cart.displayCart();

