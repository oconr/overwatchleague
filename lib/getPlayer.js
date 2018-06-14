var getPlayer = function(player){
  return new Promise(resolve => {
    resolve(this.api.get(`players/${player}`));
  });
}

module.exports = getPlayer;
