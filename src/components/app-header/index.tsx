import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { AppHeaderLeft, AppHeaderRight, AppHeaderStyle } from './style'
import {Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import headerTitles from '@/assets/data/header_titles.json'
interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  interface IheaderTitles {
    title: string
    type: string
    link: string
  }
  const showItem = (item: IheaderTitles) => {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined
          }}
        >
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <AppHeaderStyle>
      <div className="content wrap-v1">
        <AppHeaderLeft>
          <h1 className="logo sprite_01">
            <a href="/#">网易云音乐</a>
          </h1>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </AppHeaderLeft>
        <AppHeaderRight>
        <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </AppHeaderRight>
      </div>
      {/* <div className="divider"></div> */}
    </AppHeaderStyle>
  )
}
export default memo(AppHeader)
