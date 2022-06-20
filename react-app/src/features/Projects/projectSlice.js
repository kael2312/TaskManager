import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectAPI from "../../api/project.api";

export const getListProject = createAsyncThunk("project/getListProject", async () => {
    const response = await projectAPI.getListProject()
    return response
})

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        current: []
    },
    extraReducers: (builder) => {
        builder.addCase(getListProject.fulfilled, (state, action) => {
            state.current = action.payload
        })
    }
})

const { reducer } = projectSlice;
export default reducer