let Car1 = {
    make : "Toyota",
    model : "Camry",
    year : "2020",

    start : function(){
         return `${this.make} car started in ${this.year}`;
    },
}

console.log(Car1.start());

function Person(name , age){
     this.name  = name;
     this.age = age;
}

let John = new Person("John Doe", 20);
console.log(John.name);

function Animal(type){
     this.type = type;
}

Animal.prototype.speak = function(){
     return `${this.type} makes a sound`;
}

Array.prototype.hitesh = function(){
     return `Custom message ${this}`;
}

let myArray = [1,2,3,4];
console.log(myArray.hitesh());

let myNewArray = [1,2,3,4, 5, 6];
console.log(myNewArray.hitesh());



class Vehicle{
     constructor(make, model){
          this.make = make;
          this.model = model;
     }

     start(){
         return `${this.model} is car from ${this.make}`;
     }
};


class Car extends Vehicle{
      drive(){
         return `${this.make} this is an inheritance example`;
      }
};

let myCar = new Car("Toyota", "Corolla");
 console.log(myCar.start());
 console.log(myCar.drive());

 let vecOne = new Vehicle("Toyota", "Corolla");
 console.log(vecOne.make);
