// src/page/Login.jsx
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginAsync } from "../services/auth/auth.service";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const { handleSubmit, register } = methods;

  const handleLogin = handleSubmit(async (data) => {
    try {
      dispatch(loginAsync(data));
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <form onSubmit={handleLogin}>
      <Stack
        sx={{
          bgcolor: "#111010",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          fontFamily: "Inter",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: "700",
            fontSize: "64px",
            color: "#FFFFFF",
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: "400",
            fontSize: "32px",
            color: "#FFFFFF",
          }}
        >
          Enter your credentials to login
        </Typography>
        <Stack
          gap={2}
          sx={{
            mt: 5,
          }}
        >
          <TextField
            required
            rules={{ required: "Email is required" }}
            {...register("email")}
            label="Email"
            sx={{
              size: "small",
              input: {
                color: "#FFFFFF",
              },
              width: "300px",
              borderRadius: "10px",
              bgcolor: "#3F3F46",
            }}
          />
          <TextField
            required
            {...register("password")}
            label="Password"
            sx={{
              input: {
                color: "#FFFFFF",
              },
              size: "small",
              width: "300px",
              borderRadius: "10px",
              bgcolor: "#3F3F46",
            }}
          />
          <Button
            sx={{
              borderRadius: "5px",
              width: "300px",
            }}
            size="md"
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Stack>
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              width: "450px",
              fontSize: "24px",
              borderTop: "1px solid #FFFFFF",
              paddingTop: "10px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              sx={{
                color: "#006FEE",
                fontWeight: "700",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Stack>
    </form>
  );
}

export default Login;
