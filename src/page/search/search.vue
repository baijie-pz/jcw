<template>
    <div>
        search: {{searchValue}}
    </div>
</template>

<script>
import vueRouter from 'vue-router';
export default {
    beforeRouteEnter(to, from) {
        console.log(to, 'to', from,vueRouter);
        // if (!to.params.searchValue) {
        //     this.$router.back();
        // }
    },
    props: ['searchValue'],
    components: {},
    data() {
        return {}
    },
    mounted() {
        console.log(this.searchValue, 'searchValue');
    }
}
</script>

<style lang="scss" scoped>

</style>
