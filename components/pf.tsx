import React, { useEffect, useRef, useState } from "react";
import useDragger from "@/hooks/useDragger";
import useResizable from "@/hooks/useResizable";
import HeadWindow from "./headWindow";

function Pf({
  pf,
  changePf,
  }: {
    pf: boolean;
    changePf: () => void;
    }) {
        return (
            <>
            <div id="pf" className="absolute w-full top-0 bottom-20 min-w-fit">
                <HeadWindow
                hideWindow={changePf}
                id="pf"
                setDraggable={() => {}}
                key={Math.random()}
                />
                <div className="bg-white h-full w-full ">
                <div className="flex flex-col w-full h-full">
                    <div className="flex flex-row w-full h-full">
                    <div className="my-auto container flex flex-row w-full h-full text-white z-50">
                        <div className="scrollable-div overflow-auto w-full h-full border border-gray-300 p-4 z-30">
                        <iframe src="https://pf-alpha.vercel.app/" height="100%" width="100%" title="Embedded post"></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
        }

export default Pf;