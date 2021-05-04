const Employee = require("./employee");

const ROLE = "Intern";

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return ROLE;
    }
}

module.exports = Intern;