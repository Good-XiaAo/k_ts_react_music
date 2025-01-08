import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MineStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Mine: FC<IProps> = () => {
  return (
    <MineStyle>
      <div>我的音乐</div>
    </MineStyle>
  )
}
export default memo(Mine)
