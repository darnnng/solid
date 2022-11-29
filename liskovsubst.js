//without principle

class Bird {  
    fly(){
        //..
    }
}

class Eagle extends Bird {
    layEgg(){
        //..
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.layEgg();

class Penguin extends Bird(){
   // Can't fly! 
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

class Eagle extends FlyingBird {}

const eagle = new Eagle();
eagle.fly();
eagle.layEgg();