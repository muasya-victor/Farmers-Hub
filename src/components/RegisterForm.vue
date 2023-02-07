<template>
  <div class=" flex flex-col gap-4">
    <div>
      <label>
        Name
        <RequiredTag/>
      </label>

      <a-input v-model:value="password" type="text" placeholder="............"  />
    </div>
    <div>
      <label>
        Email
        <RequiredTag/>
      </label>

      <a-input v-model:value="password" type="text" placeholder="............"  />
    </div>
    <div>
      <label>
        Password
        <RequiredTag/>
      </label>

      <a-input v-model:value="password" type="text" placeholder="............"  />
    </div>
    <div>
      <label>
        Confirm Password
        <RequiredTag/>
      </label>

      <a-input v-model:value="password" type="text" placeholder="............"  />
    </div>

    <a-button type="primary">
      Register Farmer
    </a-button>

  </div>
</template>

<script>
import RequiredTag from "./RequiredTag.vue";
export default {
  name: "RegisterForm",
  components: {RequiredTag}
}
</script>

<style scoped>

</style>