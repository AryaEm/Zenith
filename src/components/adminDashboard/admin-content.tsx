"use client"

import WelcomeAdmin from "./welcome-admin"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function AdminContent() {
    const viewsCards = [
        { title: "Downloads this Month", value: "50.8K", change: "+28.46%", changeType: "positive" },
        { title: "Monthly Users", value: "23.6K", change: "-12.6%", changeType: "negative" },
        { title: "New Sign Ups", value: "756", change: "+3.1%", changeType: "positive" },
        { title: "gatau apa", value: "0", change: "+100%", changeType: "positive" },
    ];

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Revenue",
                data: [5000, 15000, 20000, 30000, 50000, 125200, 150000, 200000, 175000, 150000, 225000, 240800],
                borderColor: "#8B5CF6",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
            },
            {
                label: "Expenses",
                data: [10000, 20000, 15000, 25000, 40000, 75000, 100000, 180000, 160000, 120000, 200000, 210000],
                borderColor: "#38BDF8",
                backgroundColor: "rgba(56, 189, 248, 0.1)",
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top" as const,
                labels: {
                    color: "#FFFFFF",
                },
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        return `$${context.raw.toLocaleString()} (${context.dataset.label})`;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#A3A3A3",
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                },
            },
            y: {
                ticks: {
                    color: "#A3A3A3",
                    callback: (tickValue: string | number) => {
                        if (typeof tickValue === "number") {
                            return `$${tickValue / 1000}K`;
                        }
                        return tickValue; // Fallback untuk string
                    },
                },
                grid: {
                    color: "rgba(255, 255, 255, 0.1)",
                },
            },
        },
    };

    return (
        <>
            <div className="h-dvh w-4/5 py-8 px-12 relative">
                <WelcomeAdmin></WelcomeAdmin>

                <div className="h-fit w-full grid grid-cols-1 md:grid-cols-4 gap-6 mt-2 mb-5">
                    {viewsCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#212430] text-white p-4 rounded-lg shadow-md border border-[#343B4F]"
                        >
                            <div className="text-sm font-medium text-[#AEB9E1] sfprodisplay">{card.title}</div>
                            <div className="w-full flex items-center gap-4 py-1">
                                <div className="text-2xl font-bold">{card.value}</div>
                                <div
                                    className={`text-sm font-medium px-2 border border-opacity-20 rounded-md ${card.changeType === "positive" ? "text-[#14CA74] border-[#05C168] bg-[#05C168] bg-opacity-20" : "text-[#FF5A65] border-[#FF5A65] bg-[#FF5A65] bg-opacity-20"
                                        }`}
                                >
                                    {card.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#212430] w-full h-[72%] border border-[#343B4F] rounded-lg p-6">
                    <h3 className="text-white text-lg font-semibold">Total Revenue</h3>
                    <p className="text-green-400 text-sm">+24.6%</p>
                    <div className="h-[85%]">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        </>
    )
}