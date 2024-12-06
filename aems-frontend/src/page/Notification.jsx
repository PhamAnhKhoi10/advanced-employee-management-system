import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { Box, Stack, Typography } from "@mui/material";
import { CampaignRounded } from "@mui/icons-material";
import { requestNotification } from "../services/employee.service";

function Notification() {
  const dispatch = useDispatch();
  const { user, notifications } = useSelector(selectEmployees);

  useEffect(() => {
    if (user) {
      dispatch(requestNotification(user.employee_id));
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
        {notifications?.length !== 0 ? (
          notifications?.map((notification) => (
            <Box
              sx={{
                bgcolor: "#3F3F46",
                p: 2,
                borderRadius: "10px",
                mt: 1,
              }}
              key={notification.NotificationID}
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
                  {notification.Title}:{" "}
                </Typography>
                <Typography>{notification.Content}</Typography>
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
