const {
  sum 
} = require('./unit-testing');


describe('Unit testing', () => {
  test('add 1 + 3 should be equal 4', () => {
    expect(sum(1, 3)).toBe(4);
  })

  test('To be truthy', () => {
    expect(true).toBeTruthy();
  });
})
