let number = 14;
let message;
message = number % 2 == 0 ? 'Even' : 'Odd';
console.log(message);




let number1 = 4;
let number2 = 5;

if (number1 > number2) {
  console.log(number1);
} 
else if (number2 > number1) {
console.log (number2);
}
else if (number1 == number2) {
  console.log('Equal');
}




let num1 = 7;
let num2 = 8;
let num3 = 6;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2>num3) {
  console.log(num2);
} else if (num3 > num1 && num3 > num2)
  {
  console.log(num3);
}


let start = 10;
let num = 20;
let end = 30;

if (start < num < end) {
  console.log('Between');
}
else if (start > num > end) {
  console.log('Between');
}
  else {
  console.log('Not between')
}




let year = 2020;

if (year % 4 == 0 && year % 100 !== 0) {
  console.log("Leap year");
}
  else if (year % 400 == 0) {
    console.log("Leap yaer")
  }
  else {
    console.log("Not a leap year");
  }
