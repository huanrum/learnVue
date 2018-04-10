<template>
  <div>
    <div class="main-content">
      <div class="main-content-header">
        <div class="main-menu" v-for="menu in menus" v-log="menu" :key="menu.name">
          <div @click="goto(menu.path)" :class="{'active':$route.name === menu.name}">
            <img :src="menu.icon">
            <div>{{menu.name |language}}</div>
          </div>
        </div>
      </div>
      <div class="main-content-content">
        <router-view class="main-view"></router-view>
      </div>
      <div class="main-content-user" v-on:mouseenter="userShow=true" v-on:mouseleave="userShow=false">
          <a>{{user.name}}</a>
          <div class="user-menu" v-show="userShow">
            <div><router-link to="/login">{{'Logout'|language}}</router-link></div>
            <div><router-link to="/about">{{'About'|language}}</router-link></div>
            <div><router-link to="/help">{{'Help'|language}}</router-link></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "./_router";
import global from "./common/global";
import websocket from "./common/websocket";
import menus from './modules/_router';

export default {
  data() {
    if (Date.now() - global("login") > 10 * 60 * 1000) {
      router.push("/login");
    } else {
      websocket({ action: "login", data: global("name") || Date.now() });
    }
    return {
      user: {
        name: global("name") || ".User."
      },
      menus: menus,
      userShow: false
    };
  },
  methods: {
    logout() {},
    goto(url){
      router.push(url);
    }
  }
};
</script>

<style lang="scss">

.main-content {
  position: fixed;
  float: left;
  width: 100%;
  left: 0;
  height: 100%;
  transition: all 0.5s ease 0s;
  z-index: 10;
  .main-content-header {
    position: relative;
    z-index: 11;
    padding: 0.2em 1em;
    border-bottom: 1px solid #d3d3d3;
    .main-menu{
      display: inline-block;
      margin: 0.25em 0.5em;
      padding: 0.25em;
      &>*{
        cursor: pointer;
        padding: 1em 0;
        border-bottom: 1px solid #d3d3d3;
        text-align: center;
        &.active{
          border: 1px solid #f3f3f3;
        }
        &:hover{
          opacity: 0.6;
        }
        img{
          height:2em;
        }
      }
    }
  }
  .main-content-content {
    height:calc(100% - 4em);
    .main-view {
      position: relative;
      height: calc(100% - 1em);
      padding: 0.5em;
    }
  }
  .main-content-user {
    position: fixed;
    left: 50%;
    top: 0;
    transform: translate(-50%, -75%);
    padding: 8px;
    border-radius: 50%;
    background: #d3d3d3;
    z-index: 9999;
    &:hover {
      transform: translate(-50%, 0);
      .user-menu {
        position: absolute;
        top:100%;
        left:50%;
        transform: translate(-50%, 0);
        background: #333333;
        border-radius: 8px;
        >*{
          padding: 0.2em 1em;
          white-space: nowrap;
          a{
            color:#00AEEF;
          }
          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>
