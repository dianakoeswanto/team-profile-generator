const Employee = require("./employee");

const ROLE = "Manager";

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, ROLE);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;