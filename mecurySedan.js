//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
       super(make, model, year, color, mileage)
       this.maximumPassengers = 5;
       this.passenger = 0;
       this.numberOfWheels = 4;
       this.maximumSpeed = 160;
       this.fuel = 10;
       this.scheduleService = false; 
    }

    loadPassenger(num){
        if(num + this.passenger < this.maximumPassengers){
             this.passenger = num;
             return this.passenger;
            
        }
        else {
            console.log("sorry were out of room")
        }
    }
    start(){
        if(this.fuel > 0){
            return this.start == true
        }
        else{
            console.log("were out of gas")
        }
    }
    scheduleService(mileage){
        if(this.mileage > 30000){
           return this.scheduleService == true
        }
        else {
            console.log("she's good for another 100")
        }
    }
}





//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)
