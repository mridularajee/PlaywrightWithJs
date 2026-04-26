import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {


    class Person {

        pid:string;
        firstName:string;
        lastName:string;

        constructor(pid:string, firstName:string, lastName:string)
        {
            this.pid = pid;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        getFullName():string
        {
           // return `${this.pid} ${this.firstName}  ${this.lastName} `;

           return `${this.lastName}`;
        }

        
    }

    // Object Creation
    let obj = new Person('1001', 'Keshav', 'Kapoor');
    console.log(obj.getFullName());

    let obj1 = new Person('5001', 'Amit', 'Singh');
    console.log(obj1.getFullName());




  

});