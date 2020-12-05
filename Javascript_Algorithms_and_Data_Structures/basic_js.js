//  push()
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
////////////////////////////////////////////////////

// pop()
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
////////////////////////////////////////////////////

// shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
////////////////////////////////////////////////////

// unshift()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
////////////////////////////////////////////////////


// Accessing object propertites with dot notation
var myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  var prop1val = myObj.prop1; // val1
  var prop2val = myObj.prop2; // val2
  
// Accessing object propertites with braket notation
  var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  myObj["Space Name"]; // Kirk
  myObj['More Space']; // Spock
  myObj["NoSpace"];    // USS Enterprise

  // Accessing object propertites with variables
  var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  myObj["Space Name"]; // Kirk
  myObj['More Space']; // Spock
  myObj["NoSpace"];    // USS Enterprise

  var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
  console.log(someObj[someProp]); // "John"

  delete someObj.propName// para remover uma propriedade de um objeto
  
  // gerador aleatoeio de numero dentro de uma faixa 
  Math.floor(Math.random() * (max - min + 1)) + min