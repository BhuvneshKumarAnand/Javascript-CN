// create a timer for 20 sec

var count = 20;

function timer() {
    if (count == 0) {
        console.log("Times Up!!!");
        clearInterval(id);
        return;
    }
    console.log(count);
    count--;
}

var id = setInterval(timer, 1000)