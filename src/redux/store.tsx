import { configureStore } from '@reduxjs/toolkit'
import AllReducers from './reducers/index'

const store = configureStore({
  reducer: AllReducers,
  middleware: (getDefaultMiddleware:any) => getDefaultMiddleware(),

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store