
var { google } = require('googleapis');
var Q = require("q");
var util = require('../Common/ultilities');
var key = util.getFirstKey();
var youtube = google.youtube({
    version: 'v3',
    auth: key //key  //"AIzaSyDP5Elo2ca45nw6UAbMFajMbMu8bXNT5CU"
});
function resetService() {
    key = util.getFirstKey();
    youtube = google.youtube({
        version: 'v3',
        auth: key //key  //"AIzaSyDP5Elo2ca45nw6UAbMFajMbMu8bXNT5CU"
    });
};




function getvideoInfo(request) {

    var deferred = Q.defer();

    youtube.videos.list({
        part: 'snippet,contentDetails,statistics',
        id: request.id
    }, function (err, data) {
        if (err) {

            deferred.reject(err);
        }
        if (data) {
            if (data.data.items.length <= 0) {
                deferred.resolve(null);
            }
            var element = data.data.items[0];
            var row = {
                title: element.snippet.title,
                titleConverted: util.removeUnicode(element.snippet.title),
                videoId: element.id,
                channelTitle: element.snippet.channelTitle,
                channelTitleConverted: util.removeUnicode(element.snippet.channelTitle),
                imgUrl: element.snippet.thumbnails.medium.url,
                chanelId: element.snippet.channelId,
                tags: element.snippet.tags,
                publishDated: element.snippet.publishedAt,
                duration: element.contentDetails.duration,
                durationConverted: util.convertDuration(element.contentDetails.duration),
                viewcount: util.formatNumber(element.statistics.viewCount),
                channelInfo: {
                    imgUrl: undefined
                }
            };

            deferred.resolve(row);


        }

    });
    return deferred.promise;
}

function getvideoRelated(id) {

    var deferred = Q.defer();
    result = [];
    youtube.search.list({
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video',
        maxResults: 30

    }, function (err, data) {
        if (err) {
            console.error('getvideoRelated Error: ' + err);
            console.log('key ' + key);

            deferred.reject(err);
        }
        if (data) {
            data.data.items.forEach(element => {

                var row = {
                    title: element.snippet.title,
                    titleConverted: util.removeUnicode(element.snippet.title),
                    videoId: element.id.videoId,
                    channelTitle: element.snippet.channelTitle,
                    channelTitleConverted: util.removeUnicode(element.snippet.channelTitle),
                    imgUrl: element.snippet.thumbnails.medium.url,
                    channelId: element.snippet.channelId,

                };
                result.push(row);
            });



            deferred.resolve(result);


        }

    });
    return deferred.promise;
}
function getChannleInfo(data) {


    var deferred = Q.defer();
    youtube.channels.list({
        part: 'snippet',
        id: data.chanelId
    }, function (err, result) {
        if (err) {
            deferred.reject(err);
        }
        if (result) {

            var element = result.data.items[0];

            var channelInfo = {
                imgUrl: element.snippet.thumbnails.medium.url
            };

            deferred.resolve(channelInfo);
        }
    });
    return deferred.promise;
}
function getVideoComment(id) {
    console.log('getvideoRelated' + id);
    var deferred = Q.defer();

    youtube.commentThreads.list({
        part: 'snippet,replies',
        videoId: id,
        order: 'Time',
        maxResults: 30

    }, function (err, data) {
        if (err) {
            console.error('getVideoComment Error: ' + err);
            deferred.reject(err);
        }
        if (data) {
            deferred.resolve(data.data.items);


        }

    });
    return deferred.promise;
}

