var axios = require('axios');
var fs = require('fs');
var path = require('path');

function compareMatch(a, b) {
  return a.startDate - b.startDate;
}

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
}

// importing methods

owl.prototype.findTeamID = require('./lib/findTeamID');
owl.prototype.findTeamName = require('./lib/findTeamName');
owl.prototype.getGameDiff = require('./lib/getGameDiff');
owl.prototype.getGameLoss = require('./lib/getGameLoss');
owl.prototype.getGameTie = require('./lib/getGameTie');
owl.prototype.getGameWin = require('./lib/getGameWin');
owl.prototype.getInfo = require('./lib/getInfo');
owl.prototype.getLiveMatch = require('./lib/getLiveMatch');
owl.prototype.getMaps = require('./lib/getMaps');
owl.prototype.getMatch = require('./lib/getMatch');
owl.prototype.getMatchDraw = require('./lib/getMatchDraw');
owl.prototype.getMatchLoss = require('./lib/getMatchLoss');
owl.prototype.getMatchWins = require('./lib/getMatchWins');
owl.prototype.getMatches = require('./lib/getMatches');
owl.prototype.getNews = require('./lib/getNews');
owl.prototype.getNewsPost = require('./lib/getNewsPost');
owl.prototype.getPlayers = require('./lib/getPlayers');
owl.prototype.getPrimaryColor = require('./lib/getPrimaryColor');
owl.prototype.getRankings = require('./lib/getRankings');
owl.prototype.getSchedule = require('./lib/getSchedule');
owl.prototype.getSecondaryColor = require('./lib/getSecondaryColor');
owl.prototype.getStandings = require('./lib/getStandings');
owl.prototype.getStreams = require('./lib/getStreams');
owl.prototype.getTeam = require('./lib/getTeam');
owl.prototype.getTeamIcon = require('./lib/getTeamIcon');
owl.prototype.getTeamLogo = require('./lib/getTeamLogo');
owl.prototype.getTeams = require('./lib/getTeams');
owl.prototype.getVideos = require('./lib/getVideos');
owl.prototype.getWinPCT = require('./lib/getWinPCT');
owl.prototype.lastMatchForTeam = require('./lib/lastMatchForTeam');
owl.prototype.nextMatchForTeam = require('./lib/nextMatchForTeam');

// end importing methods

// vvv will not work in browser environment vvv
//
// const libdir = fs.readdirSync(path.join(__dirname,'lib'));
// const files = libdir.filter(f => f.split('.').pop() === 'js');
// files.forEach((f,i) => {
//   owl.prototype[f.slice(0,-3)] = require(`./lib/${f.slice(0,-3)}`);
//
//   console.log(`owl.prototype.${f.slice(0,-3)} = require('./lib/${f.slice(0,-3)}');`);
// });

owl.Match = {
  State: {
    PENDING: 'PENDING',
    CONCLUDED: 'CONCLUDED'
  }
};

module.exports = owl;
