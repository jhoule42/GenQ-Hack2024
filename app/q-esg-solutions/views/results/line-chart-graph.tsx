"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Generate more data points: quarterly data for each year from 1990 to 2024
const chartData: any[] = [];
const startYear = 1990;
const endYear = 2024;
let MSCI_KLD = 100;
let MSCI_USA = 100;

// Function to simulate index growth
function generateQuarterlyData() {
  for (let year = startYear; year <= endYear; year++) {
    for (let quarter = 1; quarter <= 4; quarter++) {
      const MSCI_KLD_change = Math.random() * 5.5; // Random fluctuation for each quarter
      const MSCI_USA_change = Math.random() * 5;

      // Simulating gradual growth with fluctuations
      MSCI_KLD += MSCI_KLD_change;
      MSCI_USA += MSCI_USA_change;

      chartData.push({
        year: `${year} Q${quarter}`, // Label format "Year Q1", "Year Q2", etc.
        MSCI_KLD: MSCI_KLD.toFixed(2),
        MSCI_USA: MSCI_USA.toFixed(2),
      });
    }
  }
}

generateQuarterlyData();

const chartConfig = {
  MSCI_KLD: {
    label: "MSCI KLD 400 Social",
    color: "hsl(39, 100%, 50%)", // Yellow line color
  },
  MSCI_USA: {
    label: "MSCI USA Index",
    color: "hsl(200, 100%, 80%)", // White line color
  },
} satisfies ChartConfig;

export function LineGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>MSCI KLD 400 Social Index vs MSCI USA Index</CardTitle>
        <CardDescription>1990 - 2024 (Quarterly Data)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={30} // Adjust to prevent overlap
            />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend verticalAlign="top" />
            <Line
              dataKey="MSCI_KLD"
              name={chartConfig.MSCI_KLD.label}
              stroke={chartConfig.MSCI_KLD.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="MSCI_USA"
              name={chartConfig.MSCI_USA.label}
              stroke={chartConfig.MSCI_USA.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              ESG performance trending up <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Historical performance of MSCI KLD 400 vs. MSCI USA Index
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
