const Employee = require("./employee");

const ROLE = "Manager";

/**
 * Manager class extending from Employee
 */
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, ROLE);
        this.officeNumber = officeNumber;
    }

    /**
     * Returns office number 
     */
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;