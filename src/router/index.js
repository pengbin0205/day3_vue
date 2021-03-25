import Vue from 'vue'
// 导入路由对象
import Router from 'vue-router'
// 导入定义好的组件
import First from "../components/First";
import Second from "../components/Second";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
    // 路由与组件的映射
    routes: [
        {path: "/first", component: First},
        {path: "/second", component: Second},
        {path: "/detail/:id", component: UserDetail},
        {path: "/", redirect: "/first"},
        {path: "/*", redirect: "/first"},
    ]
})
