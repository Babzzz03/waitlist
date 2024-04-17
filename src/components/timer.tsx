import { useEffect, useState } from "react";
import { timeCalculation } from "@/lib/timeCalculator";

export const Timer = () => {
  const [countdown, setCountdown] = useState(() => timeCalculation() || []);

  useEffect(() => {
    const updateCountdown = setInterval(() => {
      const newCountdown = timeCalculation() || [];
      setCountdown(newCountdown);
    }, 1000);

    return () => {
      clearInterval(updateCountdown);
    };
  }, [countdown]);

  return (
    <div className="flex gap-8 uppercase font-semibold mt-32 lg:mt-20 md:scale-75 sm:scale-100 sm:gap-4 sm:mt-20">
      {countdown.length === 0 ? (
        <p className="font-semibold text-4xl text-white duration-300 ease-in">That is all folks!</p>
      ) : (
        countdown.map((count, index) => {
          const timerID = ["days", "hours", "minutes", "seconds"];

          return (
            <div key={index}>
              {/* // flip-card */}
              <div className="text-white inline-flex flex-col text-xl w-40 h-40 items-center justify-center card-shadow relative leading-loose sm:w-16 sm:text-3xl lg:text-7xl lg:w-40 lg:h-40 sm:h-16 sm:leading-[4rem]">
                {/* top */}
                <div className="h-1/2  bg-[#2a2c41] w-full flex justify-center overflow-hidden rounded-t-lg border-b border-b-slate-600">
                  <p className="">{count < 10 ? `0${count}` : count}</p>
                </div>

                {/*side dots */}
                <span className="absolute -right-1 h-3 w-3 rounded bg-slate-950 z-20 sm:w-2 sm:h-2" />
                <span className="absolute -left-1 h-3 w-3 rounded bg-slate-950 z-20 sm:w-2 sm:h-2" />

                {/* bottom */}
                <div className="h-1/2  bg-[#2e3047] w-full flex items-end justify-center overflow-hidden rounded-b-lg">
                  <p className="">{count < 10 ? `0${count}` : count}</p>
                </div>
              </div>

              <p className="text-sm text-primary text-center mt-9 tracking-widest border-teal-200 sm:text-[0.5rem] sm:mt-2">{timerID[index]}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
