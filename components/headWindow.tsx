function HeadWindow({
  hideWindow
}: {
  hideWindow: () => void;
  id: string;
  setDraggable: (draggable: boolean) => void;
}) {
  function minimizeWindow() {
    const terminal = document.getElementById("terminal");
    if (terminal == null) throw new Error("Terminal not found");
    terminal.classList.add("hidden");
  }

  // screen width
  const screenWidth = window.innerWidth;
  // screen height
  const screenHeight = window.innerHeight;

  function maximizeWindow() {
    const terminal = document.getElementById("terminal");
    if (terminal == null) throw new Error("Terminal not found");
    if (terminal.classList.contains("w-full")) {
      terminal.classList.remove("w-full");
      terminal.classList.remove("h-full");
      terminal.style.top = "30%";
      terminal.style.left = "30%";
      
    } else {
      terminal.classList.add("w-full");
      terminal.classList.add("h-full");
      terminal.style.top = "0px";
      terminal.style.left = "0px";
    }
  }
  return (
    <div className="flex flex-row w-full h-8 bg-gray-800">
      <div className="flex flex-row w-fit h-full">
        <div
          className="flex flex-row my-auto ml-3 w-4 h-4 bg-red-500 rounded-full hover:bg-red-700 hover:shadow-inner hover:shadow-red-400"
          onClick={hideWindow}
        ></div>
        <div
          className="flex flex-row my-auto ml-3 w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-700 hover:shadow-inner hover:shadow-yellow-400"
          aria-disabled="true"
        ></div>
        <div
          className="flex flex-row my-auto ml-3 w-4 h-4 bg-green-500 rounded-full hover:bg-green-700 hover:shadow-inner hover:shadow-green-400"
          onClick={minimizeWindow}
        ></div>
      </div>
      <div
        id="terminalDragger"
        className="flex flex-row w-full h-full bg-gray-800"
      >
        <div className="flex flex-row w-40 h-full"></div>
      </div>
    </div>
  );
}

export default HeadWindow;
