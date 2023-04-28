// // Get Slider Items | Array.form [ES6 Feature]
// var sliderCars = Array.from(document.querySelectorAll('.search .search-result .search-box'));

// let thisPage = 1;
// let limit = 6;



// // Get Number Of Slides
// var slidesCount = sliderCars.length;

// // Set Current Slide
// var currentSlide = 1;

// // Previous and Next Buttons
// var nextButton = document.getElementById('next');
// var prevButton = document.getElementById('prev');

// // Handle Click on Previous and Next Buttons
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;


// // next slide function
// function nextSlide() {
//   console.log('Next')
// }

// // prev slide function
// function prevSlide() {
//   console.log('prev')
// }

// // Create The Main UL Element
// var paginationElement = document.createElement('ul');

// // Set ID On Created Ul Element
// paginationElement.setAttribute('id', 'pagination-ul');

// // Create List Items Based On Slides Count
// for (var i = 1; i <= slidesCount; i++) {

//   // Create The LI
//   var paginationItem = document.createElement('li');

//   // Set Custom Attribute
//   paginationItem.setAttribute('data-index', i);

//   // Set Item Content
//   paginationItem.appendChild(document.createTextNode(i));

//   // Append Items to The Main Ul List
//   paginationElement.appendChild(paginationItem);

// }

// // Add The Created UL Element to The Page
// document.getElementById('indicators').appendChild(paginationElement);


