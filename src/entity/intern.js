const Employee = require("./employee");

const ROLE = "Intern";

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, ROLE);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;