// strict mode

"use strict";

var box = document.getElementById('box');
var clickCount = document.getElementById('clickCount');
var count = 0;
box.addEventListener('click', function() {
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});