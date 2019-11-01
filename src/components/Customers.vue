<template>
  <div class="customers container">
      <Alert v-bind:message="alert" v-if="alert"></Alert>
      <h1 class="page-header">用户管理系统</h1>
      <input type="text" class="form-control search" placeholder="搜索" v-model="filterInput">
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>邮箱</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="customer in filterBy(customers,filterInput)" :key="customer.id">
                  <td>{{customer.name}}</td>
                  <td>{{customer.photo}}</td>
                  <td>{{customer.email}}</td>
                  <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      alert:"",
      filterInput:"",  //搜索用
    }
  },
  created() {
    // 判断Alert.vue的alter数据是否传递过来
    if (this.$route.query.alert) {
      this.alert=this.$route.query.alert
    }
    this.getCustomers()  
  },
  updated() {
    // 更新时调用
    this.getCustomers()
  },
  methods:{
      getCustomers(){
      // 获取新闻列表
      this.$http.get("http://localhost:3000/users").then(result=>{
          // if (result.body.status===0) {
              this.customers = result.body;
          // }
      })
  },
      filterBy(customers,value){
          return customers.filter(function (customer) {
              return customer.name.match(value)
          })
      }
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  width: 200px;
}
</style>
