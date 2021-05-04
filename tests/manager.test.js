const { it, expect } = require("@jest/globals");
const Manager = require('../src/entity/manager');

describe("Manager", () => {
    it("can instantiate given name, id, email", () => {
        const manager = new Manager("manager Name", 1, "manager@example.com");

        expect(manager).toBeDefined();
    });

    it("can set school via constructor", () => {
        const manager = new Manager("Manager Name", 1, "manager@example.com", "89187777");

        expect(manager).toBeDefined(); 
        expect(manager.officeNumber).toEqual("89187777");
    });

    it("getRole() should return 'Manager'", () => {
        const manager = new Manager("Manager Name", 1, "manager@example.com", "89187777");

        expect(manager.getRole()).toEqual("Manager");
    });

    it("can get school via getSchool()", () => {
        const manager = new Manager("Manager Name", 1, "manager@example.com", "89187777");

        expect(manager.getOfficeNumber()).toEqual("89187777");
    });
});