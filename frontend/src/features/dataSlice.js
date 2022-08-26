import { counterSlice, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import quizService from './dataService'

let question = JSON.stringify(localStorage.getItem('questions'))
let number = localStorage.getItem('number')
const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:'',
    question: question || null,
    number: number || 1,
    setExplanation:false
}


// get questions

export const data = createAsyncThunk('/getData', async(_,thunkAPI) => {
try{
    return await quizService.data()
}catch(error) {
const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
return thunkAPI.rejectWithValue(message)
}
})

export const quizSlice = createSlice ({
    name: 'quiz',
    initialState,
    reducers: {
        Add: (state, action) => {
            state.number = action.payload;
            localStorage.setItem('number',action.payload)
        },
        showExplanation: (state, action) => {
            state.setExplanation = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(data.pending, (state) => {
            state.isLoading = true
        })
        .addCase(data.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.question = action.payload
        })
        .addCase(data.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {Add,showExplanation} = quizSlice.actions
export default quizSlice.reducer