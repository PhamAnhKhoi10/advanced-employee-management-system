import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestPerformance = createAsyncThunk(
  "performance/fetch",
  async (userId) => {
    try {
      const response = await fetch(`/api/performance/${userId}`, {
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
export const requestAttendance = createAsyncThunk(
  "attendance/fetch",
  async (userId) => {
    try {
      const response = await fetch(`/api/attendance/${userId}`, {
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
export const checkAttendance = createAsyncThunk(
  "attendance/check",
  async (userId) => {
    try {
      const response = await fetch(`/api/attendance/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          date: new Date().toISOString().split("T")[0],
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
