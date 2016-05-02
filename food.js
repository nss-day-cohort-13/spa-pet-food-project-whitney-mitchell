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

var container = document.getElementById("table-container");
var catContainer = document.getElementById("cat-container");

function pullInDogFood() {
	var dogFoodData = JSON.parse(this.responseText);
  dogTable(dogFoodData.dog_brands);
}

function pullInCatFood() {
	var catFoodData = JSON.parse(this.responseText);
	catTable(catFoodData.cat_brands);
}

function error() {
	throw "Data failed to load. Try again";
}

function dogTable(dataArray) {
	console.log(dataArray);
	for (var i = 0; i < dataArray.length; i++) {
		container.innerHTML += "<div class='brand'><p>" + dataArray[i].name + "</p></div>";
		for (var j = 0; j < dataArray[i].types.length; j++) {
			container.innerHTML += "<div class='foodType'>" + dataArray[i].types[j].type + "</div>";
			console.log(container);
			for (var k = 0; k < dataArray[i].types.length; k++) {
				container.innerHTML += "<div class='vols'>" + dataArray[i].types[j].volumes[k].volume + "</div>" + "<div class='price'>" + dataArray[i].types[j].volumes[k].price + "</div>";
			}
		}
	}
}

function catTable(dataArray) {
	for (var i = 0; i < dataArray.length; i++) {
		catContainer.innerHTML += "<div class='brand'><p>" + dataArray[i].name + "<p></div>";
		for (var h = 0; h < dataArray[i].breeds.length; h++) {
			catContainer.innerHTML += "<div class='breeds'>" + dataArray[i].breeds[h] + "</div>";
			for (var j = 0; j < dataArray[i].types.length; j++) {
				catContainer.innerHTML += "<div class='foodType'>" + dataArray[i].types[j].type + "</div>";
				for (var k = 0; k < dataArray[i].types.length; k++) {
					catContainer.innerHTML += "<div class='vols'>" + dataArray[i].types[j].volumes[k].volume + "</div>" + "<div class='price'>" + dataArray[i].types[j].volumes[k].price + "</div>";
			}
		}
		}
	}
}

var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", pullInDogFood);
dataRequest.addEventListener("error", error);

dataRequest.open("GET", "dog-food.json");

dataRequest.send();

var catDataRequest = new XMLHttpRequest();
catDataRequest.addEventListener("load", pullInCatFood);
catDataRequest.addEventListener("error", error);

catDataRequest.open("GET", "cat-food.json");

catDataRequest.send();


