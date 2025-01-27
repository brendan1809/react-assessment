import React from "react";

import { SalesLineChart } from "./components/salesLineChart.tsx";
import { SalesBarChart } from "./components/salesBarChart.tsx";
import { CategoryPieChart } from "./components/categoryPieChart.tsx";
import { UsersTable } from "./components/usersTable.tsx";
import { Grid, Container, ThemeProvider, createTheme } from "@mui/material";
import { ProductsTable } from "./components/productTable.tsx";
import { blue } from "@mui/material/colors";

// Main App Component
export default function App() {
  const theme = createTheme({
    palette: {
      text: { primary: blue[500] },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#f7f7f7",
        }}
      >
        <Container maxWidth={false} disableGutters>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: 0,
              padding: 5,
            }}
          >
            Sample Dashboard with resize & reposition
          </h1>

          <Grid container spacing={1}>
            {/* Charts */}
            <Grid item xs={12} md={6}>
              <SalesLineChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <CategoryPieChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <SalesBarChart />
            </Grid>
          </Grid>

          {/* Tables Section */}
          <div>
            <UsersTable />
            <ProductsTable />
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}
