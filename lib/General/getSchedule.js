var getSchedule = function(year = 2019){
  return this.api.get(`schedule?season=${year}`);
}

module.exports = getSchedule;
