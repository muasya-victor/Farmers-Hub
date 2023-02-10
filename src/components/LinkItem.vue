<template>
  <div class="text-white capitalize flex flex-col w-fit justify-center hover:text-blue-300 cursor-pointer">
    <div class="flex w-fit items-center gap-1 text-sm">
<!--      icon only-->
      <slot/>
      {{link}}
    </div>
<!--    <hr class="border "/>-->
  </div>
</template>

<script>
export default {
  name: "LinkItem",
  props : {
    link : {
      type:String,
      default: 'Farmer'
    }
  }
}
</script>

<style scoped>

</style>