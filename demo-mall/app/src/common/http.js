
var baseUrl = 'http://192.168.1.248:8888/vue/mall/';

export default function(url,parms){
    var parmStr = Object.keys(parms || {}).sort(function (a, b) { return a.length - b.length; }).map(function(k){
        if(new RegExp(':'+k).test(url)){
            url.replace(new RegExp(':'+k,'g'),parms[k]);
        }else{
            return k+'='+parms[k];
        }
    }).filter(function(i){return !!i;}).join('&');

    return function(data,method){
        var option = {method:method};
        if(data){
            option.method = option.method || 'POST';
            option.body = JSON.stringify(data);
        }else{
            option.method = option.method || 'GET';
        }
        return fetch((/^(http:|https:)/.test(url)?'':baseUrl) + url + (parmStr?'?':'') + parmStr , option).then(function(req){
            return req.json();
        });
    }
}
