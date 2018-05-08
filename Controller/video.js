
var { google } = require('googleapis');
var Q = require("q");
var util = require('../Common/ultilities');
var api = require('../Controller/api');
var config = require('../Common/config.json');
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
    var req = { id: request.id };
    var data = api.getVideo(request.id);
    if (data) {
        console.log('has data from api');
        deferred.resolve(row);
    } else {
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
                    channelId: element.snippet.channelId,
                    tags: element.snippet.tags,
                    publishDated: element.snippet.publishedAt,
                    duration: element.contentDetails.duration,
                    durationConverted: util.convertDuration(element.contentDetails.duration),
                    viewCount: util.formatNumber(element.statistics.viewCount),
                    dislikeCount: util.formatNumber(element.statistics.dislikeCount),
                    likeCount: util.formatNumber(element.statistics.likeCount),
                    height: element.snippet.thumbnails.high.height,
                    width: element.snippet.thumbnails.high.width,
                    description: element.snippet.description,
                };

                deferred.resolve(row);


            }

        });
    }

    return deferred.promise;
}

function getvideoRelated(id) {

    var deferred = Q.defer();
    var result = [];
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
        id: data.channelId
    }, function (err, result) {
        if (err) {
            deferred.reject(err);
        }
        if (result) {

            var element = result.data.items[0];

            var channelInfo = {
                imgUrl: element.snippet.thumbnails.medium.url,
                title: element.snippet.title,
                id: data.channelId
            };

            deferred.resolve(channelInfo);
        }
    });
    return deferred.promise;
}

