var getPlayerStatsByMap = function(matchId, mapNumber){
  return this.api.get(`/stats/matches/${matchId}/maps/${mapNumber}`);
}

module.exports = getPlayerStatsByMap;
