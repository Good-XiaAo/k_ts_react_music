import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Album: FC<IProps> = () => {
  return (
    <AlbumStyle>
      <div>新碟上架</div>
    </AlbumStyle>
  )
}
export default memo(Album)
