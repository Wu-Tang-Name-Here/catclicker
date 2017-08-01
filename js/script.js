var	cats = [
	{
		name: "Pablo",
		imgSrc:"images/blanket.jpg",
		count: 0
	},
	{
		name: "Kanye",
		imgSrc:"images/black.jpg",
		count: 0
	},
	{
		name: "Heidi",
		imgSrc:"images/box.jpg",
		count: 0
	},
	{
		name: "Aimee",
		imgSrc:"images/sad.jpg",
		count: 0
	},
	{
		name: "Stan",
		imgSrc:"images/tounge.jpg",
		count: 0
	}];

for (var i = 0; i <cats.length; i++) {
	var cat = cats[i];

	var catList = document.createElement('li');
	catList.textContent = cat.name;

	catList.addEventListener('click', (function(catCopy) {
		return function() {
			document(catCopy);
		};
	})(cat));

	document.body.appendChild(catList);
};
/*
//////////Counts number of clicks 
var counter = document.getElementById('counter')
var clicker = document.getElementById('catimage'),
	count = 0;
clicker.onclick = function() {
	count += 1;
	counter.innerHTML =  count;
	selectCatName.setAttribute('src', randomCatName);
};
*/
