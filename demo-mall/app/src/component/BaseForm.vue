
<template>

    <div class="form">
        <div class="form-header">
            <label>{{title|language}}</label>
            <a v-if="!!close" v-on:click="done()">&times;</a>
        </div>
        <div class="form-content">
            <slot v-if="!content"></slot>
            <div v-if="!!content" v-html="content"></div>
        </div>
        <div class="form-footer">
            <a v-for="fo in footer" v-on:click="done(fo)">{{fo.name|language}}</a>
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
            overflow: hidden;
            .row{
                @for $i from 1 through 12 {
                     @for $j from 1 through $i {
                        &.col-#{$i}-#{$j}{
                            float: left;
                            width: 100/$i*$j + %;
                        }
                    }
                }
                .title{
                    display: inline-block;
                    width: calc(35% - 1em);
                    padding: 0.5em;
                } 
                .value{
                    display: inline-block;
                    width: calc(65% - 2em);
                    padding: 0.5em;
                    input{
                        padding: 0.5em;
                        width: 100%;
                    }
                }
            }
        }
        .form-footer{
            text-align: center;
            border: 1px solid #d3d3d3;
            padding: 0.5em;
            a{
                cursor: pointer;
                margin: 0.5em 1em;
                background:#9999ff;
                border: 1px solid #9999aa;
                color:#ffffff;
                &:hover{
                    opacity: 0.6;
                }
            }
        }
    }
</style>