var express = require('express');
var router = express.Router();
var config = require('../Common/config.json');
var videoService = require('../Controller/video');
var api = require('../Controller/api');
var dateExpire = 360 * 24 * 3600 * 1000;
/* GET home page. */
router.get('/', function (req, res, next) {


  if (req.cookies.i18n) {
    res.setLocale(req.cookies.i18n);
  }

  var request = {
    regionCode: "VN",
  }
  if (req.cookies.rgc) {
    request.regionCode = req.cookies.rgc;
  }

  videoService.trending(request, function (data) {
    var meta = {
      title: config.Title,
      imgUrl: data[0].imgUrl,
      url: 'https://' + config.Domain + "/",
      domain: config.Domain
    };
    if (!data) {
      res.redirect('/Home/NotFound');
    } else {
      res.render('index', {
        layout: 'layout', videos: data,
        regionCode: req.cookies.rgc,
        meta: meta
      });
    }

  });

});
/* GET home page. */
router.get('/Home/ChangeRegion/:regioncode', function (req, res, next) {
  res.cookie('rgc', req.params.regioncode, { httpOnly: true, maxAge: dateExpire });
  res.redirect('/')
});
/* Search video */
router.get('/Home/Search', function (req, res, next) {

  var request = {
    q: req.query.query
  }

  videoService.searchVideo(request, function (data) {
    var meta = {
      title: config.Domain + " - " + req.query.query,
      //imgUrl: data.video.imgUrl,
      url: 'https://' + config.Domain + "/Search/?query=" + req.query.query,
      domain: config.Domain
    };
    res.render('index', {
      layout: 'layout', videos: data,
      regionCode: req.cookies.rgc,
      meta: meta
    });
  });
});

/* Search video */
router.get('/rev/:q', function (req, res, next) {

  var request = {
    q: req.params.q
  }

  videoService.searchVideo(request, function (data) {
    var meta = {
      title: config.Domain + " - " + req.params.q,
      //imgUrl: data.video.imgUrl,
      url: 'https://' + config.Domain + "/rev/" + req.params.q,
      domain: config.Domain
    };
    res.render('index', {
      layout: 'layout', videos: data,
      regionCode: "VN",
      meta: meta
    });
  });
});

/* Search video */
router.get('/Home/live', function (req, res, next) {
  var request = {
    regionCode: "VN",
  }
  if (req.cookies.rgc) {
    request.regionCode = req.cookies.rgc;
  }
  videoService.liveVideo(request, function (data) {
    var meta = {
      title: config.Title,
      //imgUrl: data.video.imgUrl,
      url: 'https://' + config.Domain,
      domain: config.Domain
    };

    res.render('index', {
      layout: 'layout', videos: data,
      regionCode: req.cookies.rgc,
      meta: meta

    });
  });
});

/* get video by categor */
router.get('/Category/:cateid/:html', function (req, res) {

  var request = {
    regionCode: "VN",
    categoryId: req.params.cateid,
    hl: req.cookies.i18n,

  }
  if (req.cookies.rgc) {
    request.regionCode = req.cookies.rgc;
  }
  videoService.getvideoByCate(request, function (data) {
    res.render('index', {
      layout: 'layout', videos: data,
      regionCode: req.cookies.rgc
    });
  });
});

router.get('/Home/NotFound', function (req, res, next) {
  res.render('Home/notFound', {
    layout: 'layout',
    regionCode: req.cookies.rgc,
    meta: {
      title: 'Not Found'
    }

  });
});

///
router.get('/vi', function (req, res) {

  res.cookie('i18n', 'vi', { httpOnly: true, maxAge: dateExpire });
  res.redirect('/')
});
router.get('/en', function (req, res) {
  res.cookie('i18n', 'en', { httpOnly: true, maxAge: dateExpire });
  res.redirect('/')
});
router.get('/ja', function (req, res) {
  res.cookie('i18n', 'ja', { httpOnly: true, maxAge: dateExpire });
  res.redirect('/')
});
router.get('/ko', function (req, res) {
  res.cookie('i18n', 'ko', { httpOnly: true, maxAge: dateExpire });
  res.redirect('/')
});

router.get('/th', function (req, res) {
  res.cookie('i18n', 'th', { httpOnly: true, maxAge: dateExpire });
  res.redirect('/')
});
router.get('/video/:videoId/:html', function (req, res, next) {

  if (!req.cookies.rgc) {
    res.cookie('rgc', 'us', { httpOnly: true, maxAge: dateExpire });
  }
  var request = {
    id: req.params.videoId
  };
  videoService.getVideoDetail(request, function (data) {

    if (!data) {
      res.redirect('/Home/NotFound');
    } else {

      var meta = {
        title: data.title,
        imgUrl: data.imgUrl,
        url: 'https://' + config.Domain + "/video/" + data.videoId + "/" + data.titleConverted + ".html",
        domain: config.Domain,
        width: data.width,
        height: data.height,
        publishDated: data.publishDated,
        tags:data.tags
      };

      res.render('Video/video', {

        layout: 'layout',
        video: data,
        regionCode: req.cookies.rgc,
        meta: meta
      });
    }
  });



});

router.get('/Channel/:channelId/:html', function (req, res, next) {

  var request = {
    id: req.params.channelId
  };
  videoService.channelDetail(request, function (data) {
    if (!data) {
      res.redirect('/Home/NotFound');
    } else {

      var meta = {
        title: data.channelInfo.title,
        imgUrl: data.channelInfo.imgUrl,
        url: 'https://' + config.Domain + "/channel/" + req.params.channelId + "/" + data.channelInfo.titleConverted + ".html",
        domain: config.Domain
      };

      res.render('channel', {
        title: 'video detail',
        layout: 'layout',
        data: data,
        meta: meta
      });
    }

  });

});

router.get('/comment/:videoId', function (req, res) {
  //console.log(req);
  var request = {
    id: req.params.videoId
  };
  videoService.getComment(request, function (sv) {

    //console.log(result);
    res.render('partials/comment', {

      layout: false,
      //video: videoService.getVideoDetail(request),
      // channelInfo: data.channelInfo,
      // videoRelateds: data.videoRelateds,
      comments: sv,
      //regionCode: req.cookies.rgc,
      //meta: meta
    });
  });
});

router.get('/videorelated/:videoId', function (req, res) {
  //console.log(req);
  var request = {
    id: req.params.videoId
  };
  videoService.getVideoRelated(request, function (sv) {

    //console.log(result);
    res.render('partials/videoRelated', {

      layout: false,
      //video: videoService.getVideoDetail(request),
      // channelInfo: data.channelInfo,
      // videoRelateds: data.videoRelateds,
      videoRelateds: sv,
      //regionCode: req.cookies.rgc,
      //meta: meta
    });
  });
});



module.exports = router;
