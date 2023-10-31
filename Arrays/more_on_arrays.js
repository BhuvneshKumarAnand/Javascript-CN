var arr = ["bharat", 17, true, 23.0];

function print() {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

arr.push(10); //push function --> push at the last+1 index

print();

arr.pop(10); //pop function -->remove from last index

print();

arr.shift();
print();

arr.unshift();
print();