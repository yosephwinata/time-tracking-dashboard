import { TIME_FRAMES } from "../constants";

const ActivityCard = ({ timeFrame, activity }) => {
  let iconFileName, cardColor, currentLog, previousLog, previousCaption;
  iconFileName = activity["icon"];
  cardColor = activity["color"];
  currentLog = activity["timeframes"][timeFrame]["current"];
  previousLog = activity["timeframes"][timeFrame]["previous"];

  switch (timeFrame) {
    case TIME_FRAMES.DAILY:
      previousCaption = "Yesterday";
      break;
    case TIME_FRAMES.WEEKLY:
      previousCaption = "Last Week";
      break;
    case TIME_FRAMES.MONTHLY:
      previousCaption = "Last Month";
  }

  return (
    <div
      className={`relative h-40 w-full overflow-hidden rounded-[15px] bg-${cardColor} xl:h-full`}
    >
      <img
        src={`/assets/${iconFileName}`}
        alt="Activity Icon"
        className="absolute -top-2.5 right-4"
      />
      <div className="absolute bottom-0 flex h-[7.625rem] w-80 flex-col justify-between rounded-[15px] bg-dark-blue px-6 py-7 xl:h-[81%] xl:w-full xl:px-[1.875rem] xl:pb-8 xl:pt-7">
        <div className="flex items-center justify-between">
          <p className="font-medium text-white">{activity.title}</p>
          <EllipsisMenu />
        </div>
        <div className="flex items-center justify-between xl:flex-col xl:items-start xl:gap-2">
          <p className="text-[2rem] font-light leading-none text-white xl:text-[3.5rem]">
            {currentLog}hrs
          </p>
          <p className="text-[0.9375rem] font-normal text-pale-blue">
            {previousCaption} - {previousLog}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

const EllipsisMenu = () => {
  return (
    <div className="flex items-center justify-center gap-x-0.5">
      <div className="h-1 w-1 rounded-full bg-pale-blue"></div>
      <div className="h-1 w-1 rounded-full bg-pale-blue"></div>
      <div className="h-1 w-1 rounded-full bg-pale-blue"></div>
    </div>
  );
};

export default ActivityCard;
