var header = require('../header.js'); 
/*
============================================
; Title:  Prototype Pattern
; Author: Professor Krasso 
; Date:   1 March 2018
; Modified By: Heather Peterson
; Description: Exercise 2.2
;===========================================
*/ 

var Person =  //creating a person object 
{
    getAge: function()  // creating an age function to return an age
    {
        return this.age;  //returns age
    }
};

var Heather = Object.create(Person, {  //creating a person object using the Person prototype
    "age":  //body creates age with a value of "31"
    {
        "value": "31"
    },
        "fullname":  //body creates a full name with a value of "Heather Peterson"
    {
        "value": "Heather Peterson"
    }
});

Heather.getAge();  //calling the getAge function of Heather object

console.log("The person's full name is: '%s'", Heather.fullname + "."); //outputs the full name value
console.log("The person's age is: '%s'", Heather.age + "."); //outputs the age value

//Output Results
//
//Heather Peterson
//Exercise 2.2
//Date: 03-01-2018
//
//The person's full name is: 'Heather Peterson.'
//The person's age is: '31.'