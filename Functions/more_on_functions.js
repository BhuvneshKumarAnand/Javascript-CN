// print a factorial of n using expression function without using recusrsion

var factorial = function fact(n) {
    var ans = 1;
    for (var i = 1; i <= n; i++) {
        ans = ans * i;
    }
    return ans;
};

console.log(factorial(5));
// console.log(fact(5)); // fact is not defined


function ncr(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

console.log(ncr(5, 3));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Important note - Callback function

//If you want to execute a function right after the return of some other function, then callbacks can be used.
// A function passed to another function as an argument is referred to as a callback function.