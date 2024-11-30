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
