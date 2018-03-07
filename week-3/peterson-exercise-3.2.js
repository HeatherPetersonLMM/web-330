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

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7

}

function Oracle (properties){
    this.username = properties.username || 'admin';
    this.password = properties.password || 'o-s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g'
}

function Informix(properties) {
    this.username = properties.username  || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030'; 
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
      this.databaseClass = Postgres;
  } 
  if (properties.databaseType === 'MySql') {
      this.databaseClass = MySql;
  }

  if (properties.databaseType === 'Oracle') {
      this.databaseClass = Oracle;
  }

  if (properties.databaseType == 'Informax') {
      this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

console.log(postgres instanceof Postgres);
console.log(postgres);

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

var informixFactory = new DatabaseFactory();
var informax = informixFactory.createdDatebase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

console.log(mySql instanceof MySql);
console.log(mySql);
console.log(oracle);
console.log(informix);
