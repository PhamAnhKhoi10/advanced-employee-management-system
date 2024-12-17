import { useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { selectHr } from "../redux/slice/hrSlice";
import { useDispatch, useSelector } from "react-redux";
import { PaginationItems } from "../components/Pagination";
import { useTable } from "../hooks/useTable";

import {
  createPerformanceRecord,
  deletePerformanceRecord,
  updatePerformanceRecord,
} from "../services/hr.service";
import { useForm } from "react-hook-form";
import { requestPerformance } from "../services/employee.service";

function EmployeePerformanceRecord() {
  const table = useTable({
    defaultOrderBy: "name",
    defaultRowsPerPage: 10,
  });
  const dispatch = useDispatch();

  const { employeePerRecord } = useSelector(selectHr);
  const methods = useForm({
    defaultValues: {
      PerformanceID: null,
      EmployeeID: 0,
      EvaluationDate: "",
      TaskCompletion: 0,
      Feedback: "",
      Rating: 0,
    },
  });

  const requestInformation = async () => {
    for (let i = 2; i <= 20; i++) {
      dispatch(requestPerformance(i));
    }
  };

  useEffect(() => {
    requestInformation();
  }, []);

  const { handleSubmit, register, setValue, reset, watch } = methods;
  const performanceID = watch("PerformanceID");
  const handleEditRequest = (record) => {
    setValue("PerformanceID", record.PerformanceID);
    setValue("EmployeeID", record.EmployeeID);
    setValue("EvaluationDate", record.EvaluationDate);
    setValue("TaskCompletion", record.TaskCompletion);
    setValue("Feedback", record.Feedback);
    setValue("Rating", record.Rating);
  };
  const onSubmit = async (data) => {
    if (data.PerformanceID) {
      const response = await dispatch(
        updatePerformanceRecord({
          PerformanceID: data.PerformanceID,
          EmployeeID: data.EmployeeID,
          EvaluationDate: data.EvaluationDate,
          TaskCompletion: Number(data.TaskCompletion),
          Feedback: data.Feedback,
          Rating: Number(data.Rating),
        })
      );
      if (response.meta.requestStatus === "fulfilled") {
        alert("Record updated successfully");
        requestInformation();
      }
      // Update existing record
    } else {
      console.log(data);
      const response = await dispatch(
        createPerformanceRecord({
          EmployeeID: data.EmployeeID,
          EvaluationDate: data.EvaluationDate,
          TaskCompletion: Number(data.TaskCompletion),
          Feedback: data.Feedback,
          Rating: Number(data.Rating),
        })
      ); // Create new record
      if (response.meta.requestStatus === "fulfilled") {
        alert("Record created successfully");
        requestInformation();
      }
    }
    reset(); // Reset the form after submission
  };

  const deleteRecord = async (record) => {
    const response = await dispatch(
      deletePerformanceRecord(record.PerformanceID)
    );
    if (response.meta.requestStatus === "fulfilled") {
      alert("Record deleted successfully");
      requestInformation();
    }
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
        <Box
          sx={{
            backgroundColor: "#222",
            color: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Table
            sx={{
              m: "20px",
              "& .MuiTableCell-root": {
                borderBottom: "none", // Hide the border between table rows
              },
            }}
          >
            <TableHead sx={{ bgcolor: "#27272a", borderRadius: "10px" }}>
              <TableRow>
                {["Employee", "Feedback", "Date", "Score", "Actions"].map(
                  (header) => (
                    <TableCell
                      key={header}
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        justifyContent: "space-between",
                      }}
                    >
                      {header}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {employeePerRecord?.Performances.map((record) => (
                <TableRow key={record.PerformanceID}>
                  <TableCell sx={{ color: "#fff" }}>{record.Name}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    {record.Feedback}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    {record.EvaluationDate}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>{record.Rating}</TableCell>
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
                      onClick={() => deleteRecord(record)}
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
            onRowsPerPageChange={table.onChangeRowsPerPage}
          />
        </Box>

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
              label="Employee ID"
              {...register("EmployeeID")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#aaa" },
              }}
            />
            {!!performanceID && (
              <TextField
                {...register("PerformanceID")}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                label="Performance ID"
                variant="outlined"
                fullWidth
                sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
              />
            )}
            <TextField
              {...register("TaskCompletion")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              type="number"
              label="Task Completion"
              variant="outlined"
              onInputCapture={(e) => {
                e.target.value < 100 ? e.target.value : (e.target.value = 100);
              }}
              fullWidth
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <TextField
              {...register("EvaluationDate")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              name="EvaluationDate"
              type="date"
              label="Evaluation Date"
              variant="outlined"
              fullWidth
              placeholder="dd/mm/yyyy"
              sx={{ input: { color: "#fff" }, label: { color: "#aaa" } }}
            />
            <TextField
              {...register("Rating")}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              name="Rating"
              type="number"
              onInputCapture={(e) => {
                e.target.value < 10 ? e.target.value : (e.target.value = 10);
              }}
              label="Score (0-10)"
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
