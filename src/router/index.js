import Vue from 'vue'
import Router from 'vue-router'
import Customers from '../components/Customers'
import About from '../components/About'
import Add from '../components/Add'
import CustomersData from '../components/CustomersData'
import Edit from '../components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers
    },
      {
        path:"/customer/:id",
        name:CustomersData,
        component:CustomersData
      },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})
