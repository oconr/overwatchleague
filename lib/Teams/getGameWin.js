var getGameWin = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.ranking.gameWin});
    });
  });
}

module.exports = getGameWin;
