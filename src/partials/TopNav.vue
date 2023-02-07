<template>
  <div class="py-1 px-2 flex justify-between items-center flex-wrap border-b">
    <CompanyName class="flex flex-col gap-0.5">
      <h3 class="text-white font-bold header">
        Bora Farms .
        <hr class="border"/>
      </h3>
    </CompanyName>

    <MenuProfile/>
  </div>
</template>

<script>
import CompanyName from "../components/CompanyName.vue";
import MenuProfile from "../components/MenuProfile.vue";
export default {
  name: "TopNav",
  components: {MenuProfile, CompanyName}
}
</script>

<style scoped>

</style>