import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "http://127.0.0.1:8000";

export const requestPerformanceRecord = createAsyncThunk(
  "hr/requestPerformance",
  async (userId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/performanceRecord/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);

export const updatePerformanceRecord = createAsyncThunk(
  "hr/updatePerformance",
  async (record, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/performances/${record.PerformanceID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(record),
        }
      );
      if (!response.ok) {
        // If the response is not OK, reject the thunk with the response status text
        const errorData = await response.json();
        alert(errorData.detail);
        return rejectWithValue(errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const createPerformanceRecord = createAsyncThunk(
  "hr/createPerformance",
  async (record, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/performances`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });
      if (!response.status === 200 || !response.status === 201) {
        // If the response is not OK, reject the thunk with the response status text
        const errorData = await response.json();
        alert(errorData.detail);
        return rejectWithValue(errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);

export const deletePerformanceRecord = createAsyncThunk(
  "hr/deletePerformance",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/performances/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        // If the response is not OK, reject the thunk with the response status text
        const errorData = await response.json();
        alert(errorData.detail);
        return rejectWithValue(errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);

export const requestEmployeeList = createAsyncThunk(
  "hr/requestEmployeeList",
  async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/employees`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const requestEmployeeDetails = createAsyncThunk(
  "hr/requestEmployeeDetails",
  async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/employees/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);

export const updateEmployeeDetails = createAsyncThunk(
  "hr/updateEmployeeDetails",
  async (employee, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/employees/${employee.EmployeeID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        }
      );
      if (!response.ok) {
        // If the response is not OK, reject the thunk with the response status text
        const errorData = await response.json();
        alert(errorData.detail);
        return rejectWithValue(errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const deleteEmployee = createAsyncThunk(
  "hr/deleteEmployee",
  async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/employees/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const requestAttendanceReport = createAsyncThunk(
  "hr/requestAttendanceReport",
  async (id) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/attendance/employee/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.status === 200 || !response.status === 201) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
);

export const addEmployee = createAsyncThunk(
  "hr/addEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (!response.status === 200 || !response.status === 201) {
        // If the response is not OK, reject the thunk with the response status text
        const errorData = await response.json();
        alert(errorData.detail);
        return rejectWithValue(errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const requestLeaveRequests = createAsyncThunk(
  "hr/requestLeaveRequests",
  async (id) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/leave-requests/employee/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
      throw error;
    }
  }
);

export const updateLeaveRequest = createAsyncThunk(
  "hr/updateLeaveRequest",
  async (record, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/leave-requests/${record.LeaveRequestID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(record),
        }
      );
      if (!response.ok) {
        // If the response is not OK, reject the thunk with the response status text
        const errorData = await response.json();
        alert(errorData.detail);
        return rejectWithValue(errorData);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
