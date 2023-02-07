<template>
  <div class="w-full bg-[#9EF16C] flex flex-col gap-2 pt-2 ">
    <div class="w-fill flex justify-end items-center px-2 z-50">
      <IconContainer>
        <MenuUp/>
      </IconContainer>
    </div>

    <div class="w-full flex items-center gap-[93px] flex-wrap px-2">
      <InformationCards >
        <UserGroup/>
      </InformationCards>

      <InformationCards name="Milk Delivered" value="14480 L">
        <Beaker/>
      </InformationCards>

      <InformationCards name="Average Daily Deleverage" value="380 L">
        <Beaker/>
      </InformationCards>
    </div>

    <div class="w-full flex items-center gap-48 flex-wrap bg-[#367310] py-0.5 px-2">
      <LinkItem />
      <LinkItem link="New Record"/>
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
export default {
  name: "HeaderTwo",
  components: {Beaker, Settings, LinkItem, UserGroup, InformationCards, IconContainer, MenuUp}
}
</script>

<style scoped>

</style>