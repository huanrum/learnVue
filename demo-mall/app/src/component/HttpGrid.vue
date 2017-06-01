
<template>
    <div class="common-grid">
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns">{{column |language}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in dataList">
                    <td v-for="column in columns">{{item[column]}}</td>
                </tr>
            </tbody>
        </table>
        <div class="paginate">
            <a v-for="page in totalPage" v-bind:class="{active:page===pageNumber}" v-on:click="refresh(page)">{{page}}</a>
        </div>
    </div>
</template>

<script>
import http from './../common/http'

function getColumns(list){
    var temp = {};
    list.forEach(function(item){
        Object.keys(item).forEach(function(key){
            temp[key] = true;
        });
    });
    return Object.keys(temp);
}

function refresh(page){
    if(page !== this.pageNumber){
        http(this.url,{pageSize:12,pageNumber:page||1})().then(req=>{
            this.totalPage = parseInt(req.data.totalPage);
            this.pageNumber = parseInt(req.data.pageNumber);
            this.dataList = req.data.list;
            this.columns = getColumns(req.data.list || []);
        });
    }
}

export default {
    props :['url'],
    data(){
        return {
            totalPage:1,
            pageNumber:1,
            dataList:[],
            columns:[]
        };
    },
    methods:{
        refresh
    },
    mounted(){
        refresh.call(this);
    }
}
    
</script>

<style lang="scss">
    .common-grid{
        overflow: auto;
        table{
            border: 1px  solid #1caf9a;
            thead{
                background:#9955fd;
             }
            tr{
                border-bottom: 1px  solid #acaf9a;
                &:nth-child(2n){
                    background:#d3d3d3;
                }
                &:hover{
                    background:#d399d3;
                } 
                td{
                    min-width:10em;
                }   
            }
        }
        .paginate{
            margin:1em;
            a{
                width:4em;
                margin:0.3em;
                padding: 6px 12px;
                cursor: pointer;
                border: 1px solid #ddd;
                &:hover{
                    opacity:0.6;
                }
                &.active{
                    background:#99ff99;
                }
            }
        }
    }
</style>