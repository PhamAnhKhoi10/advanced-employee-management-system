import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../../services/auth/auth.service";
import { requestPerformance } from "../../services/employee.service";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    attendance: [
      { id: 1, date: "2021-10-10", status: "Present", remarks: "On time" },
      { id: 2, date: "2021-10-11", status: "Absent", remarks: "Sick" },
      { id: 3, date: "2021-10-12", status: "Present", remarks: "On time" },
      { id: 4, date: "2021-10-13", status: "Present", remarks: "On time" },
      { id: 5, date: "2021-10-14", status: "Absent", remarks: "Late 10 min" },
      { id: 6, date: "2021-10-15", status: "Present", remarks: "On time" },
    ],
    performance: {
      projectCompleted: "10",
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
  },
});

export const selectEmployees = (state) => state.employee; // Corrected selector

export default employeeSlice.reducer;
