import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography, useTheme } from "@mui/material";

export const SalesLineChart = () => {
  const data = useSelector(
    (state: {
      chart: {
        lineChartData: {
          month: string;
          sales: number;
          revenue: number;
          profit: number;
        }[];
      };
    }) => state.chart.lineChartData
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
        Monthly Performance
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke={theme.palette.primary.main}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={theme.palette.success.main}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke={theme.palette.warning.main}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
