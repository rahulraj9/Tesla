import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: ["MODEL S", "MODEL 3", "MODEL X", "MODEL Y", "SOLAR ROOF", "SOLAR PANNEL"]
}
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer