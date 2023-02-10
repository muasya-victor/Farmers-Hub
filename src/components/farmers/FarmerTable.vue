<template>
  <div class="flex flex-col gap-1">
    {{fetchData}}

<!--    filters and call to action-->
    <div class="flex  items-center justify-end w-full">
      <div class="w-full ">
        <a-button type="informative" class="flex items-center" size="middle" @click="routeTo">
          Sort By name
        </a-button>
      </div>

      <a-button type="primary" class="flex items-center" size="middle" @click="routeTo">
        <template #icon>
          +
        </template>
        Farmer
      </a-button>
    </div>

<!--  table and base loader-->
    <div class="w-full h-64 flex items-center justify-center" v-if="getFarmers.length === 0">
      <BaseLoader  class="mx-auto w-fit"/>
    </div>

    <a-table v-else :dataSource="getFarmers" :columns="columns" content="sth"/>

  </div>
</template>

<script>
import AddNew from "../icons/AddNew.vue";
import router from "../../router/index.js";
import {mapGetters} from 'vuex'
import store from "../../store/index.js";
import BaseLoader from "../BaseLoader.vue";
export default {
  name: "FarmerTable",
  components: {BaseLoader, AddNew},
  data(){
    return {
      columns: [
        {
          title: 'Milk Quantity',
          dataIndex: 'milk_quantity',
          key: 'milk_quantity',
        },
        {
          title: 'Farmer',
          dataIndex: 'user_id',
          key: 'user_id',
        },
        {
          title: 'Actions',
        }
      ],
    }
  },
  methods : {
    routeTo(){
      router.push({name:'register'})
    },

  },
  computed:{
    fetchData(){
      store.dispatch('fetchFarmers', 'records')
    },
    ...mapGetters({
      getFarmers: "getFarmers"
    })
  }
}
</script>

<style scoped>

</style>