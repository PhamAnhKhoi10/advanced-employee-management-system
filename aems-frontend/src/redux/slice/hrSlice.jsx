import { createSlice } from "@reduxjs/toolkit";
import {
  requestAttendanceReport,
  requestEmployeeDetails,
  requestEmployeeList,
  requestPerformanceRecord,
} from "../../services/hr.service";

const hrSlice = createSlice({
  name: "hr",
  initialState: {
    attendanceReport: [],
    employee: {
      id: 1,
      firstName: "Minh Khanh",
      lastName: "Nguyen",

      email: "aascasca@gmail.com",
      address: "Hanoi",
      phoneNumber: "123456789",
      salary: "1000$",
      role: "HR",
      gender: "male",
      notifications: [],
    },
    employeeList: [],
    employeePerRecord: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestPerformanceRecord.fulfilled, (state, action) => {
      state.performance = action.payload;
    });
    builder.addCase(requestEmployeeList.fulfilled, (state, action) => {
      state.employeeList = action.payload;
    });
    builder.addCase(requestEmployeeDetails.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
    builder.addCase(requestAttendanceReport.fulfilled, (state, action) => {
      state.attendanceReport = action.payload;
    });
  },
});

export const selectHr = (state) => state.hr; // Corrected selector

export default hrSlice.reducer;
