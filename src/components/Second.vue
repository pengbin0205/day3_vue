<template>
    <div>
        <h3>用户管理</h3>

        <table border="2">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>生日</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user, index) in user_list" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.bir}}</td>
                <td><a href="javascript:void(0)" @click="del(index)">删除</a> |
                    <!--         传递的id是属性 则需要v-bind绑定           -->
                    <router-link :to="`/detail/${user.id}`">查看用户详情</router-link>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: "Second",
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
          // 删除学员信息
          del(index) {
            this.user_list.splice(index,1);
          }
       }
    }
</script>

<style scoped>

</style>
