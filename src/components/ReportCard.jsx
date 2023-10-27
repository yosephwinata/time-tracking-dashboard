import { TIME_FRAMES } from "../constants";

const ReportCard = ({ timeFrame, onTimeFrameClick }) => {
  return (
    <div className="h-[12.6785rem] w-full rounded-[15px] bg-dark-blue xl:row-start-1 xl:row-end-3 xl:h-full">
      <div className="flex h-2/3 items-center rounded-[15px] bg-blue pl-8 pr-9 xl:h-[68%] xl:flex-col xl:items-start xl:pt-9">
        <img
          src="/src/assets/image-jeremy.png"
          alt="Profile Picture"
          className="h-16 w-16 rounded-full border-4 border-white xl:h-[4.875rem] xl:w-[4.875rem]"
        />
        <div className="ml-4 xl:ml-0 xl:mt-10">
          <p className="text-left text-[0.9375rem] font-normal text-pale-blue">
            Report for
          </p>
          <p className="text-2xl font-light leading-tight text-white xl:text-[2.5rem]">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-8 xl:mx-8 xl:mt-5 xl:flex-col xl:items-start xl:gap-4">
        <button
          className={`text-lg font-normal ${
            timeFrame === TIME_FRAMES.DAILY
              ? "text-white"
              : "text-desaturated-blue"
          }`}
          onClick={() => onTimeFrameClick(TIME_FRAMES.DAILY)}
        >
          Daily
        </button>
        <button
          className={`text-lg font-normal ${
            timeFrame === TIME_FRAMES.WEEKLY
              ? "text-white"
              : "text-desaturated-blue"
          }`}
          onClick={() => onTimeFrameClick(TIME_FRAMES.WEEKLY)}
        >
          Weekly
        </button>
        <button
          className={`text-lg font-normal ${
            timeFrame === TIME_FRAMES.MONTHLY
              ? "text-white"
              : "text-desaturated-blue"
          }`}
          onClick={() => onTimeFrameClick(TIME_FRAMES.MONTHLY)}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
