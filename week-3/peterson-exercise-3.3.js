var header = require('../header.js');

/*
============================================
; Title:  The Singleton Pattern
; Author: Professor Krasso 
; Date:   7 March 2018
; Modified By: Heather Peterson
; Description: Exercise 3.3
;===========================================
*/ 

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {  // DatabaseSingleton object with function
    var instance;  // creating an instance object

    function createInstance() {  // createInstance() function
        var postgresDatabase = new Object("Database instance initialized!");  // adds a new object to postgresDatabase
        return postgresDatabase; //  returns postgresDatabase object
    }

    return { 
        getInstance: function() {  //returns single function called getInstance
            if (!instance) {  //checks to see if the current instance is active
                instance = createInstance();  //if current instance is not active, creates createInstance()
            }
            return instance;  //returns the instance of this object
        }
    }
})();

function databaseSingletonTest() {  // databaseSingletonTest() function 
    var oracle = DatabaseSingleton.getInstance();  // oracle database instance calling DatabaseSingleton class and getInstance method
    var postgres = DatabaseSingleton.getInstance(); // postgres database instance calling DatabaseSingleton class and getInstance method

    console.log("Same database instance? %s", oracle === postgres);  // logs comparison between oracle and postgres objects whether they are the same or different
}

databaseSingletonTest();  // calls the databaseSingletonTest function and ouputs test results

// end program


//Output results

//Heather Peterson
//Exercise 3.3
//Date: 03-09-2018
//
//Same database instance? true