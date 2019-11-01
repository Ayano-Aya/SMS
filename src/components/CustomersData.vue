<template>
    <div class="customersdata container">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}

            <span class="pull-right">
                <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
                <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-earphone"> {{customer.phone}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{customer.email}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-heart"> {{customer.age}}</span></li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-book"> {{customer.enducation}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-home"> {{customer.graduationschool}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-user"> {{customer.profession}}</span></li>
            <li class="list-group-item"><span class="glyphicon glyphicon-menu-hamburger"> {{customer.profile}}</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'customersdata',
    data() {
        return {
            customer:""
        }
    },
        created() {
        this.getchCustomer(this.$route.params.id)
    },
    methods: {
        getchCustomer(id){
            this.$http.get("http://localhost:3000/users/"+id).then(result=>{
                this.customer = result.body
            })
        },
        deleteCustomer(id){
            this.$http.delete("http://localhost:3000/users/"+id).then(resul=>{
                this.$router.push({path:"/",query:{alert:"删除用户成功!"}})
            })
        }
    },

}
</script>
<style lang="">
    
</style>