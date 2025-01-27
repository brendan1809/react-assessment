import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

export const SalesBarChart = () => {
  const data = useSelector(
    (state: {
      chart: {
        barChartData: { category: string; online: number; offline: number }[];
      };
    }) => state.chart.barChartData
  );
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        m: 2,
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        height: 400,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: theme.palette.text.primary,
          p: 1,
        }}
      >
        Quarterly Sales Comparison
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="online" fill="#8884d8" />
          <Bar dataKey="offline" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
