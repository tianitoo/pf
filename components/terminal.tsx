"use client";

import useDragger from "@/hooks/useDragger";
import { ResizableBox } from "react-resizable";

const Terminal: React.FC = () => {
  useDragger("terminal");

  return (
    <>
      <div id="terminal" className="absolute">
        <ResizableBox width={500} height={384} resizeHandles={["s", "e"]}
        axis="both"
        minConstraints={[500, 384]}
        >
          <div className="flex flex-row w-full h-8 bg-gray-800">
            <div className="flex flex-row w-1/2 h-full">
              <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-row w-full h-full bg-black opacity-70"></div>
        </ResizableBox>
      </div>
    </>
  );
};

export default Terminal;
