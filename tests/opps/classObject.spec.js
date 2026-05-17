const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {

    class Employee{
        house(){
            console.log("employee have rented home")
        }
    }

    // create object of class
    let emp = new Employee()
    emp.house()
});