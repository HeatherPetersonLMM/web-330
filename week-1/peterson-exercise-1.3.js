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


function Cellphone(manufacturer, model, color, price) {  //Declaring the function 'Cellphone'
    this.manufacturer = manufacturer;  // 'this' constructor for 'details'
    this.model = model;  // 'this' dot syntax to add keys and values
    this.color = color;
    this.price = price;

    console.log("-- DISPLAYING CELL PHONE DETAILS --"); // logs Header 

    this.getPrice = function() { 
        return this.price;
    };

    this.getModel = function() { 
        return this.model;
    };

    this.getDetails = function () {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: $" + this.getPrice();
    }
}

var iPhone = new Cellphone("Apple", "iPhone 8", "Gold", "899.99")
console.log(iPhone.getDetails());

//End Program

//Output Results
//Heather Peterson
//Exercise 1.3
//Date: 02-20-2018

//-- DISPLAYING CELL PHONE DETAILS --
// Manufacturer: T-Mobile
// Model: Iphone 8
// Color: Gold
// Price: $899.99

