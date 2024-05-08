import Avatar from "@mui/material/Avatar";
import logo from "../../assets/syndX.jpeg";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUserAsync,
  selectLoggedInUser,
  selectUserError,
} from "./authSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

function Copyright(props) {
  const navigate = useNavigate();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        onClick={() => navigate("/https://mui.com/")}
        underline="none"
        sx={{ cursor: "pointer" }}
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const userInfo = useSelector(selectLoggedInUser);
  let user = localStorage.getItem("userInfo");
  const userError = useSelector(selectUserError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    user = localStorage.getItem("userInfo");
  }, [dispatch, userInfo]);

  return (
    <>
      {user && <Navigate to="/" replace={true}></Navigate>}
      {!user ? (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid #ccc",
                padding: "30px 20px",
                boxShadow: 5,
                borderRadius: "5px",
              }}
            >
              <Avatar sx={{ m: 2, bgcolor: "primary.main", width: "24%", height: "24%" }}>
                <img
                  src={logo}
                  alt="Syndx Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form
                className="space-y-6"
                onSubmit={handleSubmit((data) => {
                  dispatch(checkUserAsync(data));
                  console.log(data, "forms data--");
                })}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  {...register("username", {
                    required: "Required",
                  })}
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "password" : "text"}
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
                                        required: "Required",
                                      })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {userError ? <p>{userError.message}</p> : null}
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <Button
                  underline="none"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, cursor: "pointer" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      onClick={() => navigate("/forgot")}
                      underline="none"
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      onClick={() => navigate("/signup")}
                      underline="none"
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      ) : null}
    </>
  );
}












// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import logo from "../../assets/syndX.jpeg";

// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   checkUserAsync,
//   selectLoggedInUser,
//   selectUserError,
// } from "./authSlice";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useForm } from "react-hook-form";
// import { useEffect,useState } from "react";
// import { InputAdornment, IconButton } from "@mui/material";

// import userData from '../../../data.json'


// function Copyright(props) {
//   const navigate = useNavigate();

//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link
//         color="inherit"
//         onClick={() => navigate("/https://mui.com/")}
//         underline="none"
//         sx={{ cursor: "pointer" }}
//       >
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const { register, handleSubmit } = useForm();
//   const userInfo = useSelector(selectLoggedInUser);
//   let user = localStorage.getItem("userInfo");
//   const userError = useSelector(selectUserError);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   useEffect(() => {
//     user = localStorage.getItem("userInfo");
//   }, [dispatch, userInfo]);


//   return (
//     <>
//       {user && <Navigate to="/" replace={true}></Navigate>}
//       {!user ? (
//         <ThemeProvider theme={defaultTheme}>
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 border: "1px solid #ccc",
//                 padding: "20px",
//                 boxShadow: 5,
//                 borderRadius: "5px",
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <form
//                 className="space-y-6"
//                 onSubmit={handleSubmit((data) => {
//                   dispatch(checkUserAsync(data));
//                   console.log(data, "forms data--");
//                 })}
//               >
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="User Name"
//                   name="username"
//                   autoComplete="username"
//                   autoFocus
//                   {...register("username", {
//                     required: "Required",
//                   })}
//                 />
                
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="text"
//                   id="password"
//                   autoComplete="current-password"
//                   {...register("password", {
//                     required: "Required",
//                   })}
//                 />
//                 {userError ? <p>{userError.message}</p> : null}
//                 {/* <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 /> */}
//                 <Button
//                   underline="none"
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2, cursor: "pointer" }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link
//                       onClick={() => navigate("/forgot")}
//                       underline="none"
//                       sx={{ cursor: "pointer" }}
//                       variant="body2"
//                     >
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link
//                       onClick={() => navigate("/signup")}
//                       underline="none"
//                       sx={{ cursor: "pointer" }}
//                       variant="body2"
//                     >
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//             <Copyright sx={{ mt: 8, mb: 4 }} />
//           </Container>
//         </ThemeProvider>
//       ) : null}
//     </>
//   );
// }
