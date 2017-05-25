
<template>

    <div class="form">
        <div class="form-header">
            <label>{{title}}</label>
            <a v-if="!!close" v-on:click="done()">&times;</a>
        </div>
        <div class="form-content" v-html="content">
            
        </div>
        <div class="form-footer">
            <a v-for="fo in footer" v-on:click="done(fo)">{{fo.name}}</a>
        </div>
    </div>

</template>

<script>

export default {
    props:['title','content','footer','close'],
    methods:{
        done(fn){
            var noClose = fn && (fn.fn && fn.fn(this) || fn(this));
            if(!noClose && this.close){
                this.$emit("remove"); 
            }
        }
    }
}
    
</script>

<style lang="scss">
    .dialog{
        position: fixed;
	    top:0;
	    left:0;
	    width: 100%;
	    height: 100%;
	    z-index:99;
	    background:rgba(0,0,0,0.65);
        .form{
            position: fixed;
	        top:50%;
	        margin-left: 50%;
	        transform: translate(-50%,-50%);
        }
    }

    .form{
        .form-header{
            background:#aaaaff;
            a{
                cursor: pointer;
                float:right;
                color:#333333;
                &:hover{
                    color:#ff6666;
                }
            }
        }
        .form-content{
            min-width:12em;
            min-height:6em;
            background:#f3f3f3;
            border:1px solid #d3d3d3;
        }
        .form-footer{
            
        }
    }
</style>