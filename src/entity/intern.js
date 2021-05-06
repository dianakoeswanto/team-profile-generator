const Employee = require("./employee");

const ROLE = "Intern";

/**
 * Intern class extending from Employee
 */
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, ROLE);
        this.school = school;
    }

    /**
     * Returns school information
     */
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;