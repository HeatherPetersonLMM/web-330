function Fruit (type, weight, price) {

    this.type = type;
    this.weight = weight;
    this.price = price;

}

Fruit.prototype.toString = function () {

    return " Customer purchased " + this.type + " weighing " + this.weight + " lbs, " + "costing $" + this.price + ".";

};

var berry = new Fruit ( "Strawberry", 0.5, "2.00");
var apple = new Fruit ( "Gala Apple", 1.0, "1.50");
var melon = new Fruit ( "Honeydew", 2.5, "4.00");

console.log( berry.toString() );
console.log( apple.toString() );
console.log( melon.toString() );