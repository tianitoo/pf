import React, { useState, useRef, useEffect } from "react";
import useDragger from "@/hooks/useDragger";
import useResizable from "@/hooks/useResizable";
import HeadWindow from "./headWindow"; // Make sure this import is correct

function Terminal({
  terminal,
  changeTerminal,
}: {
  terminal: boolean;
  changeTerminal: () => void;
}) {
  const [input, setInput] = useState("");
  useDragger("terminal", "terminalDragger");
  useResizable("terminal");

  const [output, setOutput] = useState(
    'Welcome to the terminal!\nType "help" for a list of commands.\n'
  );

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const command = input.trim();
      if (command) {
        setOutput(output + "> " + command + "\n");
        setInput("");
      }
    }
  };

  useEffect(() => {
    // Scroll the textarea to the bottom when new content is added
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <>
      <div id="terminal" className="absolute w-[450px] h-96 min-w-fit">
        <HeadWindow
          hideWindow={changeTerminal}
          id="terminal"
          setDraggable={() => {}}
          key={Math.random()}
        />
        <div className="bg-gray-800 h-full w-full opacity-60">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-row w-full h-full">
              <div className="my-auto container flex flex-row w-full h-full text-white z-50">
                <div className="scrollable-div overflow-auto w-full h-full border border-gray-300 p-4 z-30">
                  <pre>{output}</pre>
                  <textarea
                    ref={textareaRef}
                    className="w-full bg-black text-white resize-none mb-2"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterKey}
                    placeholder="Type your command here and press Enter..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resizer absolute resizer-l w-3 h-full left-0 top-0 cursor-w-resize"></div>
        <div className="resizer absolute resizer-t w-full h-2 top-0 cursor-n-resize"></div>
        <div className="resizer absolute resizer-r w-3 h-full right-0 top-0 cursor-e-resize"></div>
        <div className="resizer absolute resizer-b w-full h-3 cursor-n-resize"></div>
      </div>
    </>
  );
}

export default Terminal;
