function calcGrams() {

  var mass = {
    "Creme Fraiche": 240,
    "Heavy Cream": 240,
    "Milk": 240,
    "Sugar": 200,
    "Brown Sugar": 220,
    "Powdered Sugar": 130,
    "Honey": 300,
    "Molasses": 280,
    "KosherSalt": 220,
    "CocoaPowder": 120
  };
  var ingredient = document.getElementById('ingredient').value;
  var quantity = document.getElementById('quantity').value;
  if (quantity == null || quantity == "") {
    quantity = 0;
  }
// ################### add error handling for something other than a number
  var getGrams = function (ingredient) {
    return mass[ingredient];
  };
  var grams = quantity * getGrams(ingredient);
  document.getElementById('result').value = grams;
}

function selectIngredient() {
  document.getElementById('ingredient-label').innerHTML = document.getElementById('ingredient').value;
}

function quantityInput() {
  document.getElementById('quantity-label').innerHTML = document.getElementById('quantity').value;
}
