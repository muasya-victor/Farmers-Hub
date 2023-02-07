<template>
  <div class="bg-[url('src/assets/images/milk_glass.jpg')] bg-cover bg-no-repeat bg-center  h-full w-full
  flex justify-center py-[10%]
">
    <LoginDescription/>
  </div>
</template>

<script>
import LoginDescription from "./LoginDescription.vue";
export default {
  name: "LoginImageHolder",
  components: {LoginDescription}
}
</script>

<style scoped>

</style>