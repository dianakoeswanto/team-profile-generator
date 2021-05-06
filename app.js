const {askTeamManagerDetails, askTeamMemberDetails} = require('./src/questionnaire');
const { renderTeam } = require('./src/renderer');

const Team = require('./src/entity/team');
const Manager = require('./src/entity/manager');

const start = async () => {
    const teamManager = await askTeamManagerDetails();
    const manager = new Manager(teamManager.name, teamManager.id, teamManager.email, teamManager.officeNumber);
    
    const team = new Team(manager);
    await askTeamMemberDetails(team);
    await renderTeam(team);
}

start();