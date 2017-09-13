//////////////MODEL////////////////////////
var	model = {
	currentCat: null,
	cats: [
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
		}
	],
	catGif: [
		{
			name: "Cat of The Day",
			imgSrc:"http://thecatapi.com/api/images/get?format=src&type=gif",
			count: 0
		}
	]
};

////////////////////OCTOPUS///////////////////////
var octopus = {

	init: function() {
		model.currentCat = model.catGif[0];

		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function(){
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat; 
	}, 

	incrementCounter: function() {
		model.currentCat.count++;
		catView.render();
	},

	save: function() {
		
		var inputName = document.getElementById('input-name');
		var inputURL = document.getElementById('input-url');
		var inputClicks = document.getElementById('input-clicks');

		model.currentCat.name = inputName.value;
		model.currentCat.imgSrc = inputURL.value;
		model.currentCat.count = inputClicks.value;
	}
	};
	/*document.addEventListener ('click', function(){
		var newProperties = document.getElementById('admin');

	document.addEventListener ('click', function(){

	})
		newProperties = model.currentCat;
		console.log(newProperties);

		var inputName = document.getElementById('input-name');
		var inputURL = document.getElementById('input-url');
		var inputClicks = document.getElementById('input-clicks');

	});	*/

////////////////////////VIEW////////////////////////
function showForm(){
	document.getElementById('show-admin').style.visibility="visible";
	document.getElementById('form-submit').style.visibility="visible";
}

function hideForm(){
	document.getElementById('show-admin').style.visibility="hidden";
	document.getElementById('form-submit').style.visibility="hidden";
}

var catView = {

	init: function() {
		this.catElem = document.getElementById('cat');
		this.catPic= document.getElementById('cat-img');
		this.catName = document.getElementById('catname');
		this.catCount = document.getElementById('cat-count');

		this.catPic.addEventListener('click', function(){
			octopus.incrementCounter();
		});
		///////save form input/////////
		document.getElementById('form-submit').addEventListener('click', function(){
			save(); 
		});


		/*document.getElementById('form-submit').addEventListener('click', save);
			function save(){
				this.inputName.value = document.addEventListener('click', save(){
					octopus.render;
				})
		}*/

		this.render();
	},

	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.catCount.textContent = currentCat.count;
		this.catName.textContent = currentCat.name;
		this.catPic.src = currentCat.imgSrc;
	}
}; 

var catListView = {
		init: function() {
		this.catListElem = document.getElementById('cat-list');

		this.render();
	},

	render: function() {
		var cat, ele, i;

		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for (i = 0; i <cats.length; i++) {
			cat = cats[i];

			elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy) {
				return function () {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();
