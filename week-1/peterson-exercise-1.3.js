var header = require('../header.js'); 
/*
============================================
; Title:  Program Header
; Author: Professor Krasso 
; Date:   20 January 2018
; Modified By: Heather Peterson
; Description: Exercise 1.3 - Function Class and Object Literal
;===========================================
*/ 

/*
FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/


// start program


function Cellphone(manufacturer, model, color, price) {  // Declaring the function 'Cellphone' with 4 properties
    this.manufacturer = manufacturer;  // 'this' constructor for properties
    this.model = model;  
    this.color = color;
    this.price = price;

    console.log("-- DISPLAYING CELL PHONE DETAILS --"); // logs Header 

    this.getPrice = function() {  // getPrice function returns the 'Cellphone' price
        return this.price;
    };

    this.getModel = function() { // getModel function returns the 'Cellphone' model
        return this.model;
    };

    this.getDetails = function () {  // getDetails outputs the properties of the 'Cellphone' object
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: $" + this.getPrice();
    }
}

var iPhone = new Cellphone("Apple", "iPhone 8", "Gold", "899.99") // variable created to represent the new 'Cellphone' object
console.log(iPhone.getDetails());  // logs variable and getDetails function from 'Cellphone' object

//End Program

//Output Results
//Heather Peterson
//Exercise 1.3
//Date: 02-20-2018

//-- DISPLAYING CELL PHONE DETAILS --
// Manufacturer: Apple
// Model: iPhone 8
// Color: Gold
// Price: $899.99

