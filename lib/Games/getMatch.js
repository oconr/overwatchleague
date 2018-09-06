var getMatch = function(id){
  if (id === undefined || id === null || id === ""){
    return new Promise(function(resolve,reject){
      resolve({"data":"Please provide a match ID"});
    });
  } else {
    return this.api.get(`match/${id}`);
  }
}

module.exports = getMatch;
