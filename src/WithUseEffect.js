const WithUseEffect = ({ count, timeDiff }) => {
  return (
    <div className="text-xs pr-2 py-6">
      <p className="text-center bg-gray-200 p-4">
        1.
        <span className="underline font-bold">UseEffect</span>
        {timeDiff >= 0
          ? null
          : ` - Sent request ${Math.abs(timeDiff)}ms earlier.`}
      </p>
      <div className="p4 border border-gray-200 h-60 border-t-0 flex justify-center items-center">
        <div className="p-4 bg-gray-100 rounded-full">
          {count ? `#${count}` : "loading..."}
        </div>
      </div>
    </div>
  );
};

export default WithUseEffect;
