/* The for principles of "this";
 in your own words. explain the four principle for the "this" keyword below.

 1. Global Binding - When 'this' is not bound to anything, it will default to the window object.
 2. Implicit Binding - When a property is located inside of an object, it points to the parent object which is usually to the left of the '.' at call time.
 3. Explicit Binding - When we specify what 'this' is using call, apply, bind.
 4. New Binding - When we use a constructor function to create a new object.

 write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const michael = {
  'name': 'michael',
  'browser': this.browser,
}
michael["browser"] = "Chrome";

michael.browser;

// Principle 2

// code example for Implicit Binding

const me = {
  name: 'Michael',
  class: 'FSW19',
  sayName: function() {
    console.log(this.name);
  }
}

me.sayName();

// Principle 3

// code example for New Binding

const Attraction = function(name, location) {
  this.name = name;
  this.location = location;
}

let skywalk = new Attraction('Glass Bridge', 'Grand Canyon');

skywalk.name;
skywalk.location;

// Principle 4

// code example for Explicit Binding

const sayName = function() {
  console.log('My name is ' + this.name);
};
const sayName2 = function(...languages) {
  console.log('My name is ' + this.name + ' with skills in ' + languages);
};

const Michael = {
	'name': 'Michael',
  'class': 'FSW19',
}

const languages = ['html', 'css', 'JS'];

// Call
sayName.call(Michael);

// Apply
sayName2.apply(Michael, languages);

// Bind
const newFn = sayName.bind(Michael);
newFn();
