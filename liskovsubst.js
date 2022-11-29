//without principle

class Bird {  
    fly(){
        //..
    }
    layEgg(){
        //..
    }
    swim() {
        //..
    }
}

class Penguin extends Bird(){
   // Penguins can't fly! 
}

// with principle

class Bird {
    layEgg () {}
  }
  
class FlyingBird extends Bird {
    fly () {}
}
  
class SwimmingBird extends Bird {
    swim () {}
}

class Penguin extends SwimmingBird {}

const penguin = new Penguin();
penguin.swim();
penguin.layEgg();
