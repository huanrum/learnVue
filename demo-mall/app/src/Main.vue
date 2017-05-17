<template>
  <div>
    <div class="main-menu">
      <div class="main-menu-header">
        <img src="./../assets/logo.png">
        <div>Demo Mall</div>
      </div>
      <div class="main-menu-content">
        <ul>
          <li v-for="menu in menus">
            <div><router-link :to="menu.path">{{menu.name}}</router-link></div>
            <ul>
              <li v-for="sub in menu.children">
                <div><router-link :to="sub.path">{{sub.name}}</router-link></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      <div class="main-content-header">
        <div class="user" v-on:mouseenter="userShow=true" v-on:mouseleave="userShow=false">
          <a>{{user.name}}</a>
          <div class="user-menu" v-show="userShow">
            <div><router-link to="/login">Logout</router-link></div>
            <div><router-link to="/about">About</router-link></div>
            <div><router-link to="/help">Help</router-link></div>
          </div>
        </div>
      </div>
      <div class="main-content-content">
        <router-view class="main-view"></router-view>
      </div>
      <div class="main-content-footer"></div>
    </div>
  </div>
</template>

<script>
import router from './_router.js'
import global from './common/global.js'
import menus from './modules/_router.js'

export default {
  data () {
    if(Date.now() - global('login') > 10 * 60 * 1000){
      router.push('/login');
    }
    return {
      user:{
        name:global('name') || '.User.'
      },
      menus:menus,
      userShow:false
    }
  },
  methods:{
    logout(){

    }
  }
}
</script>

<style lang="scss">

  a {
      color: #42b983;
  }

.main-menu{
    position: fixed;
    float: left;
    width: 16em;
    height: 100%;
    border-right: 1px solid #999;
    transition: all .5s ease 0s;
    .main-menu-header{
      height:5em;
      text-align: center;
      img{
        float:left;
        height:5em;
      }
      div{
        float:left;
        line-height:5em;
      }
    }
    .main-menu-content{
      width: 100%;
      height: 100%;
      padding: 1em 0;
      background: #333;
      color: #ddd;
      z-index: 9990;
      >ul {
        list-style-type: none;
        padding: 0;
        li {
          margin: 0 10px;
          >ul{
            padding-left:1em;
          }
        }
      }
    }
}


.main-content{
    position: fixed;
    float: left;
    width: calc(100% - 18em);
    left: 16em;
    height: 100%;
    padding: 0.5em 1em;
    transition: all .5s ease 0s;
    z-index:10;
    .main-content-header{
      position: relative;
      z-index:11;
      .user{
        position:relative;
        display:inline-block;
        float:right;
        .user-menu{
          position:absolute;
          float:right;
          background:#333333;
          right: 0;
          >*{
            padding:0.2em 1em;
            &:hover{
              opacity: 0.6;
            }
          }
        }
      }
    }
    .main-content-content{
      .main-view{
        position:relative;
        width:100%;
        height:100%;
      }
    }
    .main-content-footer{

    }
    
}

</style>
