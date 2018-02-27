<template>
    <div>
        <div class="login-from">
            <div class="login-row">
                <div>{{'UserName'|language}}</div>
                <input type="text" v-model="username">
            </div>
            <div class="login-row">
                <div>{{'Password'|language}}</div>
                <input type="password" v-model="password">
            </div>
            <div class="login-row">
                <button v-on:click="login()">{{'Login'|language}}</button>
            </div>
        </div>
        <div>{{'version'|language}} <span>{{version}}</span></div>
    </div>
</template>

<script>
 import http from './common/http';
 import global from './common/global';
 import websocket from './common/websocket';
 import router from './_router';

export default {
    data(){
        if(global('name')){
            websocket({action: 'logout'});
        }
        return {
            version:'1.0.0',
            username:global('name'),
            password:''
        }
    },
    methods:{
        login(){
            http('login',{name:this.username,password:this.password})().then(function(req){
                router.push({path:global('active_path'),params:req.data});
                Object.keys(req.data).forEach(function(key){
                    global(key,req.data[key],true);
                });
            });
        }
    }
};

</script>

<style lang="scss">
    .login-from{
        position: absolute;
	    margin-left: 50%;
	    top: 50%;
	    transform:translate(-50%,-50%);
	    padding : 2px;
	    border-radius : 10px;
        background:#9345fd;
        .login-row{
            margin:0.5em 1em;
            div{
                display:inline-block;
                width:10em;
            }
            input{

            }
            button{

            }
        }
    }
</style>