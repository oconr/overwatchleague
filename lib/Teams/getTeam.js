var getTeam = function(id){
  return new Promise(resolve => {
    var isnum = /^\d+$/.test(id);
    if (id === undefined || id === null || id === ""){
      resolve({"data":"Please provide a team ID or name"});
    } else if (!isnum){
      this.findTeamID(id).then(res => {
        resolve(this.api.get(`teams/${res.data}`));
      });
    } else {
      resolve(this.api.get(`teams/${id}`));
    }
  });
}

module.exports = getTeam;
