import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  return (
    <RecommendStyle>
      <div>推荐12</div>
    </RecommendStyle>
  )
}
export default memo(Recommend)
