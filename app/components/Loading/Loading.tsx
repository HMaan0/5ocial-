import React from "react";
import { SidebarDemo } from "../Sidebar/SideBar";

const Loading = () => {
  return (
    <SidebarDemo>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-theme-border bg-white dark:bg-black flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
            {[...new Array(1)].map((i) => (
              <div
                key={"first-array" + i}
                className="h-32 w-full rounded-lg  bg-gray-100 dark:bg-theme-grey animate-pulse"
              ></div>
            ))}
          </div>
          <div className="flex gap-2 flex-1">
            {[...new Array(1)].map((i) => (
              <div
                key={"second-array" + i}
                className="h-32 w-full rounded-lg  bg-gray-100 dark:bg-theme-grey animate-pulse"
              ></div>
            ))}
          </div>
          <div className="flex gap-2 flex-1">
            {[...new Array(1)].map((i) => (
              <div
                key={"second-array" + i}
                className="h-32 w-full rounded-lg  bg-gray-100 dark:bg-theme-grey animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Loading;
