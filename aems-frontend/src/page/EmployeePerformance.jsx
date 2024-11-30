import React, { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { selectHr } from "../redux/slice/hrSlice";
import { useDispatch, useSelector } from "react-redux";
import { PaginationItems } from "../components/Pagination";
import { useTable } from "../hooks/useTable";
import { selectEmployees } from "../redux/slice/employeeSlice";
import {
  createPerformanceRecord,
  requestPerformanceRecord,
  updatePerformanceRecord,
} from "../services/hr.service";
import { Controller, useForm } from "react-hook-form";

function EmployeePerformanceRecord() {
  const table = useTable({
    defaultOrderBy: "name",
    defaultRowsPerPage: 10,
  });
  const dispatch = useDispatch();
  const { user } = useSelector(selectEmployees);
  const { employeePerRecord } = useSelector(selectHr);
  console.log(employeePerRecord);
  const methods = useForm({
    defaultValues: {
      id: null,
      employeeName: "",
      task: "",
      status: "",
      date: "",
      score: "",
    },
  });

  const { handleSubmit, register, setValue, reset } = methods;
  useEffect(() => {
    if (user.role !== "HR") {
      alert("You are not authorized to view this page");
    } else {
      dispatch(requestPerformanceRecord(user.id));
    }
  }, [user]);

  const handleEditRequest = (record) => {
    setValue("id", record.id);
    setValue("employeeName", record.employeeName);
    setValue("task", record.task);
    setValue("status", record.status);
    setValue("date", record.date);
    setValue("score", record.score);
  };
  const onSubmit = (data) => {
    if (data.id) {
      dispatch(updatePerformanceRecord(data)); // Update existing record
    } else {
      console.log(data);
      dispatch(createPerformanceRecord(data)); // Create new record
    }
    reset(); // Reset the form after submission
  };
  return (
    <Box
      p={4}
      ml="10%"
      width="80%"
      bgcolor="#181818"
      color="#fff"
      minHeight="100vh"
    >
      <form>
        <Typography
          sx={{
            ml: "30%",
            fontFamily: "inter",
            fontWeight: "600",
            fontSize: "36px",
            color: "#FFFFFF",
          }}
        >
          Record Employee Performance
        </Typography>

        {/* Table Section */}
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "#222",
            color: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ justifyContent: "space-between" }}>
                {["Employee", "Task", "Status", "Date", "Score", "Actions"].map(
                  (header) => (
                    <TableCell
                      key={header}
                      sx={{ color: "#fff", fontWeight: "bold" }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {employeePerRecord.map((record) => (
                <TableRow key={record.id}>
                  <TableCell sx={{ color: "#fff" }}>
                    {record.employeeName}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>{record.task}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{record.status}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{record.date}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>{record.score}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEditRequest(record)}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <PaginationItems
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
            page={table.page}
            dense={table.dense}
            count={employeePerRecord.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onChangeDense={table.onChangeDense}
            onRowsPerPageChange={table.onChangeRowsPerPage}
          />
        </TableContainer>

        {/* Form Section */}
        <Box
          mt={4}
          p={3}
          bgcolor="#222"
          borderRadius="8px"
          component="form"
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" gutterBottom>
            Add/Update Performance
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Employee Name"
              {...register("employeeName")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              variant="outlined"
              fullWidth
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <TextField
              {...register("task")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              label="Task Name"
              variant="outlined"
              fullWidth
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  color: "#aaa", // Set label color to white
                }}
              >
                Status
              </InputLabel>
              <Controller
                defaultValue={""}
                name="status"
                control={methods.control}
                render={({ field }) => (
                  <Select
                    defaultValue={""}
                    labelId="demo-simple-select-label"
                    label="Status"
                    id="demo-simple-select"
                    {...field}
                    displayEmpty
                    sx={{
                      color: "#fff", // Set text color to white
                      ".MuiSelect-icon": { color: "#fff" }, // Set dropdown arrow color
                      backgroundColor: "#222", // Optional: set background color
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="notStarted">Not Started</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="inProgress">In Progress</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            <TextField
              {...register("date")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              name="date"
              type="date"
              label="Completion Date"
              variant="outlined"
              fullWidth
              placeholder="dd/mm/yyyy"
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <TextField
              {...register("score")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              name="score"
              type="number"
              onInputCapture={(e) => {
                e.target.value < 100 ? e.target.value : (e.target.value = 100);
              }}
              label="Score (0-100)"
              variant="outlined"
              fullWidth
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                color="primary"
                sx={{ alignSelf: "flex-end" }}
              >
                Save Performance
              </Button>
              <Button
                onClick={() => {
                  reset();
                }}
                variant="contained"
                color="cancel"
                sx={{ alignSelf: "flex-end" }}
              >
                Cancle
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default EmployeePerformanceRecord;
