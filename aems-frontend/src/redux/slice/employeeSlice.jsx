import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../../services/auth/auth.service";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employee: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
  },
});

export const selectEmployees = (state) => state.employee; // Corrected selector

export default employeeSlice.reducer;
