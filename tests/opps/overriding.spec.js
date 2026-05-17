class A {
    Delhi() {

        console.log("I am from Delhi");
    }

    Noida() {
        console.log("I am from noida");

    }

}
class B extends A {
    Lucknow() {

        console.log("I am from Lucknow");
    }

    Jaipur() {
        console.log("I am from Jaipur");

    }
      Noida() {
        console.log("I am in noida");

    }


}


let object = new B();
object.Lucknow();
object.Jaipur();
object.Delhi();
object.Noida(); 

