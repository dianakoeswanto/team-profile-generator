const { it, expect } = require("@jest/globals");
const Engineer = require('../src/entity/engineer');

describe("Engineer", () => {
    it("can instantiate given name, id, email", () => {
        const engineer = new Engineer("Engineer Name", 1, "engineer@example.com");

        expect(engineer).toBeDefined();
    });

    it("can set school via constructor", () => {
        const engineer = new Engineer("Engineer Name", 1, "engineer@example.com", "dgithub");

        expect(engineer).toBeDefined(); 
        expect(engineer.github).toEqual("dgithub");
    });

    it("getRole() should return 'Engineer'", () => {
        const engineer = new Engineer("Engineer Name", 1, "engineer@example.com", "dgithub");

        expect(engineer.getRole()).toEqual("Engineer");
    });

    it("can get school via getSchool()", () => {
        const engineer = new Engineer("Engineer Name", 1, "engineer@example.com", "dgithub");

        expect(engineer.getGithub()).toEqual("dgithub");
    });
});