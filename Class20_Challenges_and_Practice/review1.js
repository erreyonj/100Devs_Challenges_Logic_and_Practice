// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

const doggy = (arr) => {
    arr[0] < arr[ arr.length - 1 ] ? console.log('hi') :
    arr[0] > arr[ arr.length - 1 ] ? console.log('bye') : 
    console.log('We close in an hour');
}

const myArray = [27, 45, 9, 5, 38, 27]
doggy(myArray)