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

var $catPic= document.getElementById('cat-img')
var $catName = document.getElementById('catname')
var $catCount = document.getElementById('cat-count')
var $catlist = document.getElementById('cat-list')

for (var i = 0; i <cats.length; i++) {
	var cat = cats[i];

	var catList = document.createElement('li');
	   catList.textContent = cat.name;

	catList.addEventListener('click', (function(catCopy) {
		return function() {
			$catPic.src = catCopy.imgSrc;
            $catName.innerHTML = catCopy.name;
            $catCount.innerHTML = catCopy.count;
            currentCat = catCopy;
		};
	})(cat));

	$catList.appendChild(catList);
};

//////////Counts number of clicks

var currentCat

$catPic.onclick = function() {
	currentCat.count += 1;
	$catCount.innerHTML = currentCat.count;
};

