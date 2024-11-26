import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { Box, Stack, Typography } from "@mui/material";
import { CampaignRounded } from "@mui/icons-material";

function Notification() {
  const { user } = useSelector(selectEmployees);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Task",
      content: "You have a no task to complete",
    },
  ]);

  const requestInfomations = async (userId) => {
    try {
      const response = await fetch(`/api/notification/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setNotifications(result);
      console.log(result);
    } catch (error) {
      console.error("There was a problem with the request:", error);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      requestInfomations(user.id);
    }
  }, [user]);
  return (
    <Stack
      sx={{
        bgcolor: "#000000",
        display: "flex",
        justifyContent: "center",
        fontFamily: "Inter",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "inter",
          fontWeight: "600",
          fontSize: "36px",
          color: "#FFFFFF",
        }}
      >
        Notifications
      </Typography>
      <Box
        sx={{
          mt: 1,
          bgcolor: "#27272A",
          p: 2,
          minWidth: "300px",
          borderRadius: "10px",
          color: "#FFFFFF",
        }}
      >
        {notifications ? (
          notifications.map((notification) => (
            <Box
              sx={{
                bgcolor: "#3F3F46",
                p: 2,
                borderRadius: "10px",
                mt: 1,
              }}
              key={notification.id}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <CampaignRounded sx={{ color: "#FFFFFF", mr: 1 }} />
                <Typography
                  sx={{
                    fontWeight: "700",
                    color: "#FFFFFF",
                  }}
                >
                  {notification.title}:{" "}
                </Typography>
                <Typography>{notification.content}</Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Stack
            sx={{
              bgcolor: "#27272A",
              p: 2,
              minWidth: "300px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              fontFamily: "Inter",
              alignItems: "center",
              color: "#FFFFFF",
            }}
          >
            <Stack>No notifications</Stack>
          </Stack>
        )}
      </Box>
    </Stack>
  );
}

export default Notification;
