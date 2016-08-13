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
        "Kosher Salt": 220,
        "Cocoa Powder": 120
    };

    var ingredient = document.getElementById('ingredient').value;
    var quantity = document.getElementById('quantity').value;

    var grams = quantity * mass[ingredient];
    if (isNaN(grams)) {
      grams = "OOPS!";
    };
    document.getElementById('result').value = grams;
}

function submitIngredient() {
  window.open="mailto:djkawamoto@gmail.com?subject=New%20Ingredient%20Submission&body=Ingredient%20Name:%20%0D%0AIngredient%20Mass%20in%20Grams:%20";
;}
