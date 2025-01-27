import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const CategoryPieChart = () => {
  const data = useSelector(
    (state: {
      chart: {
        pieChartData: { name: string; value: number }[];
      };
    }) => state.chart.pieChartData
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
        Category Distribution
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart className="align-center">
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            labelLine={false}
            outerRadius="70%"
            innerRadius="40%"
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
