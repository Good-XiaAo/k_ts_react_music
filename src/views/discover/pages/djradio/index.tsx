import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DjradioStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Djradio: FC<IProps> = () => {
  return (
    <DjradioStyle>
      <div>主播电台</div>
    </DjradioStyle>
  )
}
export default memo(Djradio)
