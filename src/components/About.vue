<template>
  <div class="about container">
      <h1 class="page-header">2019-11-01 &nbsp;&nbsp;&nbsp;&nbsp;<sub>by:Aya&nbsp;&nbsp;&nbsp;&nbsp;</sub></h1>
      <div>
        <ul>
          <li>实现了用户的添加功能</li>
          <li>实现了用户信息的编辑功能</li>
          <li>实现了删除用户的功能</li>
          <li>实现了根据用户name搜索对应用户的功能</li>
        </ul>
        <hr>
        <ul>
          <li>通过json:server自己编写端口，数据端口默认在3000，页面运行时，保证端口也在运行</li>
          <li>通过Postman对数据进行增删改</li>
          <li>通过vue-cli创建项目文件</li>
        </ul>
        <hr>
        <ul>
          <li>共创建了7个组件</li>
          <li>App组件用于呈现基本页面</li>
          <li>Customers组件用于渲染用户信息</li>
          <li>CustomersData组件用于查看用户信息</li>
          <li>Add组件用于添加用户信息</li>
          <li>Edit组件用于修改更新用户信息</li>
          <li>Alert组件用于页面顶部消息提示框的弹出</li>
        </ul>
        <hr>
      </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  font-size: 15px;
  line-height: 30px;
}
</style>
