var getStreams = function(){
  return this.api.get('v2/streams');
}

module.exports = getStreams;
