var expect = require('chai').expect;


var QUARTIC = require('../quartic.js');

var complex = QUARTIC.ComplexNumber;

var solveQuartic = QUARTIC.solve;


describe('Quartic solver', function() {
  it('should find the correct roots of the equation', function() {
    
    var roots = solveQuartic(5,4,3,2,1);
    
    expect(roots[0].getRounded(6)).to.deep.equal(new complex( 0.137832,  0.678154));
    expect(roots[1].getRounded(6)).to.deep.equal(new complex(  0.137832, -0.678154));
    expect(roots[2].getRounded(6)).to.deep.equal(new complex( -0.537832,  0.358285));
    expect(roots[3].getRounded(6)).to.deep.equal(new complex( -0.537832, -0.358285));
  });


  it('should find the correct roots of mixed real and imaginary', function() {

    var roots = solveQuartic(-5,2,0,100,-65);
    
    expect(roots[0].getRounded(5)).to.deep.equal(new complex( 0.65354,  0));
    expect(roots[1].getRounded(5)).to.deep.equal(new complex( -1.43069, 2.36237));
    expect(roots[2].getRounded(5)).to.deep.equal(new complex( -1.43069,  -2.36237));
    expect(roots[3].getRounded(5)).to.deep.equal(new complex(  2.60783, 0));
    
  });


  it('should handle zeros in top coeff',function(){
    var roots = solveQuartic(0,1,1,1,1);

     expect(roots.length).to.equal(3);
     expect(roots[0].getRounded(5)).to.deep.equal(new complex( 0,  1));
     expect(roots[1].getRounded(5)).to.deep.equal(new complex( 0,  -1));
     expect(roots[2].getRounded(5)).to.deep.equal(new complex( -1,  0));
     

    
  })

});


