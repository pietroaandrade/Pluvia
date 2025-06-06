import React from "react";
import { FiSun, FiCloudRain, FiCloud, FiSunset } from "react-icons/fi";

export default function Cards() {
    const forecastData = [
        { day: "Tomorrow", temperature: "5° / 9°", icon: <FiSun />, minTemp: 5, maxTemp: 9 },
        { day: "We", temperature: "11° / 17°", icon: <FiCloudRain />, minTemp: 11, maxTemp: 17 },
        { day: "Th", temperature: "9° / 15°", icon: <FiCloud />, minTemp: 9, maxTemp: 15 },
        { day: "Fr", temperature: "10° / 22°", icon: <FiSunset />, minTemp: 10, maxTemp: 22 },
        { day: "Sa", temperature: "13° / 17°", icon: <FiCloudRain />, minTemp: 13, maxTemp: 17 },
    ];

    return (
        <div className="space-y-1">
            {forecastData.map((data, index) => (
                <Card 
                    key={index}
                    icon={data.icon}
                    day={data.day}
                    temperature={data.temperature}
                    minTemp={data.minTemp}
                    maxTemp={data.maxTemp}
                />
            ))}
        </div>
    );
}

const Card = ({ day, temperature, icon, minTemp, maxTemp }) => {
    const barWidth = `${((maxTemp - minTemp) / 30) * 100}%`; 

    const numWidth = `${100-((maxTemp - minTemp) / 30) * 100}%`;

    return (
        <div className=" flex items-center justify-between gap-2 rounded px-2 text-sm bg-transparent shadow-none">
            {icon}
            <div className="flex flex-col flex-grow">
                <h3 className="font-semibold text-stone-500 mb-1 text-sm">{day}</h3>
                <div className="flex items-center">
                    <p className="text-2xl font-semibold">{minTemp}<span className="text-sm">°C</span></p>
                    <div className="flex-grow" />
                    <div style={{ width: numWidth }} className="text-2xl font-semibold">
                        {maxTemp} <span className="text-sm">°C</span>
                    </div>
                </div>
                
                <div className="relative h-2 bg-gray-200 rounded">
                    <div 
                        className="absolute h-full bg-pluvia-purple rounded"
                        style={{ width: barWidth }} 
                    />
                </div>
            </div>
        </div>
    );
}