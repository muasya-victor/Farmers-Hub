<template>
  <div class="flex flex-col gap-0.5 w-fit p-2">
    <h3 class="text-lg font-bold ">
      {{name}}
    </h3>

    <p class="flex items-center gap-2 w-full text-[#336E0F] font-bold">
<!--      fit only Icons here-->
      <slot/>

      {{value}}
    </p>
  </div>
</template>

<script>
export default {
  name: "InformationCards",
  props : {
    name: {
      type: String,
      default: 'Registered Farmers'
    },
    value: {
      type: String,
      default: '300 '
    },
  }
}
</script>

<style scoped>

</style>