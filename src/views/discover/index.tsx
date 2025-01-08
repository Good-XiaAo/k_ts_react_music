import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DiscoverStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <DiscoverStyle>
      <div>推荐</div>
    </DiscoverStyle>
  )
}
export default memo(Discover)
