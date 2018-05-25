var getGameDiff = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      const win = res.data.ranking.gameWin;
      const loss = res.data.ranking.gameLoss;
      const diff = win - loss;
      resolve({"data":diff});
    });
  });
}

module.exports = getGameDiff;
