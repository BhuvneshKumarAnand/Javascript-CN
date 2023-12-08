const today = new Date();
console.log(today);

const birthDay = new Date('2000-04-23');
console.log(birthDay);

const someDay = new Date(1990, 7);
console.log(someDay);
console.log(birthDay.getFullYear());
console.log(typeof birthDay.getTime());
console.log(birthDay.getTime());
console.log(birthDay.getDate());
console.log(birthDay.toDateString());

console.log(today.toDateString());

const birthStr = birthDay.toString();
console.log(birthStr.slice(8, 19));