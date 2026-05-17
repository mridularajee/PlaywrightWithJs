class A {
    delhi() {

        console.log("I am from Delhi");
    }
}
class B extends A {
    lucknow() {
        super.Delhi();

        console.log("I am from Lucknow");
    }
    delhi() {

        console.log("I am in Delhi");
    }
} 
let object = new B();
object.lucknow();
object.delhi();
 



