class Team {
    constructor(teamManager) {
        this.teamManager = teamManager;
        this.engineers = [];
        this.interns = [];
    }

    addEngineer(engineer) {
        this.engineers.push(engineer);
    }

    addIntern(intern) {
        this.interns.push(intern);
    }

    getEngineers() {
        return this.engineers;
    }

    getInterns() {
        return this.interns;
    }

    getTeamManager() {
        return this.teamManager;
    }

    getMembers() {
        return this.getEngineers().concat(this.getInterns());
    }
}

module.exports = Team;