var getNewsPost = function(id){
  if (id === undefined || id === null || id === ""){
    return new Promise(function(resolve,reject){
      resolve({"data":"Please provide a news post ID"});
    });
  } else {
    return this.api.get(`news/${id}`);
  }
}

module.exports = getNewsPost;
