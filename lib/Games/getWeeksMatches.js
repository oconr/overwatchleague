var getWeeksMatches = function(){
  return new Promise(resolve => {
    this.getMatches().then(res => {
      var matches = res.data.content;
      var thisweek = [];
      var ts = Math.round(new Date().getTime());
      var upper = ts + (259200000);
      var lower = ts - (259200000);

      for (var match in matches){
        if (lower < matches[match].startDate && matches[match].startDate < upper){
          thisweek.push(matches[match]);
        }
      }
      resolve({"data": thisweek});
    })
  })
}

module.exports = getWeeksMatches;
