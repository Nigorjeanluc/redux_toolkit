import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: {
        numOfIcecreams: 20,
    },
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload;
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload;
        },
        extraReducers: (builder) => {
          builder.addCase(cakeOrdered, (state, action) => {
            state.numOfIcecreams -= action.payload;
          });
        }
    }
})

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;