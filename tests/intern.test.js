const { it, expect } = require("@jest/globals");
const Intern = require('../src/entity/intern');

describe("Intern", () => {
    it("can instantiate given name, id, email", () => {
        const intern = new Intern("Intern Name", 1, "intern@example.com");

        expect(intern).toBeDefined();
    });

    it("can set school via constructor", () => {
        const intern = new Intern("Intern Name", 1, "intern@example.com", "USYD");

        expect(intern).toBeDefined(); 
        expect(intern.school).toEqual("USYD");
    });

    it("getRole() should return 'Intern'", () => {
        const intern = new Intern("Intern Name", 1, "intern@example.com", "USYD");

        expect(intern.getRole()).toEqual("Intern");
    });

    it("can get school via getSchool()", () => {
        const intern = new Intern("Intern Name", 1, "intern@example.com", "USYD");

        expect(intern.getSchool()).toEqual("USYD");
    });
});