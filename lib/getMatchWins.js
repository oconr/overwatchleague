var getMatchWins = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.ranking.matchWin});
    });
  });
}

module.exports = getMatchWins;
