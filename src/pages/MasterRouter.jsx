import React from 'react'
import { mount, route } from 'navi'
import { Router } from 'react-navi'

import { Home } from './Home.jsx'
import { About } from './About.jsx'

const routes = mount({
  '/': route({
    title: 'Home Title, Baby!',
    // getData: () => api.fetchProducts(),
    view: <Home />
  }),
  '/about': route({
    title: 'About, Baby!',
    view: <About />
  })
})

export const MasterRouter = ({ children, ...rest }) => {
  return (
    <Router routes={routes} {...rest}>
      {children}
    </Router>
  )
}
