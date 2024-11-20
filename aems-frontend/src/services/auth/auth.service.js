import { createAsyncThunk } from "@reduxjs/toolkit";
import TokenService, {
  rememberMeKey,
  sessionKey,
  setRememberMe,
} from "../token.service";
import { STORAGE_KEY } from "../../components/settings/config-settings";
import { POST } from "../axios";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const response = await POST("/login", credentials);

    TokenService.setSession(response.data.session);

    setRememberMe(credentials.rememberMe);

    return response.data;
  }
);
export const doLogout = () => {
  TokenService.deleteItem(sessionKey);
  TokenService.deleteItem(rememberMeKey);
  // reset theme
  TokenService.deleteItem(STORAGE_KEY);
};
