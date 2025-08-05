"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PointsForm from "@/components/PointsForm";
import CurvesForm from "@/components/CurvesForm";
import SpotsForm from "@/components/SpotsForm";
import VolatilityForm from "@/components/VolatilityForm";
import InflationForm from "@/components/InflationForm";
import SeasonalityForm from "@/components/SeasonalityForm";

const tabTypes = ["points", "curves", "spots", "volatility", "inflation", "seasonality"];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const typeFromUrl = searchParams.get("type") ?? "points";
  const [tab, setTab] = useState(typeFromUrl);

  useEffect(() => {
    if (!tabTypes.includes(typeFromUrl)) {
      router.replace("?type=points", { scroll: false });
    } else {
      setTab(typeFromUrl);
    }
  }, [typeFromUrl]);

  const handleTabChange = (value: string) => {
    setTab(value);
    router.push(`?type=${value}`, { scroll: false });
  };

  return (
    <div className="flex w-full flex-col justify-center items-center gap-6 my-[10vh]">
      <Tabs value={tab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="points">Points</TabsTrigger>
          <TabsTrigger value="curves">Curves</TabsTrigger>
          <TabsTrigger value="spots">Spots</TabsTrigger>
          <TabsTrigger value="volatility">Volatility</TabsTrigger>
          <TabsTrigger value="inflation">Inflation</TabsTrigger>
          <TabsTrigger value="seasonality">Seasonality</TabsTrigger>
        </TabsList>

        <TabsContent value="points">
          <PointsForm />
        </TabsContent>
        <TabsContent value="curves">
          <CurvesForm />
        </TabsContent>
        <TabsContent value="spots">
          <SpotsForm />
        </TabsContent>
        <TabsContent value="volatility">
           <VolatilityForm />
        </TabsContent>
        <TabsContent value="inflation">
          <InflationForm />
        </TabsContent>
        <TabsContent value="seasonality">
          <SeasonalityForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
