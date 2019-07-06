function sortStages(a, b, stage){
  if (a.stages[stage].placement < b.stages[stage].placement){
    return -1;
  } else if (a.stages[stage].placement > b.stages[stage].placement){
    return 1;
  }

  if (a.divisionId < b.divisionId){
    return 1;
  } else if (a.divisionId > b.divisionId){
    return -1;
  }

  if (a.name < b.name){
    return -1;
  } else if (a.name > b.name){
    return 1;
  }

  return 0;
}

var getStandings = function(year = 2019, stage = null){
  return new Promise(resolve => {
    if (stage == null || stage == "league"){
      resolve(this.api.get('v2/standings?season='+year));
    } else {
      this.api.get('v2/standings?season='+year).then(response => {
        if (stage == "stage1" || stage == "stage2" || stage == "stage3" || stage == "stage4"){
          response.data.data.sort(function(a, b){
            return sortStages(a, b, stage);
          });
          resolve(response);
        }
      });
    }
  })
}

module.exports = getStandings;