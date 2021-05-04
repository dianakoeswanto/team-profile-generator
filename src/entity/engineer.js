const Employee = require("./employee");

const ROLE = "Engineer";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return ROLE;
    }
}

module.exports = Engineer;