"use client"
import useDragger from "@/hooks/useDragger";
import useResizable from "@/hooks/useResizable";
import React, { useRef } from "react";
import HeadWindow from "./headWindow";

function Terminal({ terminal, changeTerminal }: { terminal: boolean, changeTerminal: () => void }) {
  useDragger("terminal", "terminalDragger");
  useResizable("terminal");

  return (
    <>
      <div id="terminal" className="absolute w-[450px] h-96 min-w-fit">
        <HeadWindow hideWindow={changeTerminal} />
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
