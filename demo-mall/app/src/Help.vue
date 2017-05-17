<template>
    <div>
        <div><a v-on:click="back()">Back</a></div>
        <div>version <span>{{version}}</span></div>
        Helper
    </div>
</template>

<script>
import global from './common/global.js'
import router from './_router.js'

export default {
    data () {
        return {
            version:'1.0.0'
        }
    },
    methods:{
        back(){
            router.push(global('active_path'));
        }
    }
};

</script>