const { it, expect } = require("@jest/globals");
const Employee = require('../src/entity/employee');

describe("Engineer", () => {
    it("should instantiate employee instance", () => {
        const employee = new Employee();

        expect(employee).toBeDefined();
    });

    it("can set name via constructor arguments", () => {
        const employee = new Employee("Diana");

        expect(employee).toBeDefined();
        expect(employee.name).toEqual("Diana");
    });

    it("can set id via constructor argument", () => {
        const employee = new Employee("Diana", 12);

        expect(employee).toBeDefined();
        expect(employee.id).toEqual(12);
    });

    it("can set email via constructor argument", () => {
        const employee = new Employee("Diana", 12, "d.koeswanto@example.com");

        expect(employee).toBeDefined();
        expect(employee.email).toEqual("d.koeswanto@example.com");
    });

    it("can get name via getName", () => {
        const employee = new Employee("Diana", 12, "d.koeswanto@example.com");

        expect(employee.getName()).toEqual("Diana");
    });

    it("can get id via getId()", () => {
        const employee = new Employee("Diana", 12, "d.koeswanto@example.com");

        expect(employee.getId()).toEqual(12);
    });

    it("can get email via getEmail()", () => {
        const employee = new Employee("Diana", 12, "d.koeswanto@example.com");

        expect(employee.getEmail()).toEqual("d.koeswanto@example.com");
    });

    it("getRole() should return 'Employee'", () => {
        const employee = new Employee("Diana", 12, "d.koeswanto@example.com");

        expect(employee.getRole()).toEqual("Employee");
    });
});