<template>
  <div class="flex items-center h-fit gap-2 w-fit text-[#336E0F] text-lg font-bold">
    <!--      fit only Icons here-->
    <slot/>
    <span class="h-fit font-bold ">
        {{name}}
      </span>

    {{value}}
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