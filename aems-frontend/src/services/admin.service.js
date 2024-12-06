import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "http://127.0.0.1:8000";
export const createUser = createAsyncThunk("profile/edit", async (employee) => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/users`, {
      method: "POST",
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
});

export const sendNotification = createAsyncThunk(
  "notification/send",
  async (notification) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/notifications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notification),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  }
);