var videoServices = {
    searchVideo: function (request, callback) {
        var result = [];
        youtube.search.list({
            part: 'snippet',
            q: request.q,
            type: 'video',
            maxResults: 48
        }, function (err, data) {
            if (err) {
                console.error('Error: ' + err);
                // console.log('key ' + key);
                util.setKeyUnvalid(key);
                resetService();
                videoServices.searchVideo(request, callback);
                //callback(result);
                console.log('searchVideo catch error: ' + error);
                // Handle any error from all above steps         


            }
            if (data) {

                data.data.items.forEach(element => {
                    var row = {
                        videoId: element.id.videoId,
                        title: element.snippet.title,
                        titleConverted: util.removeUnicode(element.snippet.title),
                        channelTitle: element.snippet.channelTitle,
                        channelTitleConverted: util.removeUnicode(element.snippet.channelTitle),
                        imgUrl: element.snippet.thumbnails.medium.url,
                        chanelId: element.snippet.channelId,
                        publishDated: element.snippet.publishedAt,

                    }
                    result.push(row);
                });
                callback(result);


            }
        });
        return result;


    },
    liveVideo: function (request, callback) {
        var result = [];
        youtube.playlistItems.list({
            part: 'snippet,ContentDetails',
            playlistId: "PLU12uITxBEPGILPLxvkCc4L_iL7aHf4J2",
            maxResults: 48
        }, function (err, data) {
            if (err) {
                console.error('Error: ' + err);
                return null;
            }
            if (data) {

                data.data.items.forEach(element => {
                    var row = {
                        title: element.snippet.title,

                        videoId: element.id.videoId,
                        chanelTitle: element.snippet.channelTitle,
                        imgUrl: element.snippet.thumbnails.medium.url,
                        chanelId: element.snippet.channelId,
                        publishDated: element.snippet.publishedAt,
                        isLive: true
                    }
                    result.push(row);
                });
                callback(result);


            }
        });
        return result;


    },
    trending: function (request, callback) {

        var result = [];
        youtube.videos.list({
            part: 'snippet,contentDetails,statistics',
            regionCode: request.regionCode,
            chart: 'mostPopular',
            maxResults: 24
        }, function (err, data) {
            if (err) {
                console.error('Error: ' + err);
                console.log('key ' + key);
                util.setKeyUnvalid(key);
                resetService();
                videoServices.trending(request, callback);
            }
            if (data) {

                data.data.items.forEach(element => {
                    var row = {

                        title: element.snippet.title,
                        titleConverted: util.removeUnicode(element.snippet.title),
                        videoId: element.id,
                        channelTitle: element.snippet.channelTitle,
                        channelTitleConverted: util.removeUnicode(element.snippet.channelTitle),
                        imgUrl: element.snippet.thumbnails.medium.url,
                        chanelId: element.snippet.channelId,
                        tags: element.snippet.tags,
                        publishDated: util.friendlyDate(element.snippet.publishedAt),

                        duration: element.contentDetails.duration,
                        durationConverted: util.convertDuration(element.contentDetails.duration),
                        viewcount: util.formatNumber(element.statistics.viewCount)
                    }
                    result.push(row);
                });
                callback(result);


            }
        });

    },
    videoDetail: function (callback, request) {

        if (!request) {
            callback(null);
            return;
        }
        var result = {
            video: {},
            videoRelateds: [],
            channelInfo: {
                imgUrl: undefined
            },
            comments: undefined

        };
        getvideoInfo(request)
            .then(function (data) {
                if (data) {
                    result.video = data;

                    getvideoRelated(data.videoId).then(function (response) {

                        result.videoRelateds = response;
                        getChannleInfo(data)
                            .then(function (res) {
                                result.channelInfo.imgUrl = res.imgUrl;
                                getVideoComment(data.videoId)
                                    .then(function (sv) {
                                        result.comments = sv;
                                        callback(result);
                                    });

                            });
                    });

                }else{
                    callback(null);
                }


            })
            .catch(function (error) {
                console.log(error);

                if (error.code == 400) {
                    console.log('err 403' + error);
                    videoServices.videoDetail(callback, null);
                } else {
                    // console.log('key ' + key);
                    util.setKeyUnvalid(key);
                    resetService();
                    videoServices.videoDetail(callback, request);
                    //callback(result);
                    console.log('catch error: ' + error);
                    // Handle any error from all above steps         
                }

            })
            .done();



    },
    getvideoByCate: function (request, callback) {
        var result = [];
        youtube.videos.list({
            part: 'snippet,contentDetails,statistics',
            regionCode: request.regionCode,
            chart: 'mostPopular',
            hl: request.hl,
            videoCategoryId: request.categoryId,
            maxResults: 48
        }, function (err, data) {
            if (err) {
                console.error('Error: ' + err);
                // console.log('key ' + key);
                // util.setKeyUnvalid(key);
                // resetService();
                // videoServices.trending(request, callback);
            }
            if (data) {

                data.data.items.forEach(element => {
                    var row = {

                        title: element.snippet.title,
                        titleConverted: util.removeUnicode(element.snippet.title),
                        videoId: element.id,
                        channelTitle: element.snippet.channelTitle,
                        channelTitleConverted: util.removeUnicode(element.snippet.channelTitle),
                        imgUrl: element.snippet.thumbnails.medium.url,
                        chanelId: element.snippet.channelId,
                        tags: element.snippet.tags,
                        publishDated: util.friendlyDate(element.snippet.publishedAt),

                        duration: element.contentDetails.duration,
                        durationConverted: util.convertDuration(element.contentDetails.duration),
                        viewcount: util.formatNumber(element.statistics.viewCount)
                    }
                    result.push(row);
                });
                callback(result);


            }
        });
    }


}

module.exports = videoServices;

