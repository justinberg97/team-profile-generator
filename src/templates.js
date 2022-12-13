const engineerTemplate = engineer => {
    return `
    <div>
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
    <div>Employee Id: ${id}</div>
    <div>Office Number: ${officeNumber}</div>

`

}

module_exports = {engineerTemplate, managerTemplate}