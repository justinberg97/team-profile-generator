const Employee = require('../lib/Employee');

test('Can create a new employee object', () => {
    const employee = new Employee();
    expect (typeof(employee)).toBe('object');
});



test('Can set name in employee object', () => {
    const employee = new Employee("Justin");
    expect(employee.name).toBe("Justin")
});

test('Can set employee object_id in employee object', () => {
    const employee = new Employee("Justin", 13);
    expect(employee.employee_id).toBe(13);
});


test('Can set email in employee object', () => {
    const employee = new Employee("Justin", 13, "justin@gmail.com");
    expect(employee.email).toBe("justin@gmail.com");
});


test('Can get name from getName() method', () => {
    const employee = new Employee("Justin", 13, "justin@gmail.com")
    expect(employee.getName()).toBe("Justin")
})
