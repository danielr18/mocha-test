#Mocha Test
Mocha is a testing library for Node.js, created to be a simple, extensible, and fast testing suite, making asynchronous testing simple and fun. Mocha tests run seriallInstall with npm:y, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
Source: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
##Installation
Install with npm:
```
$ npm install mocha
```
##Usage
We will update the test command in package.json to contain the following command
```json
{
  "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec"
  }
}
```
In order to run the tests simply execute
```
$npm test
```
##Syntaxis
###describe
describe the features that we are implementing by giving us a describe function that encapsulates our expectations.
```javascript
describe("Feature", function() {

});
```
###it
The it function is very similar to the describe function, except that we can only put expectations in the body of the it function.
```javascript
describe("Feature", function() {
    it("Expectation", function() {

    });
});
```
####done
For every it that needs to wait for a response value, inject a done callback function and call it only when the expectations were executed.
```javascript
var expect = require('chai').expect;
var request = require('request');
//...
describe("Feature", function() {
    it("Expectation", function() {
        request(url, function(error, response, body) {
            //Expectation
            done();
        });
    });
});
//...
```
