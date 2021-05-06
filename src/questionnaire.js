const inquirer = require('inquirer');
const Engineer = require('./entity/engineer');
const Intern = require('./entity/intern'); 

const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

const employeeQuestions = (role) => {
    return [
        {
            type: 'input',
            name: 'name',
            message: `Please enter ${role}'s name`,
            validate: (input) => {
                    return input ? true : "Please enter a valid name";
                }
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter the ${role}'s id`,
            validate: (input) => {
                    return input && !isNaN(input) ? true : "Id must be a number";
                }   
        },
        {
            type: 'input',
            message: `Please enter the ${role}'s email`,
            name: 'email',
            validate: (input) => {
                return input && isValidEmail(input) ? true : "Please check that email is in a valid format";
            }   
        }
    ];
}

const teamMemberOptionQuestion = [
    {
        type: 'list',
        name: 'option',
        message: 'Choose a member that you would like to add',
        choices: ['Engineer', 'Intern', 'Done']
    },
];

const teamManagerQuestions = [
    ...employeeQuestions("Team Manager"), 
    {
        type: 'input',
        message: 'Please enter the office number of your team manager (no spaces)',
        name: 'officeNumber',
        validate: (input) => {
            return input && !isNaN(input) ? true : "Office number must only contain digits";
        }
    }
];

const engineerQuestions = [
    ...employeeQuestions("Engineer"), 
    {
        type: 'input',
        message: "Please enter the engineer's github account name",
        name: 'github',
        validate: (input) => {
            return input ? true : "Please enter a github account";
        } 
    }
];

const internQuestions = [
    ...employeeQuestions("Intern"),
    {
        type: 'input',
        message: "Please enter the intern's school",
        name: 'school',
        validate: (input) => {
            return input ? true : "Please enter a school name";
        }   
    }
];

const askTeamManagerDetails = () => {
    return inquirer.prompt(teamManagerQuestions);
}

const askEngineerDetails = () => {
    return inquirer.prompt(engineerQuestions);
}

const askInternDetails = () => {
    return inquirer.prompt(internQuestions);
}

const askTeamMemberRole = () => {
    return inquirer.prompt(teamMemberOptionQuestion);
}

const askTeamMemberDetails = async (team) => {
    let askAnother = true;

    while(askAnother) {
        const role = await askTeamMemberRole();
    
        if(role.option === "Engineer") {
            const answer = await askEngineerDetails();
            const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            team.addEngineer(engineer);
        } else if(role.option === "Intern") {
            const answer = await askInternDetails();
            const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            team.addIntern(intern);
        } else {
            askAnother = false;
        }
    }
}
module.exports = {askTeamManagerDetails, askTeamMemberDetails}
