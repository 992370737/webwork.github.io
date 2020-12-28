<template>
  <div></div>
</template>

<script>
export default {
  created () {
    this.$router.push({name: 'shoppingcars', params: {username: this.$route.params.username}})
  }
}
</script>

<style>

</style>
