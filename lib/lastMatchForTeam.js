var lastMatchForTeam = function(id){
  return new Promise(resolve => {
    this.getTeam(id).then(res => {
      const schedule = res.data.schedule;
      schedule.sort(compareMatch);
      return resolve({"data": schedule.filter(match => match.state === owl.Match.State.CONCLUDED).pop()});
    })
    .catch(err => console.log(err));
  });
}

module.exports = lastMatchForTeam;
