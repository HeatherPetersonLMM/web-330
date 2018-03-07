var header = require('../header.js'); 
/*
============================================
; Title:  The Factory Pattern
; Author: Professor Krasso 
; Date:   6 March 2018
; Modified By: Heather Peterson
; Description: Exercise 3.2
;===========================================
*/ 

function Postgres(properties) {  // creating function class Postgres database with properties array
    this.username = properties.username || "admin";  //adding property and value to username
    this.password = properties.password || "s3cret";  //adding property and value to password
    this.server = properties.server || "localhost:5432";  //adding property and value to server
}

function MySql(properties) {  // creating function class MySql database with properties array
    this.username = properties.username || "ca-admin";  //adding property and value to username
    this.password = properties.password || "ca-s3cret";  //adding property and value to password
    this.server = properties.server || "localhost:8000";  //adding property and value to server
    this.version = properties.version || 5.7  //adding property and value to version

}

function Oracle (properties) {  // creating function class Oracle database with properties array
    this.username = properties.username || 'admin';  //adding property and value to username
    this.password = properties.password || 'o-s3cret';  //adding property and value to password
    this.server = properties.server || 'localhost:5454';  //adding property and value to server
    this.version = properties.version || '10g'  //adding property and value to version
}

function Informix(properties) {  // creating function class Informix database with properties array
    this.username = properties.username  || 'admin';  //adding property and value to username
    this.password = properties.password || 'in-s3cret';  //adding property and value to password
    this.server = properties.server || 'localhost:3030';   //adding property and value to server
}

function DatabaseFactory() {}  //creating function class DatabaseFactory

DatabaseFactory.prototype.databaseClass = MySql;  //copying the DatabaseFactory to databaseClass MySql
DatabaseFactory.prototype.createDatabase = function(properties) {  //copying the DatabaseFactory function and creating createDatabase with a function that has a properties array
  if (properties.databaseType === "Postgres") {  //checks if database type is Postgres
      this.databaseClass = Postgres;  //if database type is Postgres, then it is assigned to the databaseClass property
  } 
  if (properties.databaseType === 'MySql') {  //checks if database type is MySql
      this.databaseClass = MySql;  //if database type is MySql, then it is assigned to the databaseClass property
  }

  if (properties.databaseType === 'Oracle') {  //checks if database type is Oracle
      this.databaseClass = Oracle;  //if database type is Oracle, then it is assigned to the databaseClass property
  }

  if (properties.databaseType == 'Informix') {  //checks if database type is Informix
      this.databaseClass = Informix;  //if database type is Informix, then it is assigned to the databaseClass property
  }

  return new this.databaseClass(properties);  //returns the properties of the newly created databaseClass properties
};

var postgresFactory = new DatabaseFactory();  //adds a new DatabaseFactory object Postgres
var postgres = postgresFactory.createDatabase({ //calls the createDatabase function with 3 assigned values
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();  //adds a new DatabaseFactory object mySql
var mySql = mySqlFactory.createDatabase({  //calls the createDatabase function with 3 assigned values
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();  //adds a new DatabaseFactory object oracle
var oracle = oracleFactory.createDatabase({  //calls the createDatabase function with 3 assigned values
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

var informixFactory = new DatabaseFactory();  //adds a new DatabaseFactory object informix
var informix = informixFactory.createDatabase({  //calls the createDatabase function with 3 assigned values
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

console.log(postgres);  //outputs values
console.log(mySql);  //outputs values
console.log(oracle);  //outputs values
console.log(informix);  //outputs values


//Output results
//
//Heather Peterson
//Exercise 3.2
//Date: 03-07-2018
//
//>Postgres {username: "admin", password: "SuperSecret", server: "localhost:5432"}
//>MySql {username: "default", password: "password", server: "localhost:8000", version: 5.7}
//>Oracle {username: "admin", password: "admin", server: "localhost:5454", version: "10g"}
//>Informix {username: "admin", password: "password", server: "localhost:3030"}