<template>
    <div>
        <div><a v-on:click="back()">{{'Back'|language}}</a></div>
        About
    </div>
</template>

<script>
import global from './common/global.js'
import router from './_router.js'

export default {
     methods:{
        back(){
            router.push(global('active_path'));
        }
    }
};

</script>