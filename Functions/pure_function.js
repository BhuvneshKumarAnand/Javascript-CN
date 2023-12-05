// Pure function - do not depend on external factors

function Multiply(num1, num2) {
    return num1 * num2;
}

console.log(Multiply(4, 6));

//Impure function - depend's on external factors

var discount = 10;

function afterDiscount(price) {
    return price - discount;
}

console.log(afterDiscount(25));