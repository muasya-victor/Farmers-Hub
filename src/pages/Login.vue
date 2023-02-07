<template>
  <div class="h-screen w-full flex items-center justify-center rounded">
    <div class="w-10/12 h-[80%] ring-1  flex">
      <LoginImageHolder/>
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import LoginImageHolder from "../components/LoginImageHolder.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: {LoginForm, LoginImageHolder}
}
</script>

<style scoped>

</style>