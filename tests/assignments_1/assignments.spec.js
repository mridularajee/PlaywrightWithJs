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
    // let num = 100
    // for(let i = 50; i<=150; i++){
    //     if(i>num){
    //         console.log("this value is greater than 100" + "=" + i)
    //         break;
    //     }
    // }

    //21. Check whether a number is even
    // let num = 100
    // for(let i = 50; i<=150; i++){
    //     if(num%2==0){
    //         console.log(i);
    //         break;
    //     }
    // }

    // 22. Check whether a character is uppercase
    // 23. Check whether a number is divisible by 5
    // let num = 4;
    // if(num%5==0){
    //     console.log("number is divisible by 5")
    // }
    //or//
    // let num  = prompt("Enter the number")
    //     num = Number(num)
    //     if(num%5==0){
    //         console.log("number is divisible by 5")
    //     }else{
    //         console.log("number is not divisible 5")
    //     }

    // 24. Check whether a person is eligible to vote
    // let num = 18
    // if(num<=22)
    // {
    //     console.log("person is eligible to vote")
    // }else{
    //     console.log("person is not eligible to vote")
    // }
    // or//
    // let num  = prompt("Enter the number")
    //     num = Number(num)
    // if(num>=18)
    // {
    //     console.log("person is eligible to vote")
    // }else{
    //     console.log("person is not eligible to vote")
    // }

    // 25. Check whether a year is leap year or not
    
    // 26. Check percentage category (Distinction >=85, First class >=60, Second class >=45, Fail  (any percentage below 45%)) (take any 5 subjects marks )
    // let num = prompt("Enter any number")
    // num = Number(num)
    // if (num >= 85) {
    //     console.log("Distinction")
    // } else if (num >= 60) {
    //     console.log("First class")
    // } else if (num >= 45) {
    //     console.log("Second class ")
    // }
    // else {
    //     console.log("Not eligible")
    // }

    // 27. Declare an integer array of size 5

    // 28. Initialize an array with 5 numbers
    // let arr = [1,2,3,4,5]
    // console.log(arr)

    // 29. Print all elements of an array
    // let arr = [2,3,2,1,2,4]
    // for(let i = 0; i<arr.length; i++)
    // console.log(arr[i])

    // 30. Find the length of an array
    // let arr = [2,3,2,1,2,4]
    // console.log(arr.length)

    // 31. Access and print the first element
    // let arr = [2,3,4,5,6,7]
    // console.log(arr[0])

    // 32. Access and print the last element
    //   let arr = [2,3,4,5,6,7]
    //    console.log(arr.length -1)
    //    console.log(arr[5])

    // 33. Store and print 7 student marks in array
    // let arr = [23,45,32,11,44,35,67]
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i])
    // }

    // 34. Store and print 9 Cities names in array
    // let arr = ["kanpur", "jaipur", "Goa", "Noida", "Gurugram", "Delhi", "Gzb", "Jaipur", "Bhopal"]
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i])   
    // }

    // 35. Find the sum of all elements in an array
    // let sum = 0
    // let count = 0
    // let arr = [23,45,32,11,44,35,67]
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i])
    //     // count++
    //     sum = sum+arr[i]
    // count++
    // }
    // console.log(sum)
    // console.log(count)

    // 36. Find the average of array elements
    // let arr = [23,45,32,11,44,35,67]
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i])
    //     sum = sum+arr[i]
    // }
    // console.log(sum)
    // let avg = sum/7
    // console.log(avg)

    // 37. Print array elements multiplied by 2
    // let arr = [23,45,32,11,44,35,67]
    // for(let i=0; i<arr.length; i++){
    //     console.log(arr[i] + "x" + 2 + "=" + arr[i]*2)
    // }

    // 38. Check whether array is empty or not
    // 39. if array having any negative numbers, Replace all negative numbers with 0, while printing

    // 40. Find the largest of three numbers like a=17, b=20, c= 11
    //     let a=17, b=20, c=11
    //     if(a>b){
    //         console.log("a is largest")
    //     }else if(a<b){
    // console.log("b is largest")
    //     }else if(a<c){
    //         console.log("c is largest")
    //     }
    // else("not found largest value")

    // 41. Add an element to the end of an array using push.
    // let arr = [4,3,2,5,7]
    // arr.push(1)
    // console.log(arr)

    // 42. Remove the last element from an array using pop.
    // let arr = [4,3,2,5,7]
    // arr.pop()
    // console.log(arr)

    // 43. Remove the first element from an array using shift.
    // let arr = [2,3,2,1,2,4]
    // arr.shift()
    // console.log(arr)

    // 44. Add elements at the beginning of an array using unshift.
    // let arr = [2,3,2,1,2,4]
    // arr.unshift(1)
    // console.log(arr)

    // 45. Concatenate two arrays using concat.
    // let name = "Mridula"
    // let last = "Raje"
    // console.log(name.concat(last))

    // 46. Reverse an array.
    // let arr = [3,7,8,5,4]
    // arr.reverse()
    // console.log(arr)

    // 47. Find the length of a string.
    // let char = "My name is mridula"
    // console.log(char.length)

    // 48. Convert a string to uppercase using toUpperCase.
    // let chr = "i am from kanpur"
    // console.log(chr.toUpperCase())

    // 49. Convert a string to lowercase using toLowerCase.
    // let chr = "I am FROM kanpur"
    // console.log(chr.toLowerCase())

    // 50. Get a character at a specific index using charAt().
    // let chr = "I am FROM kanpur"
    // console.log(chr.charAt(6))

    // 51. Find the position of a word using indexOf().
    // let chr = "I am FROM kanpur"
    // console.log(chr.indexOf('k'))

    // 52. Check if a string includes a word using includes().
    // let chr = "I am FROM kanpur"
    // console.log(chr.includes('am'))

    // 53. Check if a string starts with a specific word using startsWith().
    // let chr = "I am FROM kanpur"
    // console.log(chr.startsWith('I'))

    // 54. Check if a string ends with a specific word using endsWith().
    // let chr = "I am FROM kanpur"
    // console.log(chr.endsWith('kanpur'))

    // 55. Replace a word in a sentence using replace().
    // let chr = "I am FROM kanpur"
    // console.log(chr.replace("kanpur", "New Delhi"))

});


