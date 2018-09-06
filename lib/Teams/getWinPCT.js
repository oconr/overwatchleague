var getWinPCT = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      const win = res.data.ranking.matchWin;
      const loss = res.data.ranking.matchLoss;
      const winPercentage = Math.round(win/(win+loss)*100);
      resolve({"data": winPercentage});
    });
  });
}

module.exports = getWinPCT;
