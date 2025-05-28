"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", members: 186 },
    { month: "February", members: 305 },
    { month: "March", members: 237 },
    { month: "April", members: 73 },
    { month: "May", members: 209 },
    { month: "June", members: 214 },
]

const chartConfig = {
    members: {
        label: "Members",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function ChartAdminMembers() {
    return (
        <div className="w-full flex flex-col justify-center">
            <h2 className="font-bold text-res-lg">Members</h2>
            <p>Grafik members selama 6 bulan</p>
            <ChartContainer config={chartConfig} className="w-full max-h-50">
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                        dataKey="members"
                        type="natural"
                        fill="var(--color-members)"
                        fillOpacity={0.4}
                        stroke="var(--color-members)"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    )
}
