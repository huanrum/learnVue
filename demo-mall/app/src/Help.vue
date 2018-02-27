<template>
    <div>
        <div><a v-on:click="back()">{{'Back'|language}}</a></div>
        <div>{{'Version'|language}} <span>{{version}}</span></div>
        Helper
    </div>
</template>

<script>
import global from './common/global';
import router from './_router';

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