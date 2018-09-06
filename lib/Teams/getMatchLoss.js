var getMatchLoss = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.ranking.matchLoss});
    });
  });
}

module.exports = getMatchLoss;
