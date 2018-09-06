var getSecondaryColor = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.secondaryColor});
    });
  });
}

module.exports = getSecondaryColor;
