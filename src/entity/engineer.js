const Employee = require("./employee");

const ROLE = "Engineer";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, ROLE);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;