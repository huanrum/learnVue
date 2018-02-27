<template>
    <b-form :title="'View'" :content="content">
    </b-form>
</template>

<script>
import BaseForm from './../../component/BaseForm';

export default {
    components: {
        'b-form': BaseForm
    },
    data(){
        return {
            content:'<strong>some columns</strong>'
        };
    }
}
</script>

<style lang="scss">

</style>


