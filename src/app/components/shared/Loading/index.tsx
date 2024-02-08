const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative inline-flex">
        <div className="w-5 h-5 bg-green-500 rounded-full"></div>
        <div className="w-5 h-5 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
        <div className="w-5 h-5 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
