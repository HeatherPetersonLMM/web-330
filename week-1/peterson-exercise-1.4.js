var header = require('../header.js'); 
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   23 February 2018
; Modified By: Heather Peterson
; Description: Exercise 1.4 - Duck Typing, A.K.A "Interfaces"
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model) //creating a Car function with model property
{
    this.model = model;
}

Car.prototype.start = function() //creating a prototype function 'start' that outputs a text value
{
    console.log("Car added to the racetrack!");  //logs text value
}

function Truck(model, year) //creating a truck function with model and year property
{
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function()  //creating a prototype function 'start' that outputs a text value
{
    console.log("Truck added to the racetrack!");  //logs text value
}

function Jeep(model, year, color)  //creating a jeep function with model, year, and color property
{
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function()  //creating a prototype function 'start' that outputs a text value
{
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];  //creating a race track array

function driveIt(vehicle)  //driveIt function that accepts 'vehicle' as a parameter
{
    vehicle.start();  //calls the vehicle.start prototype
    racetrack.push(vehicle);  //pushes vehicle to the racetrack
}

var civic = new Car("Civic");  //creating vehicle object
var ram150 = new Truck("Ram 150", "2018");  //creating vehicle object
var cherokee = new Jeep("Cherokee", "2017", "Black");  //creating vehicle object

console.log("");  //line-break

driveIt(civic);  //call the driveIt function to pass vehicle object
driveIt(ram150);  //call the driveIt function to pass vehicle object
driveIt(cherokee);  //call the driveIt function to pass vehicle object

console.log('\n -- The following vehicles have been added to the racetrack --');  // logs text value
    for (var i = 0; i < racetrack.length; i++)  //for-loop to output the contents of the racetrack array
    {
        console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);  //logs the racetrack array by all the names of the objects created
    }


// Output results

//Car added to the racetrack!
//Truck added to the racetrack!
//Jeep added to the racetrack!

//-- The following vehicles have been added to the racetrack --
//Car: Civic
//Truck: Ram 150
//Jeep:  Cherokee
