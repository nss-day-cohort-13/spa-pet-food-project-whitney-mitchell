// You are working as a junior developer team for Acme, Inc. This company sells
// dog food. Each brand of dog food is represented by an object in an array you
// get back from the (fictional database) in JSON format.

// Your first task is to build a product page that displays all brands of dog
// food, the different types, with the price and size for each container volume.

// Once you have all of that information listed, you need to create a second
// JSON file to represent the new product line for Acme, Inc. They now want to
// sell cat food. Your product owner gives you a spreadsheet with all the new
// data in it. It is your job to get this data represented correctly in JSON
// format and then update your page to now show cat food, along with dog food.
var container = document.getElementById('table-container');
function pullInDogFood() {
	var dogFoodData = JSON.parse(this.responseText);

  createTable(dogFoodData.dog_brands);
}

function error() {
	throw "Data failed to load. Try again";
}

function createTable(dataArray) {
	console.log(dataArray);
	for (var i = 0; i < dataArray.length; i++) {
		container.innerHTML += "<div class='brand'>" + dataArray[i].name + "</div>";
		for (var j = 0; j < dataArray[i].types.length; j++) {
			container.innerHTML += "<div class='foodType'>" + dataArray[i].types[j].type + "</div>";
			console.log(container);
			for (var k = 0; k < dataArray[i].types.length; k++) {
				container.innerHTML += "<div class='vols'>" + dataArray[i].types[j].volumes[k].volume + "</div>" + "<div class='price'>" + dataArray[i].types[j].volumes[k].price + "</div>";
			}
		}
	}
}

var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", pullInDogFood);
dataRequest.addEventListener("error", error);

dataRequest.open("GET", "dog-food.json");

dataRequest.send();


