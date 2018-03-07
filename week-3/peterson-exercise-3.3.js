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

var DatabaseSingleton = (function() {
    var instance;

    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest() {
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s", oracle === postgres);
}

databaseSingletonTest();

// end program