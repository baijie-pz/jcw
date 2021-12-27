<template>
  <top-float />
  <left-float />
  <router-view/>
</template>
<script>
import topFloat from '@/components/float/topFloat';
import leftFloat from '@/components/float/leftFloat';
export default {
  components: {
    topFloat,
    leftFloat
  }
}
</script>
<style lang="scss">
@import "./style/common";
html body {
    font-family: "Source Han Sans CN", "Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "华文细黑", "STHeiti", "MingLiu";
    #app {
      width: 100vw;
      height: 100vh;
    }
}
</style>
