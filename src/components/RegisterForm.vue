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
        Role
      </label>


      <ADropdownButton :menu=items trigger="click"  >
        {{role.type}}
        <template #overlay>
          <AMenu @click="handleMenuClick" >
            <AMenuItem v-for="item in items" :key="item" v-model="role">
              {{item.type}}
            </AMenuItem>
          </AMenu>
        </template>

      </ADropdownButton>

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
  components: {RequiredTag},
  data(){
    return {
      password:'',
      role:{
        type:'Farmer',
        value:2
      },
      items:[
        {
          type:'Admin',
          value:1
        },
        {
          type:'Farmer',
          value:2
        },
      ]
    }
  },
  methods : {
    handleMenuClick({key}){
      this.role = key
    }
  }
}
</script>

<style scoped>

</style>