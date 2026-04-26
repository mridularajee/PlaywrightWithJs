import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {

    class Person {

        name: string = "Keshav";  // class variable
        static companyName: string = "IBM"; // // Static variable


        hello1() {
            let age1: number = 25; // Local variable
            console.log("This is hello1 Function");
            console.log(age1);
            console.log(this.name);

            console.log(Person.companyName);

        }

        hello2() {
            let age2: number = 40;
            console.log("This is hello2 Function");
            //console.log(age1);
            console.log(age2);
            console.log(this.name);
        }

    }

    let nitesh = new Person();
    nitesh.hello1();
    console.log(Person.companyName);




});