import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DownloadStyle } from './style'
interface IProps {
  children?: ReactNode
}
const Download: FC<IProps> = () => {
  return (
    <DownloadStyle>
      <div>下载客户端</div>
    </DownloadStyle>
  )
}
export default memo(Download)
