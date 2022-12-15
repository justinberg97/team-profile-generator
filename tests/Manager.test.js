const Manager = require('../lib/Manager');

test('Can create a new manager object', () => {
    const manager = new Manager();
    expect (typeof(manager)).toBe('object');
});



test('Can set name in employee object', () => {
    const manager = new Manager("Justin");
    expect(manager.name).toBe("Justin")
});

test('Can set manager object_id in manager object', () => {
    const manager = new Manager("Justin", 13);
    expect(manager.employee_id).toBe(13);
});


test('Can set email in manager object', () => {
    const manager = new Manager("Justin", 13, "justin@gmail.com");
    expect(manager.email).toBe("justin@gmail.com");
});


test('Can get role from getRole() method', () => {
    const manager = new Manager("Justin", 13, "justin@gmail.com",)
    expect(manager.getName()).toBe("")
})