import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppFooterStyle } from './style'
interface IProps {
  children?: ReactNode
}
const AppFooter: FC<IProps> = () => {
  return (
    <AppFooterStyle>
      <div>AppFooter</div>
    </AppFooterStyle>
  )
}
export default memo(AppFooter)
