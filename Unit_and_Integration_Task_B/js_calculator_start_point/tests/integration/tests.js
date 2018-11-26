var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should update the display of the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('234');
  });

  it('should display the result of arithmetical operations', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  it('should be able to chain multiple operations together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('50');
  });

  it('should output negative numbers correctly', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  });

  it('should output decimals correctly', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.3333333333333333');
  });

  it('should output very large numbers correctly', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number7')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4333333333333372');
  });


  it('should display error when dividing by 0', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();      element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Not a number');
  });

// If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).

});
