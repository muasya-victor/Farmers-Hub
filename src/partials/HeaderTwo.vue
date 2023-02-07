<template>
  <div class="w-full bg-[#69E31D] opacity-[60%] flex flex-col gap-2 py-2">
    <div class="w-fill flex justify-end items-center px-2">
      <IconContainer>
        <MenuUp/>
      </IconContainer>



    </div>
  </div>
</template>

<script>
import MenuUp from "../components/icons/MenuUp.vue";
import IconContainer from "../components/IconContainer.vue";
export default {
  name: "HeaderTwo",
  components: {IconContainer, MenuUp}
}
</script>

<style scoped>

</style>