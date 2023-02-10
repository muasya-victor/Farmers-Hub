<template>
  <div class="w-full bg-[#9EF16C] flex flex-col gap-1 pt-0.5 ">


    <div class="w-full flex items-center gap-x-[93px] gap-y-2 justify-between flex-wrap px-2 ">
      <InformationCards >
        <UserGroup/>
      </InformationCards>

      <InformationCards name="Milk Delivered" value="14480 L">
        <Beaker/>
      </InformationCards>

      <InformationCards name="Average Daily Deleverage" value="380 L">
        <Beaker/>
      </InformationCards>

      <div class="w-full flex justify-end items-center px-2 z-50">
        <MenuUp class="text-green-800 font-bold hover:text-blue-600 cursor-pointer" />
      </div>

    </div>

    <div class="w-full flex items-center gap-x-12 md:gap-x-24 gap-y-2 flex-wrap bg-[#367310] py-2 md:py-0.5 px-2">
      <LinkItem >
        <UserGroup/>
      </LinkItem>
      <LinkItem link="Record">
        <ClipBoard/>
      </LinkItem>
      <LinkItem link="settings">
        <Settings/>
      </LinkItem>
    </div>
  </div>
</template>

<script>
import MenuUp from "../components/icons/MenuUp.vue";
import IconContainer from "../components/IconContainer.vue";
import InformationCards from "../components/InformationCards.vue";
import UserGroup from "../components/icons/UserGroup.vue";
import LinkItem from "../components/LinkItem.vue";
import Settings from "../components/icons/Settings.vue";
import Beaker from "../components/icons/Beaker.vue";
import ClipBoard from "../components/icons/ClipBoard.vue";
export default {
  name: "HeaderTwo",
  components: {ClipBoard, Beaker, Settings, LinkItem, UserGroup, InformationCards, IconContainer, MenuUp}
}
</script>

<style scoped>

</style>