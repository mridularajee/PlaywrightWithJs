import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {


    class Hello1 {

     
        add(a:number, b:number):number;
        add(a:string, b:string):string;


        add(a: any, b: any):any
        {
            return a + b;
        }


    }

    let obj  = new Hello1();
    console.log(obj.add(10,20));
    console.log(obj.add("Madhav","Mathura"));









});