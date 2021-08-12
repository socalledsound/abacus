import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numBytes: 3
}

export const byteSlice = createSlice({
    name: 'bytes',
    initialState,
    reducers: {

    }
}) 

export const selectBytes = state => state.bytes.numBytes


export default byteSlice.reducer