var getTeamLogo = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.logo});
    });
  });
}

module.exports = getTeamLogo;
