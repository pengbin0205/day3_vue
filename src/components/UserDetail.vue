<template>
    <div>
        <h3>用户详情页</h3>
<!--        需求：在用户详情页展示该用户的详细信息-&ndash;&gt; {{ $route.params.id}}-->
        <!--    遍历查询用户的详细信息  展示出来    -->
        <span v-for="(value, key) in JSON.parse($route.params.data)" :key="key">
              {{ key }}: {{ value }}<br>
        </span>
        <button @click="back_index">返回首页</button>
        <button @click="back_user">返回用户列表页</button>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        data() {
            return {
                user_list: [
                    {id: 1, username: "小黑", bir: "2022-12-12", content: "自我介绍"},
                    {id: 2, username: "小包", bir: "2032-12-12", content: "自我介绍"},
                    {id: 3, username: "小子", bir: "2042-12-12", content: "自我介绍"},
                    {id: 4, username: "小率", bir: "252-12-12", content: "自我介绍"},
                ]
            }
        },
        methods: {
          back_index() {
            this.$router.push({path: '/'});
          },
          back_user() {
            this.$router.push({path: '/second'});
          },
        }
    }
</script>

<style scoped>

</style>
