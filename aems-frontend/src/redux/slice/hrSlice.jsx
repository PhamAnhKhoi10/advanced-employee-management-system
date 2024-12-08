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
    attendanceReport: { Name: "", Attendances: [] },
    employee: {},
    employeeList: [],
    employeePerRecord: { Name: "", Performances: [] },
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
      const existingIds = state.attendanceReport.Attendances.map(
        (record) => record.AttendanceID
      );
      const newRecords =
        action.payload.Attendances?.filter(
          (record) => !existingIds.includes(record.AttendanceID)
        ) || [];
      const updatedRecords = newRecords.map((record) => ({
        ...record,
        Name: action.payload.EmployeeName,
      }));
      state.attendanceReport.Attendances = [
        ...state.attendanceReport.Attendances,
        ...updatedRecords,
      ];
    });
    builder.addCase(requestPerformance.fulfilled, (state, action) => {
      const existingIds = state.employeePerRecord.Performances.map(
        (record) => record.PerformanceID
      );
      const newRecords =
        action.payload.Performances?.filter(
          (record) => !existingIds.includes(record.PerformanceID)
        ) || [];
      const updatedRecords = newRecords.map((record) => ({
        ...record,
        Name: action.payload.EmployeeName,
      }));
      state.employeePerRecord.Performances = [
        ...state.employeePerRecord.Performances,
        ...updatedRecords,
      ];
    });
  },
});

export const selectHr = (state) => state.hr; // Corrected selector

export default hrSlice.reducer;
