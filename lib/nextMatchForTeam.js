var nextMatchForTeam = function(id){
  return new Promise(resolve => {
    this.getTeam(id).then(res => {
      const schedule = res.data.schedule;
      schedule.sort(compareMatch);
      return resolve({"data": schedule.find(match => match.state === owl.Match.State.PENDING)});
    })
    .catch(err => console.log(err));
  });
}

module.exports = nextMatchForTeam;
