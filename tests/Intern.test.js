const Intern = require('../lib/Intern');

test('Can create a new Intern object', () => {
    const intern = new Intern();
    expect (typeof(intern)).toBe('object');
});



test('Can set name in Intern object', () => {
    const intern = new Intern("Justin");
    expect(intern.name).toBe("Justin")
});

test('Can set Intern object_id in Intern object', () => {
    const intern = new Intern("Justin", 13);
    expect(intern.employee_id).toBe(13);
});


test('Can set email in employee object', () => {
    const intern = new Intern("Justin", 13, "justin@gmail.com");
    expect(intern.email).toBe("justin@gmail.com");
});


test('Can get school from getSchool() method', () => {
    const intern = new Intern("Justin", 13, "justin@gmail.com")
    expect(intern.getSchool()).toBe("Justin")
})