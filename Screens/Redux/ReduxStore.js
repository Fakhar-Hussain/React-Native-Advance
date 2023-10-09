import { configureStore } from "@reduxjs/toolkit"
import MySlice from "./ReduxSlice"

const MyStore = configureStore({
    reducer: {
        data: MySlice
    }
})

export default MyStore;