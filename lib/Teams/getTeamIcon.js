var getTeamIcon = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.icon});
    });
  });
}

module.exports = getTeamIcon;
