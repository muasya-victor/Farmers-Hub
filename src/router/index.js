import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue";
import RegisterFarmer from "../components/farmers/RegisterFarmer.vue";
import FarmerTable from "../components/farmers/FarmerTable.vue";


let routes = [
    {
        path:'/',
        name:'home',
        component:Dashboard,
        meta : {
            icon:'',
            role:''
        },
        children: [
            {
                path:'',
                name:'farmers',
                component:FarmerTable,
                meta : {
                    icon:'',
                    role:''
                }
            },
            {
                path:'register',
                name:'register',
                component:RegisterFarmer,
                meta : {
                    icon:'',
                    role:''
                }
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login,
        meta : {
            icon:'',
            role:''
        }
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router