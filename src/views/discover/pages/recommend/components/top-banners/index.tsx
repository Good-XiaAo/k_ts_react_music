import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopBannersStyle } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
interface IProps {
  children?: ReactNode
}
const TopBanners: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  console.log(banners)

  return (
    <TopBannersStyle>
      <div>TopBanners</div>
    </TopBannersStyle>
  )
}
export default memo(TopBanners)
