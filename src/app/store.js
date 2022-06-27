import { configureStore } from "@reduxjs/toolkit/dist/configureStore"
import counterSlice from "../features/counter/counterSlice"

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;