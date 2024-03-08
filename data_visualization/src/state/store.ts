import {configureStore} from "@reduxjs/toolkit"
import fakeDataReducer from "./api/fakeDataSlice"
import userReducer from "./api/userSlice"
import postsReducer from "./api/postsSlice"

export const store = configureStore({
    reducer: {
        fakeData: fakeDataReducer,
        user: userReducer,
        posts: postsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch