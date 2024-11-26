import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { checkAttendance } from "../services/employee.service";

function Attendance() {
  const dispatch = useDispatch();

  const { attendance, user } = useSelector(selectEmployees);
  const handleCheckAttendance = () => {
    dispatch(checkAttendance(user.id));
  };
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
        Attendance
      </Typography>
      <Box
        sx={{
          mt: 1,
          bgcolor: "#27272A",
          p: 2,
          width: "50%",
          borderRadius: "10px",
          color: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            CHECK YOUR TODAY&apos;S ATTENDANCE
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#444",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
            onClick={handleCheckAttendance}
          >
            Check Attendance
          </Button>
        </Box>
        {attendance && (
          <TableContainer
            component={Paper}
            sx={{
              mt: 2,
              borderRadius: 2,
              bgcolor: "#27272A",
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead
                sx={{
                  bgcolor: "#212121",
                }}
              >
                <TableRow>
                  <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                    DATE
                  </TableCell>
                  <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                    STATUS
                  </TableCell>
                  <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                    REMARKS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendance.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{row.date}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.status}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Typography>
          Note: Login to the company&apos; Wifi to successfully check attendance
        </Typography>
      </Box>
    </Stack>
  );
}

export default Attendance;
