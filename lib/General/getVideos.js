var getVideos = function(){
  return this.api.get('vods');
}

module.exports = getVideos;
