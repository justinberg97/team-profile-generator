const Engineer = require('../lib/Engineer');

test('Can create a new engineer object', () => {
    const engineer = new Engineer();
    expect (typeof(engineer)).toBe('object');
});


test('Can set name in engineer object', () => {
    const engineer = new Engineer("Justin");
    expect(engineer.name).toBe("Justin")
});

test('Can set engineer object_id in engineer object', () => {
    const engineer = new Engineer("Justin", 13);
    expect(engineer.employee_id).toBe(13);
});


test('Can set email in engineer object', () => {
    const engineer = new Engineer("Justin", 13, "justin@gmail.com");
    expect(engineer.email).toBe("justin@gmail.com");
});


test('Can get github from getGitHub() method', () => {
    const engineer = new Engineer("Justin", 13, "justin@gmail.com", "Justin")
    expect(engineer.getGitHub()).toBe("Justin")
})