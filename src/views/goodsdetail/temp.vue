<template>
  <div></div>
</template>

<script>
export default {
  created () {
    this.$router.push({name: 'goodsdetails', params: {goodsid: this.$route.params.goodsid, goodstypes: this.$route.params.goodstypes}})
  }
}
</script>

<style>

</style>
