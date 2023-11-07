"use client";

import Image from "next/image";
import TaskBar from "@/components/taskBar";
import { useState } from "react";
import Terminal from "@/components/terminal";
import Pf from "@/components/pf";

export default function Home() {
  const [terminal, setTerminal] = useState<boolean>(false);
  const [pf, setPf] = useState<boolean>(false);

  function changeTerminal() {
    setTerminal(!terminal);
  }

  function changePf() {
    setPf(!pf);
  }
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex fixed w-full h-full -z-10">
        <Image
          src="/windows.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" flex flex-row w-full h-full container">
        <div className="flex flex-col w-20 h-full ml-8 mt-6">
          <button
            className="w-fit h-fit m-auto"
            onClick={() => setTerminal(true)}
          >
            <Image
              src="/terminal.png"
              alt="terminal"
              width={50}
              height={50}
              className="m-auto"
            />
            <div className="text-white text-l italic m-auto">Terminal</div>
          </button>
          <button
            className="w-fit h-fit m-auto"
            onClick={() => setPf(true)}
          >
            <Image
              src="/pf.png"
              alt="pf"
              width={50}
              height={50}
              className="m-auto"
            />
            <div className="text-white text-l italic m-auto">Portfolio</div>
          </button>
        </div>
        {terminal ? (
          <Terminal terminal={terminal} changeTerminal={changeTerminal} />
        ) : (
          <></>
        )}
        {pf ? (
          <Pf pf={pf} changePf={changePf} />
        ) : (
          <></>
        )}
        <TaskBar terminal={terminal} />
      </div>
    </div>
  );
}
