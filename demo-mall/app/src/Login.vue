<template>
    <div>
        <div class="login-from">
            <div class="login-row">
                <div>UserName</div>
                <input type="text" v-model="username">
            </div>
            <div class="login-row">
                <div>Password</div>
                <input type="password" v-model="password">
            </div>
            <div class="login-row">
                <button v-on:click="login()">Login</button>
            </div>
        </div>
        <div>version <span>{{version}}</span></div>
    </div>
</template>

<script>
 import http from './common/http.js'
 import global from './common/global.js'
 import router from './_router.js'

export default {
    data(){
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