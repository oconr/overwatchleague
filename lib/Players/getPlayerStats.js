var getPlayerStats = function(player){
  return new Promise(resolve => {
    resolve(this.api.get(`players/${player}`, {
      params: {
        expand: 'stats, stats.ranks',
      }
    }
    ));
  });
}

module.exports = getPlayerStats;
