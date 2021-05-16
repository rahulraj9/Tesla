import { configureStore } from "@reduxjs/toolkit"
import carReducer from '../src/Redux/Cars/CarSlice'
export const store = configureStore({
    reducer: {
        car: carReducer,
    }
})
export default store;