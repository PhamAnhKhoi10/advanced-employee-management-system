import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../../services/auth/auth.service";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    user: {
      id: 1,
      name: "Minh Khanh",
      email: "tinlun12344@gmail.com",
      role: "Employee",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const selectEmployees = (state) => state.employee; // Corrected selector

export default employeeSlice.reducer;
