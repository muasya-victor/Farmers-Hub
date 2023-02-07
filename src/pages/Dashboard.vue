<template>
  <div class="">
    <TopNav></TopNav>
    <HeaderTwo/>
  </div>
</template>

<script>
import TopNav from "../partials/TopNav.vue";
import HeaderTwo from "../partials/HeaderTwo.vue";
export default {
  name: "Dashboard",
  components: {HeaderTwo, TopNav}
}
</script>

<style scoped>

</style>