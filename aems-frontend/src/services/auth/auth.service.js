import { createAsyncThunk } from "@reduxjs/toolkit";
import TokenService, {
  rememberMeKey,
  sessionKey,
  setRememberMe,
} from "../token.service";
import { STORAGE_KEY } from "../../components/settings/config-settings";

const BASE_URL = "http://127.0.0.1:8000";

export const doLogout = () => {
  TokenService.deleteItem(sessionKey);
  TokenService.deleteItem(rememberMeKey);
  // reset theme
  TokenService.deleteItem(STORAGE_KEY);
};

export const loginAsync = createAsyncThunk(
  "user/login",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData); // Use rejectWithValue to handle the error in the slice
      }
      const result = await response.json(); // Parse the response body as JSON

      TokenService.setSession(result); // Store the entire result as the session

      setRememberMe(data.rememberMe);

      navigate("/dashboard"); // Redirect to the dashboard

      return result;
    } catch (error) {
      console.error("There was a problem with the login request:", error);
      return thunkAPI.rejectWithValue(error.message); // Use rejectWithValue to handle the error in the slice
    }
  }
);
