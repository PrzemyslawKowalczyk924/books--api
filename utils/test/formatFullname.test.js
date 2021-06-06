const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is undefined', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(null)).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" format is different then <firstName> <lastName>', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return good "fullName" format if proper args', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOHN dOE')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
  });

});