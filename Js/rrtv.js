/*
人人视频版本：4.4.1之前
来源于nzw9314.

QuanX1.0.10：
[rewrite_local]
^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) url script-response-body https://raw.githubusercontent.com/muxu-i/Scripts/master/Js/rrtv.js

[MITM]
hostname = api.rr.tv
*/

var body = $response.body;
var url = $request.url;

if (url.indexOf('/ad/getAll') != -1) {
    var obj = JSON.parse(body);
    obj.data.adList = [];
    body = JSON.stringify(obj);
} else if (url.indexOf('/user/privilege/list') != -1) {
    var obj = JSON.parse(body);
    obj.data = [{
        "action": "play",
        "effectObject": "video",
        "id": 1,
        "function": "originalPainting",
        "func": "originalPainting",
        "endTime": 1780697166000,
        "description": "解锁原画",
        "icon": "jiesuoyuanhua"
    }, {
        "action": "play",
        "effectObject": "video",
        "id": 4,
        "function": "noLimit",
        "func": "noLimit",
        "endTime": 1780697166000,
        "description": "看剧无限制",
        "icon": "kanjuwuxianzhi"
    }, {
        "action": "play",
        "effectObject": "growth",
        "id": 37,
        "function": "0.4",
        "func": "0.4",
        "endTime": 1780697166000,
        "description": "看剧经验+40%",
        "icon": "jingyanzhijiacheng"
    }, {
        "action": "send",
        "effectObject": "danmu",
        "id": 43,
        "function": "superBarrageBlue",
        "func": "superBarrageBlue",
        "endTime": 1780697166000,
        "description": "超级弹幕",
        "icon": "chaojidanmu"
    }, {
        "action": "play",
        "effectObject": "video",
        "id": 23,
        "function": "noAd",
        "func": "noAd",
        "endTime": 1780697166000,
        "description": "看剧无广告",
        "icon": "kanjuwuguanggao"
    }];

}else if (url.indexOf('/rrtv-video/v4plus/season/detail') != -1){
    var obj = JSON.parse(body);

    obj.data['season']['feeMode'] = 'restriction';
}


body = JSON.stringify(obj);

$done({
    body
});