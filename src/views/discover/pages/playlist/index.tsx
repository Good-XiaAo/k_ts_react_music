import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlaylistStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Playlist: FC<IProps> = () => {
  return (
    <PlaylistStyle>
      <div>歌单</div>
    </PlaylistStyle>
  )
}
export default memo(Playlist)
