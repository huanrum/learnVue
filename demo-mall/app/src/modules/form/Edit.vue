<template>
    <b-form :title="'Edit'" :footer="footer">
        <div class="row">
            <label class="title">{{'Name'|language}}</label>
            <div class="value">
                <input v-model="entity.name">
            </div>
        </div>
        <div class="row">
            <label class="title">{{'Address'|language}}</label>
            <div class="value">
                <input v-model="entity.address">
            </div>
        </div>
        <div class="row">
            <label class="title">{{'EMail'|language}}</label>
            <div class="value">
                <input v-model="entity.email">
            </div>
        </div>
        <div class="row col-2-1">
            <label class="title">{{'Phone'|language(1)}}</label>
            <div class="value">
                <input v-model="entity.phone1">
            </div>
        </div>
        <div class="row col-2-1">
            <label class="title">{{'Phone'|language(2)}}</label>
            <div class="value">
                <input v-model="entity.phone2">
            </div>
        </div>
    </b-form>
</template>

<script>
import BaseForm from './../../component/BaseForm.vue'

function footer(data) {
    return [
        function confim() {
            console.log(data.entity);
        }
    ];
}

export default {
    components: {
        'b-form': BaseForm
    },
    data() {
        return {
            entity: {},
            footer: footer(this)
        }
    }
}
</script>

<style lang="scss">

</style>


