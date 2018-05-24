var axios = require('axios');

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function indexOf(member, startFrom) {
    if (this == null) {
      throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
    }

    var
      index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
      that = this instanceof Object ? this : new Object(this),
      length = isFinite(that.length) ? Math.floor(that.length) : 0;

    if (index >= length) {
      return -1;
    }

    if (index < 0) {
      index = Math.max(length + index, 0);
    }

    if (member === undefined) {
      do {
        if (index in that && that[index] === undefined) {
          return index;
        }
      } while (++index < length);
    } else {
      do {
        if (that[index] === member) {
          return index;
        }
      } while (++index < length);
    }

    return -1;
  };
}

class owl {
  constructor({
    locale = 'en_US',
    useChina = false
  } = {}){
    var url = useChina === true ? 'https://api.overwatchleague.cn/' : 'https://api.overwatchleague.com/';
    const params = {};
    if (locale){
      params.locale = locale;
    }
    this.api = axios.create({
      baseURL: url,
      params: params
    });
    this.locale = locale;
  }

  getInfo(){
    return this.api.get('about');
  }

  getRankings(){
    return this.api.get('rankings');
  }

  getSchedule(){
    return this.api.get('schedule');
  }

  getMatches(){
    return this.api.get('match');
  }

  getMatch(id){
    if (id === undefined || id === null || id === ""){
      return new Promise(function(resolve,reject){
        resolve({"data":"Please provide a match ID"});
      });
    } else {
      return this.fetch.get(`match/${id}`);
    }
  }

  getTeams(){
    return this.api.get('teams');
  }

  getTeam(id){
    if (id === undefined || id === null || id === ""){
      return new Promise(function(resolve,reject){
        resolve({"data":"Please provide a team ID"});
      });
    } else {
      return this.api.get(`teams/${id}`);
    }
  }

  getNews(){
    return this.api.get('news');
  }

  getNewsPost(id){
    if (id === undefined || id === null || id === ""){
      return new Promise(function(resolve,reject){
        resolve({"data":"Please provide a news post ID"});
      });
    } else {
      return this.api.get(`news/${id}`);
    }
  }

  getLiveMatch(){
    return this.api.get('live-match');
  }

  getStreams(){
    return this.api.get('v2/streams');
  }

  getMaps(){
    return this.api.get('maps');
  }

  getVideos(){
    return this.api.get('vods');
  }

  getStandings(){
    return this.api.get('standings');
  }

  findTeamID(name){
    return new Promise(function(resolve,reject){
      const stripped = JSON.stringify(name).replace(/\W/g, '').toLowerCase();
      if (["dallas","fuel","dallasfuel"].indexOf(stripped) > -1){
        resolve({"data":4523});
      } else if (["philadelphia","fusion","philadelphiafusion"].indexOf(stripped) > -1){
        resolve({"data":4524});
      } else if (["houston","outlaws","houstonoutlaws"].indexOf(stripped) > -1){
        resolve({"data":4525});
      } else if (["boston","uprising","bostonuprising"].indexOf(stripped) > -1){
        resolve({"data":4402});
      } else if (["new","york","excelsior","newyork","newyorkexcelsior","nyxl"].indexOf(stripped) > -1){
        resolve({"data":4403});
      } else if (["san","francisco","shock","sanfrancisco","sanfranciscoshock"].indexOf(stripped) > -1){
        resolve({"data":4404});
      } else if (["valiant","losangelesvaliant","lavaliant"].indexOf(stripped) > -1){
        resolve({"data":4405});
      } else if (["gladiators","losangelesgladiators","lagladiators"].indexOf(stripped) > -1){
        resolve({"data":4406});
      } else if (["florida","mayhem","floridamayhen"].indexOf(stripped) > -1){
        resolve({"data":4407});
      } else if (["shanghai","dragons","shanghaidragons"].indexOf(stripped) > -1){
        resolve({"data":4408});
      } else if (["seoul","dynasty","seouldynasty"].indexOf(stripped) > -1){
        resolve({"data":4409});
      } else if (["london","spitfire","londonspitfire"].indexOf(stripped) > -1){
        resolve({"data":4410});
      } else {
        resolve({"data":`Could not find ID for ${name}`});
      }
    });
  }

  findTeamName(id){
    return new Promise(function(resolve,reject){
      const ids = [4523,4524,4525,4402,4403,4404,4405,4406,4407,4408,4409,4410];
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
        "London Spitfire"
      ];
      if (ids.indexOf(id) > -1){
        resolve({"data":names[ids.indexOf(id)]});
      } else {
        resolve({"data":`Could not find the name for ${id}`});
      }
    });
  }
}

module.exports = owl;
