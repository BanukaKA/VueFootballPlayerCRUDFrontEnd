//Author : Banuka Kumara Ambegoda
//Date: 2023/06/19
const routes=[
    {path:'/home', alias: "/",component:home},
    {path:'/player',component:player},
    {path:'/team',component:team}
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')