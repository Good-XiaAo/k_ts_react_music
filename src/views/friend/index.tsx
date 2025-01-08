import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FriendStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Friend: FC<IProps> = () => {
  return (
    <FriendStyle>
      <div>关注</div>
    </FriendStyle>
  )
}
export default memo(Friend)
