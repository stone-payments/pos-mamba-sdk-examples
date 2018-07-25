import { MbRouter } from 'mamba-websdk'

import Example from '../pages/example'

export default new MbRouter({
  routes: [
    {
      path: '/',
      component: Example
    }, 
  ]
})
