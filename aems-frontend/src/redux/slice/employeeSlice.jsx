import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../../services/auth/auth.service";
import {
  requestLeaveRequestsInformation,
  requestPerformance,
} from "../../services/employee.service";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    leaveRequests: [
      {
        id: 1,
        reason: "Sick Leave",
        duration: "1",
        date: "2022-12-12",
        status: "Pending",
      },
    ],
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
    builder.addCase(
      requestLeaveRequestsInformation.fulfilled,
      (state, action) => {
        state.leaveRequests = action.payload;
      }
    );
  },
});

export const selectEmployees = (state) => state.employee; // Corrected selector

export default employeeSlice.reducer;
