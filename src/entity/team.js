/**
 * Team class that holds information about all members in the team
 */
class Team {
    constructor(teamManager) {
        this.teamManager = teamManager;
        this.engineers = [];
        this.interns = [];
    }

    /**
     * Adds an engineer to the team 
     */
    addEngineer(engineer) {
        this.engineers.push(engineer);
    }

    /**
     * Adds an intern to the team 
     */
    addIntern(intern) {
        this.interns.push(intern);
    }

    /**
     * Returns all engineers
     */
    getEngineers() {
        return this.engineers;
    }

    /**
     * Returns all interns
     */
    getInterns() {
        return this.interns;
    }

    /**
     * Returns the team manager
     */
    getTeamManager() {
        return this.teamManager;
    }

    /**
     * Returns team members 
     */
    getMembers() {
        return this.getEngineers().concat(this.getInterns());
    }
}

module.exports = Team;