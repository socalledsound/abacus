import { createSlice } from "@reduxjs/toolkit";

const bits = 8
const bytes = 1;

const initialState = {
    base: 2,
    numBits : bits,
    numBytes : bytes,
    values : Array.from({length: bits}, () => true),
}

export const bitSlice = createSlice({
    name: 'bit',
    initialState,
    reducers: {
        toggleBit: (state, action) => {
        //    console.log(action.payload)
            return {
                ...state,
                values: state.values.map(
                        (item, i) => i === action.payload ? !item : item
                        )
            }
        }
    }

})

export const selectBytes = state => state.bits.numBytes
export const selectBits = state => state.bits.numBits

export const selectBitState = idx => state => state.bits.values[idx]

export const selectBitValue = idx => state => {
 
    const bitState = state.bits.values[idx]
    const base = state.bits.base
    // 1, 2, 4, 8, 16, 32, 64, 128
    // console.log(base)
    const value = bitState ? 0 : base ** idx

    return value
}

export const selectTotal = state => {
    const base = state.bits.base
    return state.bits.values.reduce((acc, cur, idx) => {
        const val = base ** idx
        console.log(idx, val)
        return cur ? acc + 0 : acc + val
    }, 0)
}

export const { toggleBit } = bitSlice.actions

export default bitSlice.reducer