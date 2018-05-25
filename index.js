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

const libdir = fs.readdirSync(path.join(__dirname,'lib'));
const files = libdir.filter(f => f.split('.').pop() === 'js');
files.forEach((f,i) => {
  owl.prototype[f.slice(0,-3)] = require(`./lib/${f.slice(0,-3)}`);
});

owl.Match = {
  State: {
    PENDING: 'PENDING',
    CONCLUDED: 'CONCLUDED'
  }
};

module.exports = owl;
