// 1. What is the average price of all items?
var listOfPrices = items.map(function(element,idx,arr) {
  return element.price
});

var sum = 0;
listOfPrices.forEach(function(element,idx,arr){
  sum = sum + element;
});

var avg = sum / listOfPrices.length


document.getElementById("answer1").innerHTML = avg;
console.log("WHAT THE HECK",avg)


// 2. Show me an array of items that cost between $14.00 and $18.00 USD?
var itemCost = items.filter(function(element,idx,arr) {
  return element.price >= 14.00 && element.price <= 18.00 && element.currency_code === "USD" }).map(function(element,idx,arr) {
  return element.title
});

document.getElementById("answer2").innerHTML = itemCost;



// 3. Which item has a "GBP" currency code? Display it's name and price.
var itemGBP = items.filter(function(element,idx,arr){
  return element.currency_code === "GBP"
}).map(function(element,idx,arr) {
  return element.title + ", $" + element.price
});

document.getElementById("answer3").innerHTML = itemGBP;
console.log(itemGBP)

// 4. Display a list of all items who are made of wood.
var woodItems = items.filter(function(element,idx,arr) {
  return element.materials.indexOf ("wood") !== -1
}).map(function(element,idx,arr) {
  return element.title
});

document.getElementById("answer4").innerHTML = woodItems;

console.log(woodItems)


// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
var bigMaterials = items.filter(function(element,idx,arr) {
  return element.materials.length >= 8
}).map(function(element,idx,arr) {
  return "NAME: " + element.title + " QUANTITY: " + element.quantity  + " MATERIALS: " + element.materials
});

document.getElementById("answer5").innerHTML = bigMaterials;
console.log(bigMaterials)

// return element.title + ", " + element.quantity  + ", " + element.materials

// 6. How many items were made by their sellers?
var createdBySeller = items.filter(function(element,idx,arr) {
  return element.who_made === "i_did"
});

document.getElementById("answer6").innerHTML = createdBySeller.length;
console.log(createdBySeller.length)


// banginsures protection to check everything grabbed is inside the array
