<template>
  <div class="">
    <TopNav></TopNav>
    <HeaderTwo/>

    <div class="px-2 mt-4 flex gap-1  justify-between w-full">
      <router-view class="w-11/12"/>

      <div class="h-[inherit] border-l pl-2 w-1/12">
        <label class="text-gray-700 ">Google Ads</label>
      </div>
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