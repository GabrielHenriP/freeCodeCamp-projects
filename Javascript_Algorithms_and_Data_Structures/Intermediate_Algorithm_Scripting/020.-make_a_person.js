/**
 * Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */
// minha solução 
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let f = firstAndLast.split(' ')[0];
  let l = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return f;
  };
  this.getLastName = function() {
    return l;
  };
  this.getFullName = function() {
    return `${f} ${l}`;
  };
  this.setFirstName = function(name) {
    f = name;
  };
  this.setLastName = function(name) {
    l = name;
  };
  this.setFullName = function(name) {
    f = name.split(' ')[0];
    l = name.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');

// solução do freecode
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");

