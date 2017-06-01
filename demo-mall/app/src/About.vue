<template>
    <div>
        <div><a v-on:click="back()">{{'Back'|language}}</a></div>
        About
    </div>
</template>

<script>
import global from './common/global'
import router from './_router'

export default {
     methods:{
        back(){
            router.push(global('active_path'));
        }
    }
};

</script>