import { configureStore } from '@reduxjs/toolkit'
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import recommendReducer from './modules/discover/recommend'
const store = configureStore({
  reducer: {
    recommend: recommendReducer
  }
})
type StateType = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export default store
