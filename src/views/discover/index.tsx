import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { DiscoverStyle } from './style'
import NavBar from './components/nav-bar'
interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <DiscoverStyle>
      <NavBar />
      <Suspense fallback="正在加载...">
        <Outlet />
      </Suspense>
    </DiscoverStyle>
  )
}
export default memo(Discover)
