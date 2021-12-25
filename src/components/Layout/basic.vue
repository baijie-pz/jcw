<template>
  <div>
    <common-header />
    <router-view/>
    <common-footer />
  </div>
</template>
<script>
import commonHeader from "@/components/header/header";
import commonFooter from "@/components/footer/footer";
export default {
  data() {
    return {

    }
  },
  components: {
    commonHeader,
    commonFooter
  }
}
</script>
<style lang="scss" scoped>
  
</style>
