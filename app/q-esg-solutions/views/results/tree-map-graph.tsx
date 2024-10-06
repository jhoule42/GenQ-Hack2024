'use client';

import { TrendingUp } from 'lucide-react';
import React, { PureComponent } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
    {
        name: 'Information Technology',
        children: [
            { name: 'Software', size: 13402 },
            { name: 'Hardware', size: 24593 },
            { name: 'Semiconductors', size: 12052 },
            { name: 'IT Services', size: 18360 },
        ],
    },
    {
        name: 'Health Care',
        children: [
            { name: 'Pharmaceuticals', size: 18622 },
            { name: 'Biotechnology', size: 11345 },
            { name: 'Health Care Equipment', size: 8734 },
            { name: 'Health Care Services', size: 17685 },
        ],
    },
    {
        name: 'Energy',
        children: [
            { name: 'Oil & Gas', size: 22584 },
            { name: 'Renewable Energy', size: 13432 },
            { name: 'Energy Equipment', size: 15484 },
        ],
    },
    {
        name: 'Communication Services',
        children: [
            { name: 'Media', size: 18372 },
            { name: 'Telecommunication', size: 17841 },
            { name: 'Entertainment', size: 11273 },
        ],
    },
    {
        name: 'Consumer Discretionary',
        children: [
            { name: 'Retail', size: 21389 },
            { name: 'Automobiles', size: 15432 },
            { name: 'Luxury Goods', size: 9823 },
        ],
    },
    {
        name: 'Consumer Staples',
        children: [
            { name: 'Food Products', size: 24389 },
            { name: 'Beverages', size: 14523 },
            { name: 'Household Products', size: 9841 },
        ],
    },
    {
        name: 'Financials',
        children: [
            { name: 'Banks', size: 32768 },
            { name: 'Insurance', size: 17632 },
            { name: 'Investment Funds', size: 13942 },
        ],
    },
    {
        name: 'Industrials',
        children: [
            { name: 'Aerospace & Defense', size: 19872 },
            { name: 'Construction', size: 12782 },
            { name: 'Manufacturing', size: 17653 },
        ],
    },
    {
        name: 'Materials',
        children: [
            { name: 'Chemicals', size: 19683 },
            { name: 'Metals & Mining', size: 17438 },
            { name: 'Packaging', size: 11523 },
        ],
    },
    {
        name: 'Real Estate',
        children: [
            { name: 'Residential', size: 16572 },
            { name: 'Commercial', size: 23748 },
            { name: 'REITs', size: 19845 },
        ],
    },
    {
        name: 'Utilities',
        children: [
            { name: 'Electric Utilities', size: 27365 },
            { name: 'Water Utilities', size: 14532 },
            { name: 'Renewable Utilities', size: 12845 },
        ],
    },
];

interface CustomizedContentProps {
    root: { children: any[] };  // Adjust the type as per your data structure
    depth: number;
    x: number;
    y: number;
    width: number;
    height: number;
    index: number;
    payload: any;
    colors: string[];
    rank?: number; 
    name: string;
}

const COLORS = [
    '#8889DD', '#1597E4', '#5DC77B', '#A5D297', '#E2CF45', '#F8C12D', '#FF6347', '#4682B4', '#32CD32', '#FFD700', '#FF69B4'
];

class CustomizedContent extends PureComponent<CustomizedContentProps> {
    render() {
        const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props;

        return (
            <g>
                <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    style={{
                        fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : '#ffffff00',
                        stroke: '#fff',
                        strokeWidth: 2 / (depth + 1e-10),
                        strokeOpacity: 1 / (depth + 1e-10),
                    }}
                />
                {depth === 1 ? (
                    <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                        {name}
                    </text>
                ) : null}
                {depth === 1 ? (
                    <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                        {index + 1}
                    </text>
                ) : null}
            </g>
        );
    }
}

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))'
    },
    mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))'
    }
} satisfies ChartConfig;

export function TreeGraph() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Optimized Portfolio Tree Map</CardTitle>
                <CardDescription>
                    Showing allocated funds with respect to GICS stock standards
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[310px] w-full"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <Treemap width={400} height={200} data={chartData} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8" />
                    </ResponsiveContainer>
                    {/* <ResponsiveContainer width="100%" height="100%">
                        <Treemap
                            width={400}
                            height={200}
                            data={chartData}
                            dataKey="size"
                            stroke="#fff"
                            fill="#8884d8"
                            content={<CustomizedContent colors={COLORS} />}
                        />
                    </ResponsiveContainer> */}
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}