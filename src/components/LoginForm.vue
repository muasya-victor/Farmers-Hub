<template>
  <div class="w-full flex items-center justify-center">
    <div class="w-10/12 h-fit flex flex-col gap-10">

      <h3 class="header-lg w-fit font-bold p-0 h-fit">Login </h3>

      <div class="flex flex-col gap-1.5">
        <label >
          Email
          <RequiredTag/>
        </label>
        <a-input v-model:value="email" type="email" placeholder="johndoe@gmail.com" suffix=".com" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label >
          Password
          <RequiredTag/>
        </label>
        <a-input v-model:value="password" type="password" placeholder="............"  />
      </div>

      <a-button type="primary">Login</a-button>

      <p class="underline text-blue-600 cursor-pointer hover:text-red-600">Forgot Password ? Reset</p>
    </div>
  </div>
</template>

<script>
import RequiredTag from "./RequiredTag.vue";
export default {
  name: "LoginForm",
  components: {RequiredTag},
  data(){
    return {
      email:'',
      password: ''
    }
  }
}
</script>

<style scoped>

</style>