import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {


    class Person {


        test1() {

            console.log("I am Test1 Function");
        }

        test2(a: number) {

            console.log("I am Test2 Function");

        }

        test3(a: number, b: number) {
            console.log("I am Test3 Function");
            console.log(a);
            console.log(b);

            let c = a + b;
            console.log("SUM  =" +c);


        }

    }

    // Object Creation
    let obj = new Person();
    obj.test1();
    obj.test2(10);
    obj.test3(500, 700);




});