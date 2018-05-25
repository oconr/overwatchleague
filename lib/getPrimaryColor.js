var getPrimaryColor = function(team){
  return new Promise(resolve => {
    this.getTeam(team).then(res => {
      resolve({"data":res.data.primaryColor});
    });
  });
}

module.exports = getPrimaryColor;
