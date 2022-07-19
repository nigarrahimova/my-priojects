// TASK 1    Print even numbers in given array.

//const arr = [ 13, 23, 12, 45, 22, 48, 66, 100, 101, 104];

//for(i = 0; i < arr.length; i++) {
  
 // if(arr[i] % 2 == 0){
  
  //console.log(arr[i]);
//}
//}




// TASK 2    Delete all occurence of element in given array.

//const arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
//const num = 56;

//for(i = 0; i < arr.length; i++) {
  //if(arr[i] == num) {
   // arr.splice(i,1);
  //}
//}
//console.log(arr);





// TASK 3    Find the largest number in an array.

//const arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
//var largestNumber = 0;

//for(i = 0; i < arr.length; i++) {

  //if (arr[i] > largestNumber) {

    // var largestNumber = arr[i];
  //}
//}
 //console.log("The largest number in array is " + largestNumber);





// TASK 4    Find duplicate values in a given array.

//const arr = [4, 2, 34, 4, 1, 12, 1, 4];

//for(i = 0; i < arr.length; i++) {

  //for(j = i+1; j = arr.length; j++) {

   // if(arr[i] == arr[j]) {

    //  console.log(arr[i]);
    //}
  //}
//}


























//let number = 14;
//let message;
//message = number % 2 == 0 ? 'Even' : 'Odd';
//console.log(message);




//let number1 = 4;
//let number2 = 5;

//if (number1 > number2) {
//  console.log(number1);
//} 
//else if (number2 > number1) {
//console.log (number2);
//}
//else if (number1 == number2) {
//  console.log('Equal');
//}




//let num1 = 7;
//let num2 = 8;
//let num3 = 6;

//if (num1 > num2 && num1 > num3) {
//  console.log(num1);
//} else if (num2 > num1 && num2>num3) {
//  console.log(num2);
//} else if (num3 > num1 && num3 > num2)
//  {
//  console.log(num3);
//}


//let start = 10;
//let num = 20;
//let end = 30;

//if (start < num < end) {
//  console.log('Between');
//}
//else if (start > num > end) {
//  console.log('Between');
//}
//  else {
//  console.log('Not between')
//}






  // TASK 1. 100den boyuk reqemleri qebul eden prompt. eger 100den kicikdirse qebul etmesin.

//do {
 // num = prompt ("Enter a number greater than 100");
//} while (num<= 100 && num); {
// console.log (num);
//}

//TASK 2. iki eded daxil edende 1ci eded ikinci ise onun quvveti olsun.

//let a = prompt ("Enter first number: ")
//let b = prompt ("Enter second number: ");
//alert (a**b);


//TASK 3.   triangle

//let n = prompt ("enter the number", "");

//for (let i = 1; i <= n; i++) {
 // let str = "";
 // for (let j = 1; j <= i; j++) {
 //   str += j + " "
 // }
//console.log(str);
//}


//TASK 4. reqem daxil edende nece reqemli oldugunu tapir.

//let num = prompt("Enter a number", "");
//let count = 0;
//while (num != 0) {
 // num = Math.floor (num / 10);
  //count++;
//}
//console.log(count);

//TASK 5. eded daxil edende reqemlerin cemini cixarir.

//let val = prompt("Enter the number","") //123
//let sum = 0; //3+2+1=6

//while(val){
//sum += val % 10; //123 % 10 = 3; 12 % 10 = 2; 1 % 10 = 1;
// val =  Math.floor(val/10); // 123/10 = 12; 12/ 10 = 1; 1/10 = 0;
// }
// console.log("Sum:"+sum);

//TASK 6. 

//for ( let i=1; i<=100; i++) {
 // if (i%3 == 0 && i%5 == 0) {
  //    console.log ("FizzBuzz");
  //  }
//else if (i%3 == 0) {
 // console.log ("Fizz");
//}
//else if (i%5 ==0) {
 // console.log ("Buzz");
//}
//else {
//console.log (i);
//}
//}

//TASK 7. 1000e qeder 3e ve 5e bolunenlerin cemini tapir.

//let sum = 0;
//for (let c = 0; c < 1000; c++) {
 // if (c % 3 == 0 || c %  5 == 0) {
  //  sum += c;
  //}
//}
//console.log(sum);