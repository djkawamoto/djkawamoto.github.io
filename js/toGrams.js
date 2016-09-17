
$(document).ready(function() {
	
	//Add items to array to create more options
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
		}
		
		//Returns key values only
		var massItems = [];
		
		for (var i in mass){
			massItems.push(i);
		}
		
		var option = '';
		for (var i=0; i < massItems.length; i++){
		   option += '<option value="'+ massItems[i] + '">' + massItems[i] + '</option>';
		}
		$('#items').append(option);
	
	$("#get-mass").click(function() {
		//gets values from user
		var selectedItem = document.getElementById("items").value;
		var quantity = document.getElementById('quantity').value;
		
		var grams = quantity * mass[selectedItem];
		
		document.getElementById("result").value = grams;
	});
});