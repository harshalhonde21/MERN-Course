// big example covering the array methods

const products = [
    { name: "Laptop", category: "electronics", price: 1000, quantity: 5 },
    { name: "Phone", category: "electronics", price: 500, quantity: 10 },
    { name: "Shirt", category: "clothing", price: 30, quantity: 20 },
    { name: "Pants", category: "clothing", price: 40, quantity: 15 },
    { name: "Blender", category: "home appliances", price: 100, quantity: 8 },
    { name: "Oven", category: "home appliances", price: 200, quantity: 6 }
  ];
  
  // Step 1: Increase the price of all products by 10%
  const increasedPrices = products.map(product => {
    return {price: product.price * 1.10 };
  });

  console.log(increasedPrices)


// step 2 : take out category of electronics

const filteredProducts = products.filter(product => product.category == "electronics");

console.log(filteredProducts)


const totalInventoryValue = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  console.log(totalInventoryValue)


const basicValue = products.forEach(product => {
    console.log(`Product: ${product.name}, Updated Price: $${product.price.toFixed(2)}`);
  });

  console.log(basicValue)