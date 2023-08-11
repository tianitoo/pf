function HeadWindow ({ hideWindow }: { hideWindow: () => void }) {
    return (
        <div className="flex flex-row w-full h-8 bg-gray-800">
          <div className="flex flex-row w-fit h-full">
            <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-red-500 rounded-full hover:bg-red-700 hover:shadow-inner hover:shadow-red-400" onClick={hideWindow}></div>
            <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-yellow-500 rounded-full hover:bg-yellow-700 hover:shadow-inner hover:shadow-yellow-400"></div>
            <div className="flex flex-row my-auto ml-3 w-4 h-4 bg-green-500 rounded-full hover:bg-green-700 hover:shadow-inner hover:shadow-green-400"></div>
          </div>
          <div id="terminalDragger" className="flex flex-row w-full h-full bg-gray-800">
            <div className="flex flex-row w-40 h-full">
            </div>
          </div>
        </div>
    )
}

export default HeadWindow;