import { test, expect } from '@playwright/test';
test('Test1', async ({ page }) => {


    class Hello1 {


        add(a: number, b: number): number;
        add(a: string, b: string): string;
        add(a: string, b: string, c: string): string;
        add(a: number, b: number, c: number): number;



        add(a: any, b: any, c?: any): any {

            if (c !== undefined) {
                return a + b + c;
            }
            else {
                return a + b;
            }



        }


    }

    let obj = new Hello1();
    
    console.log(obj.add(10, 20));
    console.log(obj.add(" Madhav ", " Mathura "));

    console.log(obj.add(10, 20, 30));
    console.log(obj.add(" Krishna ", " Madhav ", " Keshav "));









});