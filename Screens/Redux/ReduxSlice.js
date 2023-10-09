const { createSlice } = require("@reduxjs/toolkit");

const MySlice = createSlice({
    name: "store",
    initialState: [],
    reducers: {
        AddData(state,action){
            state.push(action.payload)
        }
    }
})

export const {AddData} = MySlice.actions;
export default MySlice.reducer; 