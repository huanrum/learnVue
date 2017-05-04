<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-for="router in routers"><router-link to="/first">第一页</router-link></div>
    <div><router-link to="/second">第二页</router-link></div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routers:[]
    }
  },
  methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
