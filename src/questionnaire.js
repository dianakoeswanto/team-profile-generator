const inquirer = require('inquirer');

const isValidEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

const questions = [{
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of your team manager',
        validate: (input) => {
                return input ? true : "Please enter a valid name";
            }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the id of your team manager',
        validate: (input) => {
                return input && !isNaN(input) ? true : "Id must be a number";
            }   
    },
    {
        type: 'input',
        message: 'Please enter the email of your team manager',
        name: 'managerEmail',
        validate: (input) => {
            return input && isValidEmail(input) ? true : "Please check that email is in a valid format";
        }   
    },
];

const prompt = () => {
    return inquirer.prompt(questions);
}

const init = async () => {
    const answers = await prompt();
    console.log(answers);
}

init();
