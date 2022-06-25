import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectAPI from "../../api/project.api";

export const getListProject = createAsyncThunk("project/getListProject", async () => {
    const response = await projectAPI.getListProject()
    return response
})

export const addProject = createAsyncThunk("/project/addProject", async (payload) => {
    const response = await projectAPI.addProject(payload)
    return response
})

export const deleteProject = createAsyncThunk("/project/deleteProject", async (payload) => {
    const response = await projectAPI.deleteProject(payload)
    return response
})

export const updateProject = createAsyncThunk("/project/updateProject", async (payload) => {
    const response = await projectAPI.updateProject(payload)
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
        });

        builder.addCase(addProject.fulfilled, (state, action) => {
            state.current.push(action.payload)
        });

        builder.addCase(deleteProject.fulfilled, (state, action) => {
            const index = state.current.findIndex(x => x.projectID === action.payload)
            state.current.splice(index, 1)
        });

        builder.addCase(updateProject.fulfilled, (state, action) => {
            const index = state.current.findIndex(x => x.projectID === action.payload.projectID)
            state.current[index] = action.payload
        });
    }
})

const { reducer } = projectSlice;
export default reducer