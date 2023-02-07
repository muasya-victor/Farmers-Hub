<template>
  <div class="">
    <TopNav></TopNav>
    <HeaderTwo/>

    <div class="mx-1 mt-4 flex flex-col gap-2">
      <label class="text-gray-700">Farmer Records</label>
      <FarmerTable/>
    </div>
  </div>
</template>

<script>
import TopNav from "../partials/TopNav.vue";
import HeaderTwo from "../partials/HeaderTwo.vue";
import FarmerTable from "../components/farmers/FarmerTable.vue";
export default {
  name: "Dashboard",
  components: {FarmerTable, HeaderTwo, TopNav}
}
</script>

<style scoped>

</style>