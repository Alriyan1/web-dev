import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "Counter",
    initialState:{
        value:10
    },
    reducers:{
        increament: (state) => {
            state.value +=1
        },
        decreament: (state) => {
            state.value -= 1
        },
        increamentBy: (state,actions)=>{
            state.value += actions.payload
        }
    }
})

export const {increament,decreament,increamentBy} = counterSlice.actions
export default counterSlice.reducer