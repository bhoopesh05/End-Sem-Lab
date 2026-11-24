// Q: Write a program to print Fibonacci series up to a given number of terms.

var terms = 8; 
var a = 0; 
var b = 1; 

console.log("Fibonacci Series:");

for (var i = 1; i <= terms; i++) {
    console.log(a); 
    
    var next = a + b; 
    a = b;            
    b = next;         
}
















































// var terms = Number(prompt("Enter the number of terms:")); 
// var a = 0; 
// var b = 1; 
// console.log("Fibonacci Series:");
// for (var i = 1; i <= terms; i++) {
//     console.log(a);
//     var nextTerm = a + b; 
//     a = b;                
//     b = nextTerm;         
// }
