import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/user-api";
import StorageKeys from "../../constants/storage-keys.contants";

export const register = createAsyncThunk("auth/register", async (payload) => {
    const response = await userApi.register(payload);
    localStorage.setItem(StorageKeys.TOKEN, response.token);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(response));
    return response;
});

export const login = createAsyncThunk("auth/login", async (payload) => {
    const response = await userApi.login(payload);
    localStorage.setItem(StorageKeys.TOKEN, response.token);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(response));
    return response;
});

export const logout = createAsyncThunk("auth/logout", async (payload) => {
    return null;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || null,
        settings: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.current = action.payload;
        });

        builder.addCase(logout.fulfilled, (state, action) => {
            state.current = action.payload;
        });
    },
});

const { reducer } = authSlice;
export default reducer;
