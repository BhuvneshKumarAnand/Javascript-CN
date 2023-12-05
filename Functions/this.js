// 'this' keyword  -  pointer to an object
'use strict'

console.log(this);

const user1 = {
    userName: 'Bharat',
    userAge: 23,
    work: () => { console.log(this); }
};


const user2 = {
    userName: 'Bhuvnesh'
};


user1.work();

user2.work = user1.work;

console.log(user2);