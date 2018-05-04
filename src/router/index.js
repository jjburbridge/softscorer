import Vue from 'vue'
import Router from 'vue-router'
import Scoreboard from '@/components/Scoreboard'
import Score from '@/components/Score'
import Batter from '@/components/Batter'
import StrikeOut from '@/components/StrikeOut'
import Walk from '@/components/Walk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scoreboard',
      component: Scoreboard
    },
    {
      path: '/score/:id?',
      name: 'score',
      component: Score
    },
    {
      path: '/batter/:id',
      name: 'batter',
      component: Batter
    },
    {
      path: '/strike-out/:id',
      name: 'strike-out',
      component: StrikeOut
    },
    {
      path: '/walk/:id',
      name: 'walk',
      component: Walk
    }
  ]
})
