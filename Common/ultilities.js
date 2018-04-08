var getSlug = require('speakingurl');
var keys = require('../Common/key2.json');
var commonUlti = {
  removeUnicode: function (val) {
    return getSlug(val);
  },
  convertDuration: function (t) {
    //dividing period from time
    var x = t.split('T'),
      duration = '',
      time = {},
      period = {},
      //just shortcuts
      s = 'string',
      v = 'variables',
      l = 'letters',
      // store the information about ISO8601 duration format and the divided strings
      d = {
        period: {
          string: x[0].substring(1, x[0].length),
          len: 4,
          // years, months, weeks, days
          letters: ['Y', 'M', 'W', 'D'],
          variables: {}
        },
        time: {
          string: x[1],
          len: 3,
          // hours, minutes, seconds
          letters: ['H', 'M', 'S'],
          variables: {}
        }
      };
    //in case the duration is a multiple of one day
    if (!d.time.string) {
      d.time.string = '';
    }

    for (var i in d) {
      var len = d[i].len;
      for (var j = 0; j < len; j++) {
        d[i][s] = d[i][s].split(d[i][l][j]);
        if (d[i][s].length > 1) {
          d[i][v][d[i][l][j]] = parseInt(d[i][s][0], 10);
          d[i][s] = d[i][s][1];
        } else {
          d[i][v][d[i][l][j]] = 0;
          d[i][s] = d[i][s][0];
        }
      }
    }
    period = d.period.variables;
    time = d.time.variables;
    time.H += 24 * period.D +
      24 * 7 * period.W +
      24 * 7 * 4 * period.M +
      24 * 7 * 4 * 12 * period.Y;

    if (time.H) {
      duration = time.H + ':';
      if (time.M < 10) {
        time.M = '0' + time.M;
      }
    }

    if (time.S < 10) {
      time.S = '0' + time.S;
    }

    duration += time.M + ':' + time.S;
    return duration;
  },
  formatNumber: function (x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  },
  friendlyDate: function (time) {
    var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return;

    return day_diff == 0 && (
      diff < 60 && "just now" || diff < 120 && "1 minute ago" || diff < 3600 && Math.floor(diff / 60) + " minutes ago" || diff < 7200 && "1 hour ago" || diff < 86400 && Math.floor(diff / 3600) + " hours ago") || day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago";
  },
  getFirstKey: function () {
    var keyValilds = keys.filter(function (item) {
      return item.IsOverLimit == 0;
    });
console.log('key next '+keyValilds[0].KeyAPI);
    return keyValilds[0].KeyAPI;
  },
  setKeyUnvalid: function (key) {
    keys.forEach(element => {
      if (element.KeyAPI == key) {
        element.IsOverLimit = 1;
        console.log('key just over '+element.KeyAPI);
      }
    });
  }


}
module.exports = commonUlti;