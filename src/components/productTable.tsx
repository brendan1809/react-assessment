import React from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";

export const ProductsTable = () => {
  const products = useSelector(
    (state: {
      table: {
        products: {
          name: string;
          category: string;
          price: number;
          stock: number;
        }[];
      };
    }) => state.table.products
  );
  const theme = useTheme();

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 120,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
      renderCell: (params) => `$${params.value}`,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      minWidth: 120,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        m: 2,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: theme.palette.text.primary,
          p: 1,
          flexShrink: 0,
        }}
      >
        Products
      </Typography>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid rows={products} columns={columns} sx={{ flexGrow: 1 }} />
      </div>
    </Box>
  );
};
