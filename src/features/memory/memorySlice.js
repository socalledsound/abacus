import { createSlice } from "@reduxjs/toolkit";

const numBits = 8
const numBytes = 3;
const bitValues = Array.from({length: numBytes}, () => {
    const arr = Array.from({length: numBits}, () => true)
    return arr
    })
console.log(bitValues)

const initialState = {
    base: 2,
    numBits : numBits,
    numBytes : numBytes,
    bitValues : bitValues,
}

export const memorySlice = createSlice({
    name: 'memory',
    initialState,
    reducers: {
        toggleBit: (state, action) => {
            const { byteIdx, bitIdx} = action.payload
            return {
                ...state,
                bitValues: state.bitValues.map((arr, idx) => {
                    return idx === byteIdx ? 
                         arr.map((item, i) => i === bitIdx ? !item : item)
                         :
                         arr
                })
            }
        }
    }

})

export const selectBytes = state => state.memory.numBytes
export const selectBits = state => state.memory.numBits

export const selectBitState = (byteIdx, bitIdx) => state => state.memory.bitValues[byteIdx][bitIdx]

export const selectBitValue = (byteIdx, bitIdx) => state => {
 
    const bitState = state.memory.bitValues[byteIdx][bitIdx]
    const base = state.memory.base
    // 1, 2, 4, 8, 16, 32, 64, 128
    // console.log(base)
    const value = bitState ? 0 : base ** bitIdx

    return value
}

export const selectTotal = byteIdx => state => {
    const base = state.memory.base
    // console.log(state.memory.bitValues[byteIdx])
    return state.memory.bitValues[byteIdx].reduce((acc, cur, idx) => {
        const val = base ** idx
        // console.log(idx, val)
        return cur ? acc + 0 : acc + val
    }, 0)
}

export const { toggleBit } = memorySlice.actions

export default memorySlice.reducer