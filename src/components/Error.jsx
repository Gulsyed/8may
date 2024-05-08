import React from "react";
import { Container, Typography } from "@mui/material";
const Dashboard = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>404 Error : Page Not Found</Typography>
    </Container>
  );
};

export default Dashboard;
