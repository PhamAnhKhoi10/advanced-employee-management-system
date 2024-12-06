import { createSlice } from "@reduxjs/toolkit";
import {
  requestAttendanceReport,
  requestEmployeeDetails,
  requestEmployeeList,
  requestPerformanceRecord,
} from "../../services/hr.service";
import { requestPerformance } from "../../services/employee.service";

const hrSlice = createSlice({
  name: "hr",
  initialState: {
    attendanceReport: [],
    employee: {},
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
    builder.addCase(requestPerformance.fulfilled, (state, action) => {
      const existingIds = state.employeePerRecord.map(
        (record) => record.PerformanceID
      );
      const newRecords = action.payload.filter(
        (record) => !existingIds.includes(record.PerformanceID)
      );
      state.employeePerRecord = [...state.employeePerRecord, ...newRecords];
    });
  },
});

export const selectHr = (state) => state.hr; // Corrected selector

export default hrSlice.reducer;
