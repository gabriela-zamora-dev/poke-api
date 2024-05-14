import { createRouter, createWebHistory} from "vue-router";
import Descripcion from '../components/Details.vue'

const routes = [
    {
        path: '/details/:id',
        component:Descripcion
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router