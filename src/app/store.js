import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice"
import { postsSlice } from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        posts: postsSlice.reducer,
    }
})

export default store;