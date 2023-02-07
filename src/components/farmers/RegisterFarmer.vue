<template>
  <div>
    <a-modal v-model:visible="visible" width="800px" title="Basic Modal" @ok="handleOk" @cancel="handleCancel">
      <RegisterForm />
    </a-modal>
  </div>
</template>

<script>
import router from "../../router/index.js";
import RequiredTag from "../RequiredTag.vue";
import RegisterForm from "../RegisterForm.vue";

export default {
  name: "RegisterFarmer",
  components: {RegisterForm, RequiredTag},
  data(){
    return {
      visible:true
    }
  },
  methods:{
    handleOk(e){
      this.visible = true
      router.go(-1)
    },
    handleCancel(){
      router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>