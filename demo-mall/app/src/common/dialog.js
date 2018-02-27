import Vue from 'vue';
import BaseForm from './../component/BaseForm';

export default function(options,content){
    
    var dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.innerHTML = '<b-form :title="title" :content="content" :footer="footer" :close="true" @remove="remove"></b-form>';
    document.body.appendChild(dialog);

    content = content || options.content || 'no content';
    new Vue({
        components:{
            'b-form':BaseForm
        },
        el:dialog,
        data(){
            return {
                title:options.title,
                content:typeof content === 'function'?content(this):content,
                footer:options.footer,
            }
        },
        methods:{
            remove(){
                this.$el.parentNode.removeChild(this.$el);
            }
        }
    });

}