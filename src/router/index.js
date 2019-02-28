import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StepsDrag from '@/components/StepsDrag'
import StepsDrag2 from '@/components/StepsDrag2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/stepsDrag',
      name:'StepsDrag',
      component: StepsDrag
    },
    {
      path:'/stepsDrag2',
      name:'StepsDrag2',
      component: StepsDrag2
    }
  ]
})
