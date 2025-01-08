import React, { Suspense } from 'react'
import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'
import { useRoutes } from 'react-router-dom'
import routes from './router'
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="加载中....">
        <div className="nav">{useRoutes(routes)}</div>
      </Suspense>

      <AppFooter />
    </div>
  )
}

export default App
