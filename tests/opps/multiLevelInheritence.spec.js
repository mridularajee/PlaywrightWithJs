// GreatGrandFather- Mumbai
// GrandFather- Pune
// Father- Kashmir
// Child- Noida
class GreatGrandFather {
       mumbai () {

            console.log("GGF HAVE PROPERTY IN MUMBAI");
        }
    }
    class GrandFather extends GreatGrandFather {

       pune() {

            console.log("GrandFather HAVE PROPERTY IN PUNE");
        }
    }
 class  Father extends GrandFather{

       kashmir() {

            console.log("FATHER HAVE PROPERTY IN KASHMIR");
        }


    }
      class Child extends Father {

       noida() {

            console.log("CHILD HAVE PROPERTY IN NOIDA");
        }
     }

    let obj = new Child();
    obj.noida();
     obj. kashmir()
     obj. mumbai()
     obj. pune()
     
    






