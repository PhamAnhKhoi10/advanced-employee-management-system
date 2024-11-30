import { createSlice } from "@reduxjs/toolkit";
import { requestPerformanceRecord } from "../../services/hr.service";

const hrSlice = createSlice({
  name: "hr",
  initialState: {
    employeePerRecord: [
      {
        id: 1,
        employeeName: "John Doe",
        task: "Task 1",
        status: "completed",
        date: "2021-10-10",
        score: "100",
      },
      {
        id: 2,
        employeeName: "Jane Doe",
        task: "Task 2",
        status: "inProgress",
        date: "2021-10-11",
        score: "50",
      },
      {
        id: 3,
        employeeName: "John Smith",
        task: "Task 3",
        status: "notStarted",
        date: "2021-10-12",
        score: "0",
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestPerformanceRecord.fulfilled, (state, action) => {
      state.performance = action.payload;
    });
  },
});

export const selectHr = (state) => state.hr; // Corrected selector

export default hrSlice.reducer;
