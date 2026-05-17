class Father{
    
    property(){
        console.log("Father have property in Chennai")
    }
}

class Mridula extends Father{
    propertyMridula(){
        console.log("Father gave his property to Mridula")
    }

}

let obj = new Mridula()
obj.propertyMridula()


