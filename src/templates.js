const internTemplate = intern => {
    const name = intern.name;
    const id = intern.employee_id;
    const email = intern.email;
    const school = intern.getSchool();
    const role = intern.getRole();
    
    return `
   
    <h2>${role.toUpperCase()}</h2>
    <div>Intern Name: ${name}</div>
    <div>Intern Id: ${id}</div>
    <div>Intern Email: ${email}</div>
    <div>Intern Schooling: ${school}</div>
    <div>Intern Role: ${role}</div>
   

`
}

const engineerTemplate = engineer => {
    const name = engineer.name;
    const id = engineer.employee_id;
    const email = engineer.email;
    const github = engineer.getGitHub();
    const role = engineer.getRole();
     
    return `

    <h2>${role.toUpperCase()}</h2>
    <div>Engineer Name: ${name}</div>
    <div>Engineer Id: ${id}</div>
    <div>Engineer Email: ${email}</div>
    <div>Engineer Github: ${github}</div>
    <div>Engineer Role: ${role}</div>

`
}

const managerTemplate = manager => {

    const name = manager.name;
    const id = manager.employee_id;
    const email = manager.email;
    const officeNumber = manager.getOfficeNumber();
    const role = manager.getRole();

    return `

    <h2>${role.toUpperCase()}</h2>
    <div>Manager: ${name}</div>
    <div>Mangager Id: ${id}</div>
    <div>Manager Email: ${email}</div>
    <div>Office Number: ${officeNumber}</div>
    <div>Manager Role: ${role}</div>

`

}

module.exports = {engineerTemplate, managerTemplate, internTemplate}