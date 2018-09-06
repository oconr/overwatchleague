var getGameTie = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.ranking.gameTie});
    });
  });
}

module.exports = getGameTie;
