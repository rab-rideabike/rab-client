import { createSlice } from "@reduxjs/toolkit";
import { API_STATUS } from "../../util/enum";
import { signupUser } from "./thunk";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        signupStatus: API_STATUS.IDLE,
        data: {
            id: null,
            email: null,
            username: null,
            phonenumber: ''
        },
        error: '',
        errorCode: null,
        isLoggedIn: false,
    },

    reducers: {

    },

    extraReducers: {
        [signupUser.pending]: (state) => {
            state.signupStatus = API_STATUS.LOADING;
        },
        [signupUser.fulfilled]: (state) => {
            state.signupStatus = API_STATUS.COMPLETED;
        },
        [signupUser.rejected]: (state, action) => {
            state.signupStatus = API_STATUS.FAILED;

            if(action.payload) {
                state.error = action.payload.message;
                state.errorCode = action.payload.code;
            }
            else {
                state.error = action.error.message; 
            }
        }

    }
});

const {actions, reducer} = userSlice;

const { } = actions;
export {};

export default reducer;