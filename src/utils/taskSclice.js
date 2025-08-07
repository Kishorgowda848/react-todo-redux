import { createSlice } from "@reduxjs/toolkit";

const taskSclice = createSlice({
    name:"list",
    initialState:{
        items:[]
    },
    reducers:{
        add:(state,action)=>{
            state.items.push(action.payload);
        },
        remove:(state,action)=>{
            state.items = state.items.filter((record,index)=>index != action.payload);
        }
    }
})

export const { add ,remove} = taskSclice.actions;
export default taskSclice.reducer;