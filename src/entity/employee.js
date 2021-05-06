const ROLE = "Employee";

/**
 * Employee class
 */
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || ROLE;
    }

    /**
     * Returns name 
     */
    getName() {
        return this.name;
    }

    /**
     * Returns id
     */
    getId() {
        return this.id;
    }

    /**
     * Returns email 
     */
    getEmail() {
        return this.email;
    }

    /**
     * Returns role
     */
    getRole() {
        return this.role;
    }
}

module.exports = Employee;