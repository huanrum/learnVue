import global from './../common/global';
import extend from './../common/extend';

var languages = ['en','zh'];

var baseData = {
    add:['Add','添加'],
    remove:['Remove','移除'],
    update:['Update','更新'],
    confim:['Confim','确认'],
    yes:['Yes','是'],
    no:['No','否'],
    ok:['Ok','确定'],
    cancel:['Cancel','取消']
};

var loginData = {
    username:['UserName','用户名'],
    password:['Password','密  码'],
    version:['Version','版本']
};

var menuData = {
    demo:['demo','实例'],
    relation:['Relation','通信'],
    book:['Book','书籍'],
    math:['Math','数学'],
    story:['Story','故事'],
    shop:['Shop','商店'],
    list:['List','列表'],
    view:['View','视图']
};

var mainData = {
    login:['Login','登录'],
    logout:['Logout','登出'],
    help:['Help','帮助'],
    about:['About','关于'],
    back:['Back','返回']
};


var bookData = {
    id:['Id','编号'],
    name:['Name','名称'],
    difficulty:['Difficulty','难度系数'],
    author:['Author','作者'],
    press:['Press','出版社'],
    email:['EMail','邮箱'],
    price:['Price','价格'],
    date:['Date','日期'],
    classfk:['Class','类别']

};

var formData = {
    form:['Form','表单'],
    view:['View','视图'],
    edit:['Edit','编辑'],
    address:['Address','地址'],
    phone:['Phone{0}','电话{0}']
};


var data = extend({},baseData,loginData,menuData,mainData,bookData,formData);

export default function(value,parameters){
    var lang = global('language') || 'en';
    var index = languages.indexOf(lang);
    var result = (data[value.toLocaleLowerCase()] || [])[index] || value;
    if(typeof parameters === 'object'){
        Object.keys(parameters||{}).forEach(function(key){
            result = result.replace(new RegExp('\{\s*'+key+'\s*\}','g'),parameters[value] || '');
        });
    }else if(typeof parameters === 'function'){
        result = parameters(result);
    }else{
        for(var i=1;i<arguments.length;i++){
            result = result.replace(new RegExp('\{\s*'+(i-1)+'\s*\}','g'),arguments[i] || '');
        }
    }
    return result;
}