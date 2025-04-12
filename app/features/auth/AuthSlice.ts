import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface User {
    username: string;
    password: string;
}

interface AuthState {
    user: User;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: {
        username: "admin@alpha",
        password: "wallpaper.service@alpha"
    },
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        authenticateUser(state, action: PayloadAction<User>) {
            state.isAuthenticated = action.payload.username === state.user.username && action.payload.password === state.user.password;
        }
    }
})

export const { authenticateUser } = authSlice.actions;
export default authSlice.reducer;