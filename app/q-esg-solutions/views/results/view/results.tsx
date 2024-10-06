'use client'

import { useEffect, useState } from 'react';
import { formatChartData, parseCSV } from "@/lib/csvParser";
import { AreaGraph } from '../area-graph';
import { BarGraph } from '../bar-graph';
import { PieGraph } from '../pie-graph';
import { LineGraph } from '../line-chart-graph';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
// import { spyCSV } from "@/constants/SPY";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TreeGraph } from '../tree-map-graph';

interface MSCIStockData {
  date: string;  // Or Date if you're handling it as Date objects
  close: number;
  [key: string]: any; // Allow other dynamic fields from CSV
}

interface StockData {
  id: string;
  name: string;
  allocation: number;
  esg_index: {
    animalTesting: boolean;
    coal: boolean;
    furLeather: boolean;
    gmo: boolean;
    palmOil: boolean;
    nuclear: boolean;
    pesticides: boolean;
  },
  esg_score: number,
}

const mockStocks: StockData[] = [
  {
    id: '1',
    name: 'EcoFriendly Corp',
    allocation: 40,
    esg_index: {
      animalTesting: false,
      coal: false,
      furLeather: false,
      gmo: true,
      palmOil: true,
      nuclear: false,
      pesticides: false,
    },
    esg_score: 85,
  },
  {
    id: '2',
    name: 'Green Energy Inc',
    allocation: 30,
    esg_index: {
      animalTesting: false,
      coal: false,
      furLeather: false,
      gmo: false,
      palmOil: false,
      nuclear: true,
      pesticides: false,
    },
    esg_score: 90,
  },
  {
    id: '3',
    name: 'Sustainable Foods Ltd',
    allocation: 20,
    esg_index: {
      animalTesting: false,
      coal: false,
      furLeather: true,
      gmo: false,
      palmOil: true,
      nuclear: false,
      pesticides: true,
    },
    esg_score: 70,
  },
  {
    id: '4',
    name: 'Toxic Waste Solutions',
    allocation: 10,
    esg_index: {
      animalTesting: true,
      coal: true,
      furLeather: true,
      gmo: true,
      palmOil: true,
      nuclear: false,
      pesticides: true,
    },
    esg_score: 30,
  },
  {
    id: '5',
    name: 'Recycled Plastics Co',
    allocation: 25,
    esg_index: {
      animalTesting: false,
      coal: false,
      furLeather: false,
      gmo: false,
      palmOil: false,
      nuclear: true,
      pesticides: false,
    },
    esg_score: 75,
  },
  {
    id: '6',
    name: 'Clean Water Technologies',
    allocation: 15,
    esg_index: {
      animalTesting: false,
      coal: false,
      furLeather: false,
      gmo: false,
      palmOil: false,
      nuclear: false,
      pesticides: false,
    },
    esg_score: 95,
  },
  {
    id: '7',
    name: 'Animal Welfare Alliance',
    allocation: 35,
    esg_index: {
      animalTesting: false,
      coal: false,
      furLeather: false,
      gmo: false,
      palmOil: false,
      nuclear: false,
      pesticides: false,
    },
    esg_score: 100,
  },
  {
    id: '8',
    name: 'High Carbon Footprint Ltd',
    allocation: 5,
    esg_index: {
      animalTesting: true,
      coal: true,
      furLeather: true,
      gmo: true,
      palmOil: true,
      nuclear: true,
      pesticides: true,
    },
    esg_score: 10,
  },
];

export default function ResultsPage() {
  const [predictedImpact, setPredictedImpact] = useState<string[]>([]);
  const [dataSPY, setDataSPY] = useState<MSCIStockData[]>([]);
  const [dataMSCI, setDataMSCI] = useState<MSCIStockData[]>([]);

  // useEffect(() => {
  //   const fetchCSVData = async () => {
  //     try {
  //       // Fetch SPY CSV data
  //       const responseSPY = await fetch('/public/SPY.csv');
  //       const csvSPY = await responseSPY.text();
  //       const parsedSPY = await parseCSV(csvSPY);

  //       // Format parsed data
  //       const formattedSPY = formatChartData(parsedSPY as StockData[]);
  //       setDataSPY(formattedSPY); // Set formatted SPY data

  //       console.log('response SP', formattedSPY)

  //       // Fetch MSCI CSV data
  //       const responseMSCI = await fetch('/public/MSCI_social.csv');
  //       const csvMSCI = await responseMSCI.text();
  //       const parsedMSCI = await parseCSV(csvMSCI);

  //       // Format parsed data
  //       const formattedMSCI = formatChartData(parsedMSCI as StockData[]);
  //       setDataMSCI(formattedMSCI); // Set formatted MSCI data
  //     } catch (error) {
  //       console.error("Error fetching or parsing CSV data:", error);
  //     }
  //   };

  //   fetchCSVData();
  // }, []);

  // useEffect(() => {
  //   const fetchPredictedImpact = async () => {
  //     const response = await fetch('/api/cohere', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ stocks: mockStocks }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setPredictedImpact(data.texts);
  //     } else {
  //       console.error('Failed to fetch predicted impact:', response.statusText);
  //     }
  //   };

  //   fetchPredictedImpact();
  // }, []);


  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            ESG Investments
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Generate Report</Button>
            {/* <Button>Download</Button> */}
          </div>
        </div>
        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">
              Current
            </TabsTrigger>
            <TabsTrigger value="historical">
              Historical
            </TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Return On Investment
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$152,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +15.21% from last year
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Environmental Impact
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-tree-deciduous"
                  //className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" />
                    <path d="M12 19v3" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    -7.2% C02 Emissions
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Equivalent to <b>701</b> trees planted
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Q-Impact Points
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-vegan"
                  >
                    <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
                    <path d="M16 8c4 0 6-2 6-6-4 0-6 2-6 6" /><path d="M17.41 3.6a10 10 0 1 0 3 3" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +73 from Q3
                  </p>
                </CardContent>
              </Card>
            </div>
            {/* <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Predicted Environmental Impact
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">You support the polar bears!</div>
                <p className="text-xs text-muted-foreground">
                  Your action towards responsible investments has saved the habitat of many polar bears.
                </p>
                <div className="text-2xl font-bold">You saved the black rhinoceros from extinction!</div>
                <p className="text-xs text-muted-foreground">
                  Continued investment in ESG indexes has reflected in the environment.
                </p>
              </CardContent>
            </Card> */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* <div className="col-span-4">
                <BarGraph />
              </div> */}
              <div className="col-span-4">
                <LineGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <TreeGraph />
              </div>
              {/* <div className="col-span-4">
                <AreaGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <PieGraph />
              </div> */}
            </div>
          </TabsContent>
          <TabsContent value="historical" className="space-y-4">
            <div className="">
              <div className="col-span-4">
                {/* <LineGraph dataSPY={dataSPY} dataMSCI={dataMSCI} /> */}
                <LineGraph />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}