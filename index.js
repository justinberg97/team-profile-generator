const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');

const templates = require('./src/templates')

const DIST = path.resolve(__dirname, 'dist');
const PATH = path.join(DIST, 'team.html');


const team = [];

function main() {
    createManager().then(answers => {
        const { managerName, managerID, managerEmail, managerOfficeNumber } = answers;
        const manager = new Manager(
            managerName,
            managerID,
            managerEmail,
            managerOfficeNumber
        )
        team.push(manager)
    })

}

function createManager() {
    console.log('Let\'s start building your team');
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the team manager name?'
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'What is the manager\'s id?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the manager\'s email?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the manager\'s office number?'
            }


        ])
      
        }
        


function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberChoice',
            message: 'Which type of team member would you like to add?',
            choices: ['Intern,', 'Engineer', 'I have finished my team']
        }
    ]).then(answer => {
        switch (answer.teamMemberChoice) {
            case 'Engineer':
                createEngineer().then(answers => {
                    const { engineerName, engineerID, engineerEmail, gihub} = answers;
                })
                break;
                
            case 'Intern':
                break;

            default:
                buildTeam();
        }
        
    })
}



function createHTML(teamArr) {
    let htmlMain = '';

    teamArr.forEach(teamMember => {
        if (teamMember.getRole() === "Manager") {
            htmlMain = htmlMain + templates.managerTemplate(teamMember);
        }
    })
}

function buildTeam() {
    fs.writeFileSync(PATH, createHTML(team), 'utf-8');
}

main()


