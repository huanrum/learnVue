
<template>
    <div class="relation">
        <div class="friend">
            <ul>
                <li v-for="fd in websocket.friends" v-on:click="showFirent(fd)">
                    <span>{{fd.id}}</span>
                </li>
            </ul>
        </div>
        <div class="message" v-show="!!active.id">
            <div class="title">{{active.id}}</div>
            <div class="content">
                <div class="old">
                    <div v-for="am in active.messageList" :class="{right:am.get}">{{am.value}}</div>
                </div>
                <div class="new">
                    <textarea v-model="message"></textarea>
                    <button v-on:click="send">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import websocket from './../common/websocket.js'

export default {
    data(){
        return {
            title: 'connection',
            websocket:websocket(),
            active:{id:'',messageList:null},
            message:''
        };
    },
    methods:{
        showFirent(friend){
            this.active = friend;
        },
        send(){
            websocket({to:this.active.id,data:this.message});
        }
    }
}
    
</script>

<style lang="scss">

.relation{
    overflow: hidden;
    .friend{
        float:right;
        width:12em;
        height:100%;
        background:#d3d3d3;
    }
    .message{
        width:calc(100% - 13em);
        height:100%;
        .title{
            height:2em;
            text-align: center;
        }
        .content{
            border:1px solid #d3d3d3;
            .old{
                height:20em;
                padding:1em;
                .right{
                    text-align: right;
                }
            }
            .new{
                text-align: center;
                textarea{
                    width:calc(100% - 5px);
                    height:4em;
                }
                button{
                    width:4em;
                }
            }
        }
    }
}

</style>