function myFunction() {
    console.log('Calling custom Function');
}
   
var myString = 'This is a String import from custom module1';

module.exports.myFunction = myFunction;
module.exports.myString = myString;


