import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {



class Test1
{

     formFillup(name:string, age?:number)
     {

        console.log("I am formFillup Function");
        console.log(name);

        if(age !== undefined)
        {
            console.log(age);
        }
        else{
            console.log("No Ieda of Age, Mom se puchh karke bataungaa");
        }
        

     }


}


let obj = new Test1();
obj.formFillup("Keshav", 126);
obj.formFillup("Madhav");

    




});