import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectAPI from "../../api/project.api";
import taskAPI from "../../api/task-api";

export const getListTask = createAsyncThunk("task/getListTask", async () => {
    const response = await taskAPI.getListTasks()
    return response
})

export const updateTaskStatus = createAsyncThunk("task/updatetaskstatus", async (payload, thunkAPI) => {
    await taskAPI.updateTaskStatus(payload);
    const dispatchResult = thunkAPI.dispatch(getListTask())
    return dispatchResult.payload
})

export const addProject = createAsyncThunk("/project/addProject", async (payload) => {
    const response = await projectAPI.addProject(payload)
    return response
})



const taskSlice = createSlice({
    name: 'task',
    initialState: {
        current: []
    },
    extraReducers: (builder) => {
        builder.addCase(getListTask.fulfilled, (state, action) => {
            state.current = action.payload
        });

        builder.addCase(addProject.fulfilled, (state, action) => {
            state.current.push(action.payload)
        });

        builder.addCase(updateTaskStatus.fulfilled, (state, action) => {
            state.current = action.payload
        })
    }
})

const { reducer } = taskSlice;
export default reducer