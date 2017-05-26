<template>
  <div>
    <h1>{{'Book'|language}}</h1>
    <HttpGrid :url="url"></HttpGrid>
  </div>
</template>

<script type="text/javascript">

import HttpGrid from './../../component/HttpGrid.vue'

export default {
    components:{
        HttpGrid
    },
    data(){
        return {
            url:'book/math'
        }
    }
}
</script>

<style>

</style>