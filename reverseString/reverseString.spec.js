const reverseString = require('./reverseString')

describe('reverseString', function() {
  it('reverses two letters', function() {
    expect(reverseString('he')).toEqual('eh');
  });

  it('reverses single word', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('reverses multiple words', function() {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  it('works with numbers and punctuation', function() {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
});
