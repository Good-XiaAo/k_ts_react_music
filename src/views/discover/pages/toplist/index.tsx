import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ToplistStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Toplist: FC<IProps> = () => {
  return (
    <ToplistStyle>
      <div>排行榜</div>
    </ToplistStyle>
  )
}
export default memo(Toplist)
