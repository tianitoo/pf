"use client"
import useDragger from "@/hooks/useDragger";
import useResizable from "@/hooks/useResizable";
import React, { useRef } from "react";

const Terminal: React.FC = () => {
  useDragger("terminal", "terminalDragger");
  useResizable("terminal");

  return (
    <>
      <div id="terminal" className="absolute w-4/5 h-96 min-w-fit">
        <div className="flex flex-row w-full h-8 bg-gray-800 ">
          <div className="flex flex-row w-fit h-full">
            <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          <div id="terminalDragger" className="flex flex-row w-full h-full bg-gray-800">
            <div className="flex flex-row w-40 h-full">
            </div>
          </div>
        </div>
        <div className="bg-gray-800 h-full w-full opacity-60"></div>
        <div className="resizer absolute resizer-l w-3 h-full left-0 top-0 cursor-w-resize"></div>
        <div className="resizer absolute resizer-t w-full h-2 top-0 cursor-n-resize"></div>
        <div className="resizer absolute resizer-r w-3 h-full right-0 top-0 cursor-e-resize"></div>
        <div className="resizer absolute resizer-b w-full h-3 cursor-n-resize"></div>
      </div>
    </>
  );
};

export default Terminal;
