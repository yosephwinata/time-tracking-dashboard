import { useState } from "react";
import { TIME_FRAMES } from "./constants.js";
import ReportCard from "./components/ReportCard";
import ActivityCard from "./components/ActivityCard";
import activities from "./data/data.json";

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Dashboard />
    </div>
  );
}

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState(TIME_FRAMES.DAILY);

  const handleTimeFrameButtonClick = (value) => {
    setTimeFrame(value);
  };

  return (
    <div className="mx-auto my-[5.0625rem] grid w-80 grid-cols-1 justify-items-center gap-6 xl:m-0 xl:h-[32.375rem] xl:w-[70rem] xl:grid-cols-4 xl:grid-rows-2 xl:gap-[1.875rem]">
      <ReportCard
        timeFrame={timeFrame}
        onTimeFrameClick={handleTimeFrameButtonClick}
      />
      {activities.map((activity, index) => (
        <ActivityCard key={index} timeFrame={timeFrame} activity={activity} />
      ))}
    </div>
  );
};

export default App;
