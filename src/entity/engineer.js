const Employee = require("./employee");

const ROLE = "Engineer";

/**
 * Engineer class extending from Employee
 */
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, ROLE);
        this.github = github;
    }

    /**
     * Returns github account
     */
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;