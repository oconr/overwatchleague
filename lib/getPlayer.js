var getPlayer = function(player){
  return new Promise(resolve => {
    resolve(this.api.get(`players/${player}?expand=stats,stat.ranks`));
  });
}

module.exports = getPlayer;
