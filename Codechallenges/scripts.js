// JAVASCRIPT BASICS
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function myFunction(a, b){
return (a+b)
}
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction(a, b){
return (a===b)
}
// Write a function that takes a value as argument
// Return the type of the value
function myFunction(a){
return typeof(a)
}
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n){
return a[n-1];
}
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a){
return a.slice(3);
}
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str){
return str.slice(-3)
}
//JAVASCRIPT ARRAYS
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction(a, n){
    return (a[n-1])
}
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a){
return a.slice(3)
}
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function myFunction(a){
return a.slice(-3)
}
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction(a){
    return a.slice(0,3);
}
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n){
    return a.slice(-n);
}
// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction(a){
    return a.length
}
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr){
return arr.sort((a , b) => b-a);
}
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction(arr){
return arr.sort();
}
