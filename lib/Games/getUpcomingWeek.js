var getUpcomingWeek = function(){
  return new Promise(resolve => {
    this.getMatches().then(res => {
      var matches = res.data.content;
      var thisweek = [];
      var lower = Math.round(new Date().getTime());
      var upper = lower + (604800000);

      for (var match in matches){
        if (lower < matches[match].startDate && matches[match].startDate < upper){
          thisweek.push(matches[match]);
        }
      }
      resolve({"data": thisweek});
    })
  })
}

module.exports = getUpcomingWeek;
