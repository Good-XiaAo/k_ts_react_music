import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendStyle } from './style'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction } from '@/store/modules/discover/recommend'
import TopBanners from './components/top-banners'
interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, [dispatch])
  return (
    <RecommendStyle>
      <TopBanners />
    </RecommendStyle>
  )
}
export default memo(Recommend)
