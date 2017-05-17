
var tempData = {};

Object.keys(localStorage).forEach(function(key){
    if(/^\[vue-code\]\[vue-mall\]\-/.test(key)){
        tempData[key.replace(/^\[vue-code\]\[vue-mall\]\-/,'')] = localStorage[key];
    }
});

export default function(key,value,isLocalStorage){
    if(value){
        if(isLocalStorage){
            localStorage['[vue-code][vue-mall]-' + key] = value;
        }
        tempData[key] = value;
    }
    return tempData[key];
};