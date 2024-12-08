import {
  Box,
  Grid2,
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
import { useEffect } from "react";
import { selectEmployees } from "../redux/slice/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { requestPerformance } from "../services/employee.service";
const title = [
  { title: "Projects Completed", subtitle: "This month" },
  { title: "Hours Worked", subtitle: "Total logged hours" },
  { title: "Rating", subtitle: "Average rating" },
];

function Performance() {
  const dispatch = useDispatch();
  const { user, performance } = useSelector(selectEmployees);

  console.log(performance);
  useEffect(() => {
    if (user) {
      dispatch(requestPerformance(user.employee_id));
    }
  }, [user, dispatch]);

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
        Performance
      </Typography>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-around",
          minWidth: "50%",
          bgcolor: "#27272A",
          borderRadius: "10px",
          color: "#FFFFFF",
        }}
      >
        <Grid2 item textAlign="center" sx={{ p: 2 }}>
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#FFFFFF",
            }}
          >
            {title[0].title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "inter",
              fontWeight: "400",
              fontSize: "18px",
              color: "#FFFFFF",
            }}
          >
            {performance?.TaskCompletion}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.8 }}>
            {title[0].subtitle}
          </Typography>
        </Grid2>
        <Grid2 item textAlign="center" sx={{ p: 2 }}>
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#FFFFFF",
            }}
          >
            {title[1].title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "inter",
              fontWeight: "400",
              fontSize: "18px",
              color: "#FFFFFF",
            }}
          >
            {performance?.hourWorked}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.8 }}>
            {title[1].subtitle}
          </Typography>
        </Grid2>
        <Grid2 item textAlign="center" sx={{ p: 2 }}>
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#FFFFFF",
            }}
          >
            {title[2].title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "inter",
              fontWeight: "400",
              fontSize: "18px",
              color: "#FFFFFF",
            }}
          >
            {performance?.rating}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.8 }}>
            {title[2].subtitle}
          </Typography>
        </Grid2>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
          width: "50%",
          backgroundColor: "#212121",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                TASK
              </TableCell>
              <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                STATUS
              </TableCell>
              <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                COMPLETION DATE
              </TableCell>
              <TableCell sx={{ color: "#aaa", fontWeight: "bold" }}>
                SCORE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {performance?.Performances?.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: "#fff" }}>
                  {row?.PerformanceID}
                </TableCell>
                <TableCell sx={{ color: "#fff" }}>{row.Feedback}</TableCell>
                <TableCell sx={{ color: "#fff" }}>
                  {row.EvaluationDate}
                </TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  {row.Rating}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default Performance;
