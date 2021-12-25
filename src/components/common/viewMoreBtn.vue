<template>
  <router-link :to="to" class="more-btn">查看更多案例&gt;&gt;</router-link>
</template>

<script>
export default {
    props: {
        to: Object
    },
    data() {
        return {
       
        }
    },
    created() {
        console.log(this.to, 'routeObj');
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.more-btn {
    width: 300px;
    height: 60px;
    border-radius: 20px;
    display: block;
    background-color: #EF8E3F;
    font-family: Source Han Sans CN;
    font-size: 28px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 60px auto 0;
    text-align: center;
    line-height: 60px;
}
</style>