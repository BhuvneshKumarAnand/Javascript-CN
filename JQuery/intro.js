// Change inner text of HTML using JavaScript

// var para1 = document.getElementById('para1');
// para1.innerHTML = 'Welcome to JavaScript!!!';

// Change inner text of HTML using JQuery

$('#para1').html("Welcome to JQuery!!!");
// $('#para2').hide();

// Modifying CSS Using Query

$("p").css({
    fontSize: "30px",
    color: "red"
});

$("div").css({
    width: "100px",
    height: "100px",
    backgroundColor: "cyan"
})

// Event Handling using JQuery

// Method 1

// $('div').click(function() {
//     alert("Div Clicked")
// });

// Method 2

$("div").on('click', function() {
    alert("Div Clicked")
})

$("a").click(function(e) {
    e.preventDefault();
    alert("Anchor Tag Clicked");
});

$("#div2").click(function() {
    var element = $(this);
    element.width(element.width() + 10 + 'px');
});