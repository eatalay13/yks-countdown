"use client";

import moment from "moment";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

function Countdown({ targetDate }: CountdownProps) {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment.now();
      const diff = moment(targetDate).diff(now);
      setCountDownTIme({
        days: moment.duration(diff).asDays(),
        hours: moment.duration(diff).hours(),
        minutes: moment.duration(diff).minutes(),
        seconds: moment.duration(diff).seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-3 sm:gap-8">
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {countDownTime?.days.toFixed(0)}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          Gün
        </span>
      </div>
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {countDownTime?.hours}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center font-medium">
          Saat
        </span>
      </div>
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {countDownTime?.minutes}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          Dakika
        </span>
      </div>
      <div className="flex flex-col gap-5 relative">
        <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
          <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]">
            {countDownTime?.seconds}
          </span>
          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
        </div>
        <span className="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          Saniye
        </span>
      </div>
    </div>
  );
}

export default Countdown;
