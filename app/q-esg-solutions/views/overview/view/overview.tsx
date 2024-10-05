import { AreaGraph } from '../../results/area-graph';
import { BarGraph } from '../../results/bar-graph';
import { PieGraph } from '../../results/pie-graph';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { RecentSales } from '../../results/recent-sales';
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

export default function OverViewPage() {
  const Icon = Icons.info;

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Welcome back Q-ESG USER 👋
          </h2>
        </div>

        {/* Tabs Section */}
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
              {/* First Row - Funds Input */}
              <div className="grid gap-6">
                <Card className="w-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Desired Funds to Allocate (USD):
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
                {/* ESG Impact Score Slider */}
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
                            ESG score accounts for enterprise impact across
                            environment, social, and governance.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
                  </CardContent>
                </Card>

                {/* Risk Slider */}
                <Card className="w-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center">
                      Desired Risk Index:
                      <Tooltip>
                        <TooltipTrigger>
                          <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Risk index defines desired risk coefficient.
                          </p>
                        </TooltipContent>
                      </Tooltip>

                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
                  </CardContent>
                </Card>
              </div>

              {/* Third Row - Optimize Portfolio Button */}
              <div className="flex justify-center">
                <Button
                  className="px-8 py-3 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-teal-500 border-2 border-transparent hover:border-teal-500"
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
    // <PageContainer scrollable={true}>
    //   <div className="space-y-4">
    //     <div className="flex items-center justify-between space-y-2">
    //       <h2 className="text-2xl font-bold tracking-tight">
    //         Welcome back Q-ESG USER👋
    //       </h2>
    //     </div>
    //     <Tabs defaultValue="overview" className="space-y-6">
    //       <TabsList>
    //         <TabsTrigger value="overview">Overview</TabsTrigger>
    //         <TabsTrigger value="analytics" disabled>
    //           Analytics
    //         </TabsTrigger>
    //       </TabsList>
    //       <TooltipProvider>
    //         <TabsContent value="overview" className="space-y-4">
    //           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    //             {/* <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"></div> */}
    //             <Card>
    //               <CardHeader className="flex items-center justify-between pb-2">
    //                 <CardTitle className="text-sm font-medium flex items-center">
    //                   Desired Funds to Allocate (USD):
    // <Tooltip>
    //   <TooltipTrigger>
    //     <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
    //   </TooltipTrigger>
    //   <TooltipContent>
    //     <p>
    //       Funds, in USD, allocated to portfolio optimzation.
    //     </p>
    //   </TooltipContent>
    // </Tooltip>
    //                 </CardTitle>
    //               </CardHeader>
    //               <CardContent>
    //                 <Input
    //                   id="funds_to_allocate"
    //                   placeholder="100000 USD"
    //                   required
    //                   className="w-full"
    //                 />
    //               </CardContent>
    //             </Card>
    //             <Card>
    //               <CardHeader className="flex items-center justify-between pb-2">
    //                 <CardTitle className="text-sm font-medium flex items-center">
    //                   Desired ESG Impact Score
    //                   <Tooltip>
    //                     <TooltipTrigger>
    //                       <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
    //                     </TooltipTrigger>
    //                     <TooltipContent>
    //                       <p>
    //                         ESG score accounts for enterprise impact across
    //                         environment, social, and governance.
    //                       </p>
    //                     </TooltipContent>
    //                   </Tooltip>
    //                 </CardTitle>
    //               </CardHeader>
    //               <CardContent>
    //                 <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
    //               </CardContent>
    //             </Card>
    //             <Card>
    // <CardHeader className="flex items-center justify-between pb-2">
    //   <CardTitle className="text-sm font-medium">Desired Risk:
    //                   <Tooltip>
    //                     <TooltipTrigger>
    //                       <Icon className="ml-2 w-4 h-4" aria-label="Information icon" />
    //                     </TooltipTrigger>
    //                     <TooltipContent>
    //                       <p>
    //                         Risk index defines desired risk coefficient.
    //                       </p>
    //                     </TooltipContent>
    //                   </Tooltip>
    //                 </CardTitle>
    //               </CardHeader>
    //               <CardContent>
    //                 <Slider defaultValue={[33]} max={100} step={1} />
    //               </CardContent>
    //             </Card>
    //             <div className="flex items-center justify-center lg:justify-start">
    //               <Button
    //                 className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
    //                 asChild
    //               >
    //                 <Link href="/dashbaord/results">
    //                   Optimize Portfolio
    //                 </Link>
    //               </Button>
    //             </div>
    //           </div>
    //         </TabsContent>
    //       </TooltipProvider>
    //     </Tabs>
    //   </div>
    // </PageContainer>
  );
}