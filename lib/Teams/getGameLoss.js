var getGameLoss = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.ranking.gameLoss});
    });
  });
}

module.exports = getGameLoss;
