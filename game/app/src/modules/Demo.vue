<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    <ul>
        <li v-for="article in articles" :key="article.name">
           {{article.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import http from './../common/http';

export default {
   data() {
    return {
      author: "微信公众号 jinkey-love",
      articles: [],
      }
   },
   mounted: function() {
        http('http://192.168.1.248:8888/mall/book/math',{pageSize:12,pageNumber:1})()
          .then(response=>this.articles = response.data.list);
   }
}
</script>

<style>
</style>