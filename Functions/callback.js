// Callback Function 

// example

function greet(wish) {
    console.log(`${wish()}, Welcome to JAVASCRIPT!!`);
};

function sayHi() {
    return 'Hi!';
};

function goodMorning() {
    return 'Good Morning!';
};

function sayHello() {
    return 'Hello!';
};

greet(sayHello);
greet(sayHi);
greet(goodMorning);