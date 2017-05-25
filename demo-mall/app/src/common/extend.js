




extend(Array.prototype,{
    find:function(){
        return this.filter.apply(this,arguments)[0];
    }
});

function extend(obj){
    var args = arguments;
    obj = obj || {};
    for(var i=1;i<args.length;i++) {
        Object.keys(args[i]).forEach(function(key){
            obj[key] = obj[key] || args[i][key];
        });
    }
    return obj;
}

export default extend;