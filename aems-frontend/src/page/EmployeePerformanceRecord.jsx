import React from "react";
import {
  Box,
  Button,
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
import { useSelector } from "react-redux";
import { PaginationItems } from "../components/Navigation";
import { useTable } from "../hooks/useTable";

function EmployeePerformanceRecord() {
  const table = useTable({
    defaultOrderBy: "name",
    defaultRowsPerPage: 10,
  });
  const { employeePerRecord } = useSelector(selectHr);
  console.log(employeePerRecord);
  return (
    <Box
      p={4}
      ml="10%"
      width="80%"
      bgcolor="#181818"
      color="#fff"
      minHeight="100vh"
    >
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
                  <Button variant="contained" color="primary" size="small">
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
        <form>
          <Typography variant="h6" gutterBottom>
            Add/Update Performance
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Employee Name"
              variant="outlined"
              fullWidth
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <TextField
              label="Task Name"
              variant="outlined"
              fullWidth
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <Select
              displayEmpty
              defaultValue=""
              fullWidth
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                ".MuiSelect-icon": { color: "#fff" },
              }}
            >
              <MenuItem value="" disabled>
                --Select Status--
              </MenuItem>
              <MenuItem value="inprogress">In progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
            <TextField
              label="Completion Date"
              variant="outlined"
              fullWidth
              placeholder="dd/mm/yyyy"
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <TextField
              label="Score"
              variant="outlined"
              fullWidth
              placeholder="Enter Score (e.g. 89/100)"
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{ alignSelf: "flex-end" }}
            >
              Save Performance
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default EmployeePerformanceRecord;
