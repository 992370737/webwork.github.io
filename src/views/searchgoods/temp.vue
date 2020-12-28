<template>
  <div>

  </div>
</template>

<script>
export default {
  created () {
    this.$router.push({name: 'searchtogoods', params: {key: this.$route.params.key}})
  }
}
</script>

<style>

</style>
