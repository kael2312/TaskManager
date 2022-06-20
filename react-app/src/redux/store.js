import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/Auth/authSlice';
import projectReducer from '../features/Projects/projectSlice'

const rootReducer = {
    auth: authReducer,
    project: projectReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store