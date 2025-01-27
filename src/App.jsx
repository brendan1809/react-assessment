import React, { useState } from "react";
import { SalesLineChart } from "./components/salesLineChart.tsx";
import { SalesBarChart } from "./components/salesBarChart.tsx";
import { CategoryPieChart } from "./components/categoryPieChart.tsx";
import { UsersTable } from "./components/usersTable.tsx";
import {
  Grid,
  Container,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import { ProductsTable } from "./components/productTable.tsx";
import { blue } from "@mui/material/colors";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SortIcon from "@mui/icons-material/Sort";
import { useSelector, useDispatch } from "react-redux";
import SortModal from "./components/SortModal.tsx";

export default function App() {
  const theme = createTheme({
    palette: {
      text: { primary: blue[500] },
    },
  });

  const [modalOpen, setModalOpen] = useState(false);
  const layoutOrder = useSelector((state) => state.layout.order);

  const sortedOrder = Object.keys(layoutOrder).sort(
    (a, b) => layoutOrder[a] - layoutOrder[b]
  );

  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
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
              Sample Dashboard with Resize & Reposition
            </h1>

            {sortedOrder.map((section, index) => {
              switch (section) {
                case "dashboard":
                  return (
                    <Grid container spacing={1}>
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
                  );
                case "usertable":
                  return <UsersTable />;
                case "producttable":
                  return <ProductsTable />;
                default:
                  return null;
              }
            })}
          </Container>

          <Button
            variant="contained"
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              width: 70,
              height: 70,
              borderRadius: 999,
            }}
            onClick={() => setModalOpen(true)}
          >
            <SortIcon />
          </Button>

          <SortModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </DndProvider>
    </ThemeProvider>
  );
}
