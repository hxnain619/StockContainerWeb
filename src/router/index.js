import Vue from 'vue'
import Router from 'vue-router'
import ContractPage from '@/components/ContractPage'
import Dashboard from '@/components/Dashboard'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Contracts',
      name: 'ContractPage',
      component: ContractPage,
      
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
