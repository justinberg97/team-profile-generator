const Employee = require('../Employee');

test('Can create a new employee object', () => {
    const employee = new Employee();
    expect (typeof(employee)).toBe('object');
});






