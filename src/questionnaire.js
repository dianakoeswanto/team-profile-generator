const inquirer = require('inquirer');
const Engineer = require('./entity/engineer');
const Intern = require('./entity/intern'); 

/**
 * Returns true if email is in a valid format, otherwise false. 
 */
const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

/**
 * Questions definition relating to an employee
 */
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

/**
 * Question that asks user which team member they would like to add
 */
const teamMemberOptionQuestion = [
    {
        type: 'list',
        name: 'option',
        message: 'Choose a member that you would like to add',
        choices: ['Engineer', 'Intern', 'Done']
    },
];

/**
 * Questions definition relating to a team manager
 */
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

/**
 * Questions definition relating to a team member of type engineer
 */
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

/**
 * Questions definition relating to a team member of type intern
 */
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

/**
 * Prompts user with details of the team manager 
 */
const askTeamManagerDetails = () => {
    return inquirer.prompt(teamManagerQuestions);
}

/**
 * Prompts user with details of an engineer
 */
const askEngineerDetails = () => {
    return inquirer.prompt(engineerQuestions);
}

/**
 * Prompts user with details of an intern
 */
const askInternDetails = () => {
    return inquirer.prompt(internQuestions);
}

/**
 * Prompts user what role they would like to add in their team
 */
const askTeamMemberRole = () => {
    return inquirer.prompt(teamMemberOptionQuestion);
}

/**
 * Repeatedly prompts user about their team member (engineer or intern) until user selects Done.
 */
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
