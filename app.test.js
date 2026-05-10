const multiply = require('./app');

test('2 x 5 = 10', () => {
    expect(multiply(2, 5)).toBe(10);
});