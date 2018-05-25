var getMatchDraw = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.ranking.matchDraw});
    })
  });
}

module.exports = getMatchDraw;
