<template>
  <div class="w-fit flex items-center gap-4 ">
    <BasicMenu/>

    <a-avatar style="background-color: #87d068">
      <template #icon>
        <div class="h-full w-full flex items-center justify-center">
          <ProfileIcon class=""/>
        </div>
      </template>
    </a-avatar>

  </div>
</template>

<script>
import BasicMenu from "./icons/BasicMenu.vue";
import {UserOutlined} from '@ant-design/icons'
import ProfileIcon from "./icons/ProfileIcon.vue";
export default {
  name: "MenuProfile",
  components : {
    ProfileIcon,
    BasicMenu,
    UserOutlined
  }
}
</script>

<style scoped>

</style>