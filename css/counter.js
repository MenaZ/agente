/**
 * Represents a counter that remembers its value and can be used to count up.
 */
 
class Counter {
  constructor(){
    this.number = 0  //object.property
  }
current(){
this.number = 10 

}

next(){
this.number 
}

describe('Counter', function() {
  const assert = require("chai").assert;

  it('has the default initial value of 0', function() {
    let c = new Counter();
    assert.equal(c.current(), 0); //equalis een method  komt uit assert  
  });

  it('should accept an initial value', function() {
    let c = new Counter(10);
    assert.equal(c.current(), 10);
  });

  it('should remember its state', function() {
    let c = new Counter();
    assert.equal(c.current(), 0);
    assert.equal(c.next(), 1);
    assert.equal(c.current(), 1);

    c.next();
    assert.equal(c.current(), 2);
  });
});