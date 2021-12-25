<template>
    <div class="title-wrap">
        <p class="title">{{ titleObj.title }}</p>
        <p class="descr">{{ titleObj.descr }}</p>
    </div>
</template>

<script>
export default {
    props: {
      titleObj: Object
    },
    created() {
      console.log(this.titleObj.title, 'titleobj');
    },
}
</script>

<style lang="scss" scoped>
.title-wrap {
    text-align: center;
    .title {
        font-size: 40px;
        font-weight: bold;
        color: #333333;
    }
    .descr {
        font-size: 24px;
        color: #595959;
        margin-top: 28px;
    }
}
</style>