
var tempData = {};

Object.keys(localStorage).forEach(function(key){
    if(/^\[vue-code\]\[vue-game\]\-/.test(key)){
        tempData[key.replace(/^\[vue-code\]\[vue-game\]\-/,'')] = localStorage[key];
    }
});

export default function(key,value,isLocalStorage){
    if(value){
        if(isLocalStorage){
            localStorage['[vue-code][vue-game]-' + key] = value;
        }
        tempData[key] = value;
    }
    return tempData[key];
};