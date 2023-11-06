// var outerDiv = document.getElementById('outer');

// ___________________________________________________________________

// --------------------Event Listener for mouse---------------------------

// outerDiv.addEventListener('mouseover', function() {
//     console.log("Mouser Over");
// });

// outerDiv.addEventListener('mouseout', function() {
//     console.log("Mouser Out");
// });

// --------------------Event Listener for Keyboard---------------------------


// var searchInput = document.getElementById('search');


// ---------------for particular id---------------------------
// searchInput.addEventListener('keypress', function() {
//     console.log("Key Press");
// });

// ---------------for any Key ---------------------------

// document.addEventListener('keypress', function() {
//     console.log("Key Press");
// });

// document.addEventListener('keydown', function(event) {
//     console.log("Key Down", event.keyCode);
// });


// Propagation of Events

var outerDiv = document.getElementById('outerDiv');

outerDiv.addEventListener('click', function() {
    console.log('Click Outer Div');
});