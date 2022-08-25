import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/dataSlice";


export const store = configureStore({
    reducer: {
        quiz: quizReducer
    }
})

