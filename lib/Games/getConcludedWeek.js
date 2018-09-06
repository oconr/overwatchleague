var getConcludedWeek = function(){
  return new Promise(resolve => {
    this.getMatches().then(res => {
      var matches = res.data.content;
      var thisweek = [];
      var ts = Math.round(new Date().getTime());
      var lower = ts - (604800000);

      for (var match in matches){
        if (lower < matches[match].startDate && matches[match].status === "CONCLUDED"){
          thisweek.push(matches[match]);
        }
      }
      resolve({"data": thisweek});
    })
  })
}

module.exports = getConcludedWeek;
