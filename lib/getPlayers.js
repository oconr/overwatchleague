var getPlayers = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      const players = res.data.players;
      resolve({"data":players});
    });
  });
}

module.exports = getPlayers;
