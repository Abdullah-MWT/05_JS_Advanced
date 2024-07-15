// +++++++++++++++  Using Map  +++++++++++++++++++

// map simply performs action on each item of array


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addTen = myNums.map( (num) => num + 10 );
console.log(addTen);



// Understanding Chaining Method

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multTen = myNums
.map( (num) => num * 10 )
.map( (num) => num +1 )
.filter( (num) => num > 50 );

console.log(multTen);  // first multiply 10, then add 1 and then return nums greater than 50