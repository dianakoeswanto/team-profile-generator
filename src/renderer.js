const { render, renderToFolder } = require('template-file');
const path = require('path');

const memberTemplate = 
`<div class="col-sm-12 col-md-6 col-lg-4 my-3">
                <div class="card">
                    <div class="card-body bg-primary text-white">
                        <h5 class="card-title">{{name}}</h5>
                        <p class="card-text">{{role}}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: {{id}}</li>
                        <li class="list-group-item">Email: <a href="mailto:{{email}}">{{email}}</a></li>
                        <li class="list-group-item">{{otherInfo}}</li>
                    </ul>
                </div>
            </div>`;

const renderMember = (member, role) => {
    if(member.role === "Engineer") {
        member.otherInfo = `Github: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>`
    } else if (member.role === "Intern") {
        member.otherInfo = `School: ${member.school}`;
    } else {
        member.otherInfo = `Office number: ${member.officeNumber}`;
    }

    return render(memberTemplate, member);
}

const renderTeam = (team) => {
    const myTeam = [];
    
    myTeam.push({member: renderMember(team.getTeamManager())});
    team.getMembers().map((member) => {
        myTeam.push({member: renderMember(member)});
    });

    const templatePath = path.join(__dirname, '/template/team.html');
    const outputPath = path.join(__dirname, '../');
    renderToFolder(templatePath, outputPath, {myTeam: myTeam});
}

module.exports = {renderTeam};