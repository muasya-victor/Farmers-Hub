<template>
  <div class="flex flex-col gap-1">
    <div class="flex  items-center justify-end w-full">
      <a-button type="primary" class="flex items-center" size="middle" @click="routeTo">
        <template #icon>
          +
        </template>
        Farmer
      </a-button>
    </div>

    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script>
import AddNew from "../icons/AddNew.vue";
import router from "../../router/index.js";
export default {
  name: "FarmerTable",
  components: {AddNew},
  data(){
    return {
      dataSource: [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ],

      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    }
  },
  methods : {
    routeTo(){
      router.push({name:'register'})
    }
  }
}
</script>

<style scoped>

</style>