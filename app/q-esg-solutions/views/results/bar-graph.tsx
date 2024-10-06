"use client";

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { company: 'ESG 1', esgScore: 120 },
  { company: 'ESG 2', esgScore: 125 },
  { company: 'ESG 3', esgScore: 130 },
  { company: 'ESG 4', esgScore: 135 },
  { company: 'ESG 5', esgScore: 140 },
  { company: 'ESG 6', esgScore: 145 },
  { company: 'ESG 7', esgScore: 150 },
  { company: 'ESG 8', esgScore: 155 },
  { company: 'ESG 9', esgScore: 160 },
  { company: 'ESG 10', esgScore: 165 },
  { company: 'ESG 11', esgScore: 170 },
  { company: 'ESG 12', esgScore: 175 },
  { company: 'ESG 13', esgScore: 180 },
  { company: 'ESG 14', esgScore: 185 },
  { company: 'ESG 15', esgScore: 190 },
  { company: 'ESG 16', esgScore: 195 },
  { company: 'ESG 17', esgScore: 200 },
  { company: 'ESG 18', esgScore: 205 },
  { company: 'ESG 19', esgScore: 210 },
  { company: 'ESG 20', esgScore: 215 },
  { company: 'ESG 21', esgScore: 220 },
  { company: 'ESG 22', esgScore: 225 },
  { company: 'ESG 23', esgScore: 230 },
  { company: 'ESG 24', esgScore: 235 },
  { company: 'ESG 25', esgScore: 240 },
  { company: 'ESG 26', esgScore: 245 },
  { company: 'ESG 27', esgScore: 250 },
  { company: 'ESG 28', esgScore: 255 },
  { company: 'ESG 29', esgScore: 260 },
  { company: 'ESG 30', esgScore: 265 },
  { company: 'ESG 31', esgScore: 270 },
  { company: 'ESG 32', esgScore: 275 },
  { company: 'ESG 33', esgScore: 280 },
  { company: 'ESG 34', esgScore: 285 },
  { company: 'ESG 35', esgScore: 290 },
  { company: 'ESG 36', esgScore: 295 },
  { company: 'ESG 37', esgScore: 300 },
  { company: 'ESG 38', esgScore: 305 },
  { company: 'ESG 39', esgScore: 310 },
  { company: 'ESG 40', esgScore: 315 },
  { company: 'ESG 41', esgScore: 320 },
  { company: 'ESG 42', esgScore: 325 },
  { company: 'ESG 43', esgScore: 330 },
  { company: 'ESG 44', esgScore: 335 },
  { company: 'ESG 45', esgScore: 340 },
  { company: 'ESG 46', esgScore: 345 },
  { company: 'ESG 47', esgScore: 350 },
  { company: 'ESG 48', esgScore: 355 },
  { company: 'ESG 49', esgScore: 360 },
  { company: 'ESG 50', esgScore: 365 },
  { company: 'ESG 51', esgScore: 370 },
  { company: 'ESG 52', esgScore: 375 },
  { company: 'ESG 53', esgScore: 380 },
  { company: 'ESG 54', esgScore: 385 },
  { company: 'ESG 55', esgScore: 390 },
  { company: 'ESG 56', esgScore: 395 },
  { company: 'ESG 57', esgScore: 400 },
  { company: 'ESG 58', esgScore: 405 },
  { company: 'ESG 59', esgScore: 410 },
  { company: 'ESG 60', esgScore: 415 },
  { company: 'ESG 61', esgScore: 420 },
  { company: 'ESG 62', esgScore: 425 },
  { company: 'ESG 63', esgScore: 430 },
  { company: 'ESG 64', esgScore: 435 },
  { company: 'ESG 65', esgScore: 440 },
  { company: 'ESG 66', esgScore: 445 },
  { company: 'ESG 67', esgScore: 450 },
  { company: 'ESG 68', esgScore: 455 },
  { company: 'ESG 69', esgScore: 460 },
  { company: 'ESG 70', esgScore: 465 },
  { company: 'ESG 71', esgScore: 470 },
  { company: 'ESG 72', esgScore: 475 },
  { company: 'ESG 73', esgScore: 480 },
  { company: 'ESG 74', esgScore: 485 },
  { company: 'ESG 75', esgScore: 490 },
  { company: 'ESG 76', esgScore: 495 },
  { company: 'ESG 77', esgScore: 500 },
  { company: 'ESG 78', esgScore: 505 },
  { company: 'ESG 79', esgScore: 510 },
  { company: 'ESG 80', esgScore: 515 },
  { company: 'ESG 81', esgScore: 520 },
  { company: 'ESG 82', esgScore: 525 },
  { company: 'ESG 83', esgScore: 530 },
  { company: 'ESG 84', esgScore: 535 },
  { company: 'ESG 85', esgScore: 540 },
  { company: 'ESG 86', esgScore: 545 },
  { company: 'ESG 87', esgScore: 550 },
  { company: 'ESG 88', esgScore: 555 },
  { company: 'ESG 89', esgScore: 560 },
  { company: 'ESG 90', esgScore: 565 },
  { company: 'ESG 91', esgScore: 570 },
  { company: 'ESG 92', esgScore: 575 },
  { company: 'ESG 93', esgScore: 580 },
  { company: 'ESG 94', esgScore: 585 },
  { company: 'ESG 95', esgScore: 590 },
  { company: 'ESG 96', esgScore: 595 },
  { company: 'ESG 97', esgScore: 600 },
  { company: 'ESG 98', esgScore: 605 },
  { company: 'ESG 99', esgScore: 610 },
  { company: 'ESG 100', esgScore: 615 },
];

const chartConfig = {
  esgScore: {
    label: 'ESG Score',
    color: 'hsl(138, 60%, 70%)'
  }
} satisfies ChartConfig;

export function BarGraph() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Portfolio Holdings by ESG Score</CardTitle>
          <CardDescription>
            Companies arranged in ascending order of their ESG score.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="company"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="esgScore"
                  labelFormatter={(value) => {
                    return `ESG: ${value}`;
                  }}
                />
              }
            />
            <Bar dataKey="esgScore" fill="hsl(120, 100%, 50%)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}