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






  // TASK 1.

do {
  num = prompt ("Enter a number greater than 100");
} while (num<= 100 && num);
{
 console.log (num);
}

//TASK 2.

let a = prompt ("Enter first number: ")
let b = prompt ("Enter second number: ");
alert (a**b);


//TASK 3.

function drawrTiangle (t){
  for (let i = 1; i <= 8; i++)
  {
    let eachLine = ''
    for (let j = 1; j <= i; j++) {
eachLine += j+" "
  }
  eachLine = eachLine.trim();
  console.log (eachLine);
  }
}
let t = 8;
drawrTiangle(t);


//TASK 4.


//TASK 5.


//TASK 6.

for ( let i=1; i<=100; i++)
{
  if (i%3 == 0 && i%5 == 0)
    {
      console.log ("FizzBuzz");
    }
else if (i%3 == 0)
{
  console.log ("Fizz");
}
else if (i%5 ==0)
{
  console.log ("Buzz");
}
else
{
console.log (i);
}
}

//TASK 7.

let sum = 0;
for (let c = 0; c < 1000; c++)
{
  if (c % 3 == 0 || c %  5 == 0)
  {
    sum += c;
  }
}
console.log(sum);