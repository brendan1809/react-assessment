import React from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";

export const UsersTable = () => {
  const users = useSelector(
    (state: {
      table: {
        users: {
          name: string;
          email: string;
          role: string;
          status: string;
        }[];
      };
    }) => state.table.users
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
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 200,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      minWidth: 120,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 130,
      headerClassName: "text-xs font-medium text-gray-500 uppercase",
      renderCell: (params) => {
        const status = params.value;
        const statusClasses =
          status === "Active"
            ? { backgroundColor: "#d1fae5", color: "#10b981" }
            : status === "Inactive"
            ? { backgroundColor: "#fee2e2", color: "#ef4444" }
            : { backgroundColor: "#fef3c7", color: "#f59e0b" };

        return (
          <span
            style={{
              ...statusClasses,
              padding: "4px 8px",
              borderRadius: 999,
            }}
            className="inline-flex text-xs leading-5 font-semibold"
          >
            {status}
          </span>
        );
      },
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
        Monthly Performance
      </Typography>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid rows={users} columns={columns} sx={{ flexGrow: 1 }} />
      </div>
    </Box>
  );
};
