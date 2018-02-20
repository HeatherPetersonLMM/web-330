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


function Cellphone(details) {
    this.details = details;
    this.manufacturer = "T-Mobile";
    this.model = "Iphone 8";
    this.color = "Gold";
    this.price = "$" + 899.99;

    console.log("-- DISPLAYING CELL PHONE DETAILS --");

    this.getDetails = function() {
        return this.details + " Manufacturer: " + this.manufacturer + "\n" + " Model: " + this.model + "\n" + " Color: " + this.color + "\n" + " Price: " + this.price;
    };
}
var cellphone = new Cellphone("");

console.log(cellphone.getDetails());

