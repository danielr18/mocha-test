#Mocha Test
Mocha is a testing library for Node.js, created to be a simple, extensible, and fast testing suite, making asynchronous testing simple and fun. Mocha tests run seriallInstall with npm:y, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
Source: https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
##Installation
Install with npm:
```
$ npm install -g mocha
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
```ShellSession
$npm test
```
###describe
Mocha gives us the ability to describe the features that we are implementing by giving us a describe function that encapsulates our expectations. The first argument is a simple string that describes the feature, while the second argument is a function that represents the body of the description.
```javascript
describe("Feature", function() {

});
```
###it
We will set up a concrete thing we are testing using the it feature. The it function is very similar to the describe function, except that we can only put expectations in the body of the it function. Let's use it for our color converter:
```javascript
describe("Feature", function() {
    it("Expectation", function() {

    });
});
```
