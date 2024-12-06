import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../../services/auth/auth.service";
import {
  requestAttendance,
  requestLeaveRequestsInformation,
  requestNotification,
  requestPerformance,
  requestProfile,
  requestSalary,
} from "../../services/employee.service";
import TokenService from "../../services/token.service";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    salary: [],
  },
  reducers: {
    setUserWithSession(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log("Login success:", action.payload); // Log the user object
      state.user = action.payload;
      TokenService.setSession(action.payload); // Store the user object in the session
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      alert(action.payload.detail); // Display an alert with the error message
      state.error = action.payload.detail; // Set the error state
    });
    builder.addCase(requestPerformance.fulfilled, (state, action) => {
      state.performance = action.payload;
    });
    builder.addCase(requestAttendance.fulfilled, (state, action) => {
      state.attendance = action.payload;
    });
    builder.addCase(
      requestLeaveRequestsInformation.fulfilled,
      (state, action) => {
        state.leaveRequests = action.payload;
      }
    );
    builder.addCase(requestNotification.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
    builder.addCase(requestSalary.fulfilled, (state, action) => {
      state.salary = action.payload;
    });
    builder.addCase(requestProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export const selectEmployees = (state) => state.employee;

export const { setUserWithSession } = employeeSlice.actions;

export default employeeSlice.reducer;
