import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Artist: FC<IProps> = () => {
  return (
    <ArtistStyle>
      <div>歌手</div>
    </ArtistStyle>
  )
}
export default memo(Artist)
