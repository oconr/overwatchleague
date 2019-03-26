var findTeamName = function(id){
  return new Promise(function(resolve,reject){
    const ids = [4523,4524,4525,4402,4403,4404,4405,4406,4407,4408,4409,4410,7692,7693,7694,7695,7696,7697,7698,7699];
    const names = [
      "Dallas Fuel",
      "Philadelphia Fusion",
      "Houston Outlaws",
      "Boston Uprising",
      "New York Excelsior",
      "San Francisco Shock",
      "Los Angeles Valiant",
      "Los Angeles Gladiators",
      "Florida Mayhem",
      "Shanghai Dragons",
      "Seoul Dynasty",
      "London Spitfire",
      "Chengdu Hunters",
      "Hangzhou Spark",
      "Paris Eternal",
      "Toronto Defiant",
      "Vancouver Titans",
      "Washington Justice",
      "Atlanta Reign",
      "Guangzhou Charge"
    ];
    if (ids.indexOf(id) > -1){
      resolve({"data":names[ids.indexOf(id)]});
    } else {
      resolve({"data":`Could not find the name for ${id}`});
    }
  });
}

module.exports = findTeamName;
