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


function Cellphone(details) {  //Declaring the function 'Cellphone'
    this.details = details;  // 'this' constructor for 'details'
    this.manufacturer = "T-Mobile"; // 'this' dot syntax to add kes and values
    this.model = "Iphone 8";
    this.color = "Gold";
    this.price = "$" + 899.99;

    console.log("-- DISPLAYING CELL PHONE DETAILS --"); // logs Header 

    this.getDetails = function() { //returns details from 'Cellphone' function
        return this.details + " Manufacturer: " + this.manufacturer + "\n" + " Model: " + this.model + "\n" + " Color: " + this.color + "\n" + " Price: " + this.price;
    };
}
var cellphone = new Cellphone(""); //Variable 'cellphone' declaring new operator 'Cellphone'

console.log(cellphone.getDetails()); // logs 'cellphone' details 

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