function getChannel(request) {


    var deferred = Q.defer();
    youtube.channels.list({
        part: 'snippet,brandingSettings,Statistics',
        id: request.id
    }, function (err, data) {
        if (err) {
            console.log('getChannel' + err);
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
                imgUrl: element.brandingSettings.image.bannerTabletHdImageUrl,
                subscriberCount: util.formatNumber(element.statistics.subscriberCount),
                description: element.snippet.description,
                viewcount: util.formatNumber(element.statistics.viewCount)
            }
            deferred.resolve(row);


        }
    });
    return deferred.promise;
}
function getvideoByChannel(channelId) {

    var deferred = Q.defer();
    var result = [];
    youtube.search.list({
        part: 'snippet',
        channelId: channelId,
        maxResults: 48,
        type: 'video'
    }, function (err, data) {
        if (err) {
            console.log(err);
            deferred.reject(err);
        }
        if (data) {
            if (data.data.items.length <= 0) {
                deferred.resolve(null);
            }
            var element = data.data.items.forEach(element => {
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
function getVideoComment(id) {
    var result = [];
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

            data.data.items.forEach(element => {

                var row = {
                    authorProfileImageUrl: element.snippet.topLevelComment.snippet.authorProfileImageUrl,
                    authorDisplayName: element.snippet.topLevelComment.snippet.authorDisplayName,
                    textDisplay: element.snippet.topLevelComment.snippet.textDisplay,
                    replies: []

                };

                if (element.replies) {
                    element.replies.comments.forEach(item => {

                        var sub = {
                            authorProfileImageUrl: item.snippet.authorProfileImageUrl,
                            authorDisplayName: item.snippet.authorDisplayName,
                            textDisplay: item.snippet.textDisplay
                        };
                        row.replies.push(sub);
                    });
                }

                result.push(row);
            });


            deferred.resolve(result);


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
                        channelId: element.snippet.channelId,
                        publishDated:util.friendlyDate(element.snippet.publishedAt),

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
                        channelId: element.snippet.channelId,
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
            maxResults: 48
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
                        channelId: element.snippet.channelId,
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
            channelInfo: {},
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
                                result.channelInfo = res;

                                getVideoComment(data.videoId)
                                    .then(function (sv) {

                                        result.comments = sv;
                                        callback(result);
                                    });

                            });
                    });

                } else {
                    callback(null);
                }


            })
            .catch(function (error) {


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
                        channelId: element.snippet.channelId,
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
    channelDetail: function (request, callback) {

        if (!request) {
            callback(null);
        }
        var result = {
            channelInfo: {},
            videos: []
        };
        getChannel(request)
            .then(function (response) {

                if (!response) {
                    callback(null);
                    return;
                }
                result.channelInfo = response;
                getvideoByChannel(request.id)
                    .then(function (data) {
                        result.videos = data;
                        callback(result);
                    });
            })
            .catch(function (error) {
                console.log('err 403' + error);
                if (error.code == 400) {
                    console.log('err 403' + error);
                    videoServices.channelDetail(null, callback);
                } else {
                    // console.log('key ' + key);
                    util.setKeyUnvalid(key);
                    resetService();
                    videoServices.channelDetail(request, callback);
                    //callback(result);
                    console.log('catch error: ' + error);
                    // Handle any error from all above steps         
                }
            }).done();
    },
    getVideoDetail: function (request, callback) {

        api.getVideo(request.id, function (res) {
          
            if (res) {
                var result = JSON.parse(res);
                callback(result);

            } else {
                youtube.videos.list({
                    part: 'snippet,contentDetails,statistics',
                    id: request.id
                }, function (err, data) {
                    if (err) {
                        // console.log('key ' + key);
                        util.setKeyUnvalid(key);
                        resetService();
                        videoServices.getVideoDetail(request, callback);
                        //callback(result);
                        console.log('catch getVideoDetail error: ' + err);
                        // Handle any error from all above steps         
                        //deferred.reject(err);
                    }
                    if (data) {
                        if (data.data.items.length <= 0) {
                            return null;
                        }
                        var element = data.data.items[0];
                        
                        var row = {
                            title: element.snippet.title,
                            titleConverted: util.removeUnicode(element.snippet.title),
                            videoId: element.id,
                            channelTitle: element.snippet.channelTitle,
                            channelTitleConverted: util.removeUnicode(element.snippet.channelTitle),
                            imgUrl: element.snippet.thumbnails.medium.url,
                            channelId: element.snippet.channelId,
                            tags:element.snippet.tags? element.snippet.tags.join(';'):undefined,
                            publishDated: element.snippet.publishedAt,
                            duration: element.contentDetails.duration,
                            durationConverted: util.convertDuration(element.contentDetails.duration),
                            viewCount: util.formatNumber(element.statistics.viewCount),
                            dislikeCount: util.formatNumber(element.statistics.dislikeCount),
                            likeCount: util.formatNumber(element.statistics.likeCount),
                            height: element.snippet.thumbnails.high.height,
                            width: element.snippet.thumbnails.high.width,
                            description: element.snippet.description,
                            source:config.domain,
                            categoryId:undefined

                        };
                        var reg={
                            video:row
                        };
                        //row.
                        api.postVideo(reg);
                        callback(row);



                    }

                });
            }
        });
    },
    getComment: function (request, callback) {
        getVideoComment(request.id)
            .then(function (sv) {
                callback(sv);
            })
            .catch(function (error) {


                if (error.code == 400) {
                    console.log('err 403' + error);
                    //videoServices.videoDetail(callback, null);
                } else {
                    // console.log('key ' + key);
                   // util.setKeyUnvalid(key);
                    //resetService();
                    //videoServices.getComment(request, callback);
                    //callback(result);
                    console.log('catch error: ' + error);
                    // Handle any error from all above steps         
                }

            })
            .done();;
    },
    getVideoRelated: function (request, callback) {
        getvideoRelated(request.id)
            .then(function (sv) {
                callback(sv);
            })
            .catch(function (error) {


                if (error.code == 400) {
                    console.log('err 403' + error);
                    //videoServices.videoDetail(callback, null);
                } else {
                    // console.log('key ' + key);
                    util.setKeyUnvalid(key);
                    resetService();
                    videoServices.getVideoRelated(request, callback);
                    //callback(result);
                    console.log('catch error: ' + error);
                    // Handle any error from all above steps         
                }

            })
            .done();;
    }


}

module.exports = videoServices;

