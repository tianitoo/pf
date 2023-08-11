"use client";
import { useEffect, useState } from "react";

const TaskBar: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      setDate(date.toLocaleDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="absolute bottom-0 left-0 bg-blue-500 h-12 w-screen flex justify-between items-center">
        <div className="flex flex-row bg-gradient-to-t from-green-600 to-green-800 w-56 h-12 left-0 rounded-r-2xl text-white italic text-2xl">
          <div className="m-auto">Start</div>
        </div>
        <div className="flex items-center bg-gradient-to-t from-blue-600 to-blue-800 w-56 rounded-l-2xl h-full">
          <button className="absolute bg-blue-500 w-7 h-7 text-white rounded-full mr-2 right-[202px] shadow-inner shadow-blue-800">
            <div className="m-auto">{"<"}</div>
          </button>
          <div className="w-fit h-fit text-white m-auto">
            <div className="text-white text-base italic">{time}</div>
            <div className="text-white text-xs italic">{date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBar;
