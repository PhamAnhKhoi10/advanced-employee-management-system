import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../services/admin.service";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      Username: "",
      Password: "",
      RoleID: null,
      Email: "",
      AdminCode: "",
    },
  });

  const { handleSubmit, register, reset } = methods;
  const handleCreate = handleSubmit(async (data) => {
    const response = await dispatch(createUser(data));
    console.log(response.payload);
    if (createUser.fulfilled.match(response)) {
      alert("User created successfully, user ID: " + response.payload.UserID);
      reset();
    } else {
      alert("Failed to create user");
    }
  });
  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleCreate}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            p: 3,
            bgcolor: "#1E1E1E",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Create an account
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#aaa",
              mb: 3,
            }}
          >
            Let us simplify your workflow
          </Typography>
          <Stack spacing={2}>
            <TextField
              {...register("Username", {
                required: "Username is required",
                minLength: {
                  value: 4,
                  message: "Username must be at least 4 characters long",
                },
              })}
              label="Username"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                style: { color: "#fff" }, // Set the label color to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#00f" },
                },
              }}
            />

            <TextField
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                style: { color: "#fff" }, // Set the label color to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#00f" },
                },
              }}
            />
            <TextField
              {...register("Email")}
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              InputLabelProps={{
                style: { color: "#fff" }, // Set the label color to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#00f" },
                },
              }}
            />
            <TextField
              {...register("RoleID")}
              label="Role ID"
              variant="outlined"
              fullWidth
              required
              type="number"
              InputLabelProps={{
                style: { color: "#fff" }, // Set the label color to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#00f" },
                },
              }}
            />
            <TextField
              {...register("AdminCode")}
              label="Admin Code"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                style: { color: "#fff" }, // Set the label color to white
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": { borderColor: "#555" },
                  "&:hover fieldset": { borderColor: "#888" },
                  "&.Mui-focused fieldset": { borderColor: "#00f" },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#0056b3" },
              }}
              fullWidth
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default CreateAccount;
