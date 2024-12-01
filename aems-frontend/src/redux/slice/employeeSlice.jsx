import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../../services/auth/auth.service";
import { requestPerformance } from "../../services/employee.service";
import { requestEmployeeDetails } from "../../services/hr.service";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    attendance: [],
    performance: {
      projectCompleted: "0",
      hourWorked: "0",
      rating: "0/100",
      rows: [],
    },
    user: {
      id: 1,
      name: "Minh Khanh",
      email: "tinlun12344@gmail.com",
      role: "HR",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(requestPerformance.fulfilled, (state, action) => {
      state.performance = action.payload;
    });
    builder.addCase(requestEmployeeDetails.fulfilled, (state, action) => {
      state.attendance = action.payload;
    });
  },
});

export const selectEmployees = (state) => state.employee; // Corrected selector

export default employeeSlice.reducer;
