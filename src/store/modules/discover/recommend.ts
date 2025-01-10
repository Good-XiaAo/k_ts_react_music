import { getTopBanner } from '@/service/modules/recommend'
import type { IBanner } from '@/types'
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
interface IRecommendState {
  banners: IBanner[]
}
const initialState: IRecommendState = {
  banners: [
  ]
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }: PayloadAction<IBanner[]>) {
      state.banners = payload
    }
  }
})
// 发送异步请求
export const fetchRecommendDataAction = createAsyncThunk(
  'recommendData',
  async (_, { dispatch }) => {
    const res = await getTopBanner()
    dispatch(changeBannersAction(res.banners))
  }
)
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
