import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import shoesService from "../services/shoesServices";


export const getShoes = createAsyncThunk('GET_SHOES', async(_, thunkApi) => {
    try{
        
        return shoesService.getShoes()
    }catch(error) {
        return thunkApi.rejectWithValue(error.response.data)
    }
})

const shoesSlice = createSlice({
    name: 'shoes',
    initialState:{
        shoes:null,
        isErorr:false,
        isLoading:false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getShoes.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getShoes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.shoes = action.payload;
        })
        builder.addCase(getShoes.rejected, (state, action) => {
            state.isLoading = false;
            state.isErorr = true;
            state.message = action.payload.message;
            state.shoes = null
        })
    }
})

export default shoesSlice.reducer;