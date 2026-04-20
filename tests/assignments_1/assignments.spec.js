const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {

    //1. Print numbers divisible by 5 between 30 and 60
    //   for (let i = 30; i <= 60; i++) {
    //     if (i % 5 === 0) {
    //       console.log(i);
    //     }
    //   }

    //2. Print numbers divisible by 3 and 5 between 10 and 90
    // for (let i = 10; i <= 90; i++) {
    //     if (i % 3 == 0) {
    //         console.log(i)
    //     }
    //     else if (i % 5 == 0) {
    //         console.log(i)
    //     }
    //     else {
    //         console.log("not found")
    //     }
    // }

    //3. Count how many even numbers are between 52 to 63
    //     for(let i = 52; i<=63; i++){
    //     if(i%2==0){
    //         console.log(i)
    //     }
    // }

    //4. Count how many Odd numbers are between 11 to 31
    // let count = 0;
    // for (let i = 11; i <= 31; i++) {
    //     console.log(i)
    //     count++;
    // }
    // console.log("total count" + " = " + count)

    //5. Print the sum of all numbers from 15 to 25
    // let sum = 0;
    // for (let i = 15; i <= 25; i++) {
    //     console.log(i)
    //     sum = sum + i
    // }
    // console.log("total sum" + " " + "=" + " " + sum)

    //6. Print the sum of all even numbers from 41 to 60
    // let sum = 0;
    // for (let i = 41; i <= 60; i++) {
    //     if (i % 2 == 0) {
    //         console.log(i)
    //         sum = sum + i;
    //     }
    // }
    // console.log("sum of all even numbers" + sum)

    // 7. Print the sum of all odd numbers from 21 to 39
    // let sum = 0;
    // for (let i = 21; i <= 39; i++) {
    //     if (i % 2 == 1) {
    //         console.log(i)
    //         sum = sum + i;
    //     }
    // }
    // console.log("sum of all odd numbers" + sum)

    //8. Print numbers from 1 to 10
    //     for(let i = 1; i<=10; i++){
    //     console.log(i)
    // }

    //9. Print numbers from 10 to 1
    //     for(let i = 10; i>=1; i--){
    //     console.log(i)
    // }

    //10. Print all factors of 16
    // let num = 16;
    // for(let i = 0; i<100; i++){
    //     if(num%i==0)
    //     console.log(i)
    // }

    //11. Print all even numbers between 489 and 561
    // for (let i = 489; i <= 561; i++) {
    //     if (i % 2 == 0) {
    //         console.log(i)        
    //     }
    // }

    //12. Print all odd numbers between 89 and 111
    // for (let i = 89; i <= 111; i++) {
    //     if (i % 2 == 1) {
    //         console.log(i)        
    //     }
    // }

    //13. Print the square of numbers from 1 to 10
    // for(let i = 1; i<10; i++){
    //  console.log(i + "x" + 2 + "=" + i*2)
    // }

    //14. Print the cube of numbers from 1 to 10
    // for(let i = 1; i<10; i++){
    //  console.log(i + "x" + 3 + "=" + i*3)
    // }

    //15. Print table of a number 12
    // for(let i=1; i<=10; i++){
    //     console.log(i*12)
    // }

// 16. Check number 11 is prime number or not
// let num = 11;
// for(let i=0; i<=11; i++){
// if(num%i==0||num%i==0){
//  console.log("11 is prime numbe")
// }
// else{
//     console.log("11 is not prime number")
// }
// }

// 17. Check 121 is a Palindrome number or not
// let number = 121
// if(number==121){
//     console.log("number is palindrome")
// }
// else{
//     console.log("number is not palindrome")
// }

// 18. Check whether a number is positive
// let num =0;
// for(let i = 0; i<=100; i++){
//     if(i>=num){
//         console.log("number is +ve")
//     }
//     else{
//         console.log("number is -ve")
//     }
// }

// 19. Check whether a number is negative
// let num =0;
// for(let i = 0; i<=100; i--){
//     if(i>num){
//         console.log("number is +ve")
//     }
//     else{
//         console.log("number is -ve")
//     }
// }
// 20. Check whether a number is greater than 100

});


