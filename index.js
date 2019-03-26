var axios = require('axios');
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

// import games methods
owl.prototype.getLiveMatch = require('./lib/Games/getLiveMatch');
owl.prototype.getMatch = require('./lib/Games/getMatch');
owl.prototype.getMatches = require('./lib/Games/getMatches');
owl.prototype.getWeeksMatches = require('./lib/Games/getWeeksMatches');
owl.prototype.getConcludedWeek = require('./lib/Games/getConcludedWeek');
owl.prototype.getUpcomingWeek = require('./lib/Games/getUpcomingWeek');

// import gemeral methods
owl.prototype.getInfo = require('./lib/General/getInfo');
owl.prototype.getSchedule = require('./lib/General/getSchedule');
owl.prototype.getMaps = require('./lib/General/getMaps');
owl.prototype.getNews = require('./lib/General/getNews');
owl.prototype.getNewsPost = require('./lib/General/getNewsPost');
owl.prototype.getStandings = require('./lib/General/getStandings');
owl.prototype.getStreams = require('./lib/General/getStreams');
owl.prototype.getVideos = require('./lib/General/getVideos');

// import player methods
owl.prototype.getPlayers = require('./lib/Players/getPlayers');
owl.prototype.getPlayerStats = require('./lib/Players/getPlayerStats');

// import team methods
owl.prototype.findTeamID = require('./lib/Teams/findTeamID');
owl.prototype.findTeamName = require('./lib/Teams/findTeamName');
owl.prototype.getGameDiff = require('./lib/Teams/getGameDiff');
owl.prototype.getGameLoss = require('./lib/Teams/getGameLoss');
owl.prototype.getGameTie = require('./lib/Teams/getGameTie');
owl.prototype.getGameWin = require('./lib/Teams/getGameWin');
owl.prototype.getRankings = require('./lib/Teams/getRankings');
owl.prototype.getMatchDraw = require('./lib/Teams/getMatchDraw');
owl.prototype.getMatchLoss = require('./lib/Teams/getMatchLoss');
owl.prototype.getMatchWins = require('./lib/Teams/getMatchWins');
owl.prototype.getPrimaryColor = require('./lib/Teams/getPrimaryColor');
owl.prototype.getSecondaryColor = require('./lib/Teams/getSecondaryColor');
owl.prototype.getTeam = require('./lib/Teams/getTeam');
owl.prototype.getTeamIcon = require('./lib/Teams/getTeamIcon');
owl.prototype.getTeamLogo = require('./lib/Teams/getTeamLogo');
owl.prototype.getTeams = require('./lib/Teams/getTeams');
owl.prototype.getWinPCT = require('./lib/Teams/getWinPCT');
owl.prototype.lastMatchForTeam = require('./lib/Teams/lastMatchForTeam');
owl.prototype.nextMatchForTeam = require('./lib/Teams/nextMatchForTeam');

// end importing methods

owl.Match = {
  State: {
    PENDING: 'PENDING',
    CONCLUDED: 'CONCLUDED'
  }
};

module.exports = owl;
