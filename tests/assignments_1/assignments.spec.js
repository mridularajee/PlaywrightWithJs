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
});


