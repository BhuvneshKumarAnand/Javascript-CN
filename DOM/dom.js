//DOM in JAVASCRIPT

//Document Object Model (DOM)

//The topmost object in the DOM is the browser's window.

// After the window, DOM is the document displayed in the browser's window.

/*The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.*/

// console.log(window.location === document.location);//true

// console.log(window.document === document);//true

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What will be the output of following code?
// function test() {
//     return this;
// }
// console.log(test() == window); //true

// 2nd method of Event Handling


var hellobtn = document.getElementById("btn");

hellobtn.addEventListener('click', function() { alert('Welcome to JS') });