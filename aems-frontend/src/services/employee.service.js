import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "http://127.0.0.1:8000";

export const requestPerformance = createAsyncThunk(
  "performance/fetch",
  async (userId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/performances/employee/${userId}`,
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
export const requestAttendance = createAsyncThunk(
  "attendance/fetch",
  async (userId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/attendance/employee/${userId}`,
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
export const checkAttendance = createAsyncThunk(
  "attendance/check",
  async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/attendance/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Status: "string",
          HoursWorked: 0,
          EmployeeID: userId,
          Date: new Date().toISOString().split("T")[0],
        }),
      });
      const text = await response.text();
      const result = text ? JSON.parse(text) : {};
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const requestLeaveRequestsInformation = createAsyncThunk(
  "leave/fetch",
  async (userId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/leave-requests/employee/${userId}`,
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
export const requestLeave = createAsyncThunk(
  "leave/request",
  async (leaveRequest) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/leave-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveRequest),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const requestNotification = createAsyncThunk(
  "notification/fetch",
  async (userId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/notifications/recipient/${userId}`,
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

export const requestSalary = createAsyncThunk(
  "salary/fetch",
  async (userId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/salaries/employee/${userId}`,
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
export const requestProfile = createAsyncThunk(
  "profile/fetch",
  async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/employees/${userId}`, {
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
export const requestProfileEdit = createAsyncThunk(
  "profile/edit",
  async (employee) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/employees/${employee.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employee),
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
