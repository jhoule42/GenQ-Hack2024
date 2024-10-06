'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Icons } from '@/components/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import QuantumLoader from '@/components/ui/quantum-loader';

export default function OverViewPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const Icon = Icons.info;
  const [esgScore, setEsgScore] = useState(33);
  const [riskIndex, setRiskIndex] = useState(33);

  const handleEsgChange = (value: number[]) => {
    setEsgScore(value[0]);
  };

  const handleRiskChange = (value: number[]) => {
    setRiskIndex(value[0]);
  };

  const handleOptimizeClick = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard/results');
    }, 5000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <QuantumLoader />
      </div>
    );
  }

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome Q-Impact User 👋
          </h2>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">
              Basic
            </TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Premium
            </TabsTrigger>
          </TabsList>

          <TooltipProvider>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6">
                <Card className="w-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      Investment Capital (USD):
                      <Tooltip>
                        <TooltipTrigger>
                          <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Funds, in USD, allocated to portfolio optimzation.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Input
                      id="funds_to_allocate"
                      placeholder="100000 USD"
                      required
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="w-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      Desired ESG Impact Score
                      <Tooltip>
                        <TooltipTrigger>
                          <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            ESG score reflects the enterprise's impact across environment,
                            social, and governance criteria. A higher score indicates a more
                            positive ESG impact.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <label htmlFor="esg-slider" className="text-xs font-medium text-gray-700">
                        Minimal (0)
                      </label>
                      <span id="esg-score" className="text-sm font-bold text-teal-600">
                        {esgScore} 
                      </span>
                      <label htmlFor="esg-slider" className="text-xs font-medium text-gray-700">
                        Maximum (100)
                      </label>
                    </div>
                    <Slider
                      id="esg-slider"
                      value={[esgScore]}
                      max={100}
                      step={1}
                      className="w-full mt-2"
                      onValueChange={(value: any) => setEsgScore(value)}
                    />
                    <p className="mt-2 text-xs text-gray-600">
                      Adjust the ESG impact score to reflect the desired impact of the portfolio on environmental, social, and governance factors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="w-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      Desired Returns:
                      <Tooltip>
                        <TooltipTrigger>
                          <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            The risk index represents the desired risk tolerance in the portfolio. A lower index indicates a more conservative approach, while a higher index indicates a higher tolerance for risk.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <label htmlFor="risk-slider" className="text-xs font-medium text-gray-700">
                        Low Return (5%)
                      </label>
                      <span id="risk-index" className="text-sm font-bold text-red-600">
                        {riskIndex}
                      </span>
                      <label htmlFor="risk-slider" className="text-xs font-medium text-gray-700">
                        High Return (50%)
                      </label>
                    </div>
                    <Slider
                      id="risk-slider"
                      value={[riskIndex]}
                      min={5}
                      max={50}
                      step={1}
                      className="w-full mt-2"
                      onValueChange={handleRiskChange}
                    />
                    <p className="mt-2 text-xs text-gray-600">
                      Adjust the returns to match your desired portfolio returns. A higher value indicates a more aggressive risk profile.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleOptimizeClick}
                  className="px-16 py-6 rounded-xl bg-teal-500 text-white text-2xl font-extrabold transition duration-200 hover:bg-white hover:text-teal-500 border-2 border-transparent hover:border-teal-500 w-full md:w-auto"
                  asChild
                >
                  <Link href="/dashboard/results">Optimize Portfolio</Link>
                </Button>
              </div>
            </TabsContent>
          </TooltipProvider>
        </Tabs>
      </div>
    </PageContainer>
  );
}