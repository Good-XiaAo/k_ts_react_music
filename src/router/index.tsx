import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))
const Toplist = lazy(() => import('@/views/discover/pages/toplist'))
const Playlist = lazy(() => import('@/views/discover/pages/playlist'))
const Djradio = lazy(() => import('@/views/discover/pages/djradio'))
const Artist = lazy(() => import('@/views/discover/pages/artist'))
const Album = lazy(() => import('@/views/discover/pages/album'))
const Mine = lazy(() => import('@/views/mine'))
const Friend = lazy(() => import('@/views/friend'))
const Download = lazy(() => import('@/views/download'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/toplist',
        element: <Toplist />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
