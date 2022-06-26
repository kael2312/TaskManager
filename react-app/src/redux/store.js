import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/Auth/authSlice';
import projectReducer from '../features/Projects/projectSlice'
import taskReducer from '../features/Tasks/taskSlice'

const rootReducer = {
    auth: authReducer,
    project: projectReducer,
    task: taskReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store