import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupUser as signupUserApi } from "../../api/user";

export const signupUser = createAsyncThunk(
    'user/signup',
    async (userDetails = {}, { rejectWithValue}) => {
        try{

            const response = await signupUserApi(userDetails);
            const result = await handleApiResponse(response);

            if(result.ok){
                return null;
            }
            return rejectWithValue(result.error);
        }
        catch(e) {
            return rejectWithValue(e);
        }
    }
);