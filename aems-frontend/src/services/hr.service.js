import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestPerformanceRecord = createAsyncThunk(
  "hr/requestPerformance",
  async (userId) => {
    try {
      const response = await fetch(`/api/performanceRecord/${userId}`, {
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

export const updatePerformanceRecord = createAsyncThunk(
  "hr/updatePerformance",
  async (record) => {
    try {
      const response = await fetch(`/api/performanceRecord/${record.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
export const createPerformanceRecord = createAsyncThunk(
  "hr/createPerformance",
  async (record) => {
    try {
      const response = await fetch(`/api/performanceRecord`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

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
      const response = await fetch(`/api/employee`, {
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
      const response = await fetch(`/api/employee/${id}`, {
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
  async (employee) => {
    try {
      const response = await fetch(`/api/employee/${employee.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

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
      const response = await fetch(`/api/employee/${id}`, {
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
  async (filter) => {
    try {
      const params = new URLSearchParams(filter).toString();
      const response = await fetch(`/api/data?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
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
