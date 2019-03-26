var getWeeksMatches = function(){
  return new Promise(resolve => {
    this.getMatches().then(res => {
      var matches = res.data.content;
      var thisweek = [];

      var lower = new Date();
      lower.setMinutes(0);
      lower.setHours(0);
      lower.setSeconds(0);
      lower.setMilliseconds(0);

      lower.setDate(lower.getDate() - lower.getDay() + (lower.getDay() == 0 ? -6 : 1));

      var upper = new Date();
      upper.setMinutes(0);
      upper.setHours(0);
      upper.setSeconds(0);
      upper.setMilliseconds(0);

      upper.setDate(lower.getDate() + 7);

      for (var match in matches){
        if (lower <= matches[match].startDate && matches[match].startDate < upper){
          thisweek.push(matches[match]);
        }
      }

      resolve({"data": thisweek});
    });
  });
}

module.exports = getWeeksMatches;
