import { MbRouter } from 'mamba-websdk'

import Welcome from '../pages/welcome'
import Intro from '../pages/intro'
import OtherPage from '../pages/other'

export default new MbRouter({
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/intro',
      component: Intro
    },
    {
      path: '/other-cool-feature',
      component: OtherPage
    }
  ]
})
