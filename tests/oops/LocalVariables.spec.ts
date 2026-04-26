
import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {


    class Person {
        a = 10;
        b = "Keshav";

        test1() {
            let m = 200;
            console.log("I am Test1 Function");
            console.log(m);
            
        }

        test2() {
             let n = 100;
            console.log("I am Test2 Function");
             console.log(n);
        }

    }

    // Object Creation
    let obj = new Person();
    obj.test1();
    obj.test2();
    console.log(obj.a);
    console.log(obj.b);



});