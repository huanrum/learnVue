
import http from './http.js'
import global from './global.js'

var ws = null,sendMessage = [];
var data = { friends: [] };

function onmessage(e) {
    var dataMessage = JSON.parse(e.data);
    switch (dataMessage.action) {
        case 'login':
            if (dataMessage.from) {
                data.friends = data.friends.concat([{ id: dataMessage.from, messageList: [] }]);
            } else {
                data.friends = dataMessage.data.map(function (i) { return { id: i, messageList: [] } });
            }

            break;
        case 'logout':
            data.friends = data.friends.filter(function (i) { return i.id !== dataMessage.from; });
            break;
        default:
            var friend = data.friends.find(function (i) { return i.id === dataMessage.from; });
            if (friend) {
                friend.messageList = friend.messageList.concat([{
                    get: true,
                    value: dataMessage.data
                }]);
            }
            break;
    }
}

http('websocket')().then((req) => {
    ws = new WebSocket(req.data.url);
    ws.onopen = () => {
        console.log('link websocket');
        sendMessage.forEach(function(message){
            ws.send(JSON.stringify(message));
        });
    };
    ws.onmessage = onmessage;
});
window.addEventListener('beforeunload', () => {
    ws.send(JSON.stringify({ action: 'logout' })); 
    ws.close();
});

export default function(message){
    if(message){
        if(message.to){
            var friend = data.friends.find(function (i) { return i.id === message.to; });
            if (friend) {
                friend.messageList = friend.messageList.concat([{
                    get: false,
                    value: message.data
                }]);
            }
        }
         if(ws){
            ws.send(JSON.stringify(message));
        }else{
            sendMessage.push(message);
        }
    }else{
        return data;
    }
}