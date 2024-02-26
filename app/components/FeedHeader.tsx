import React from "react";
import { CogIcon } from "@heroicons/react/outline";
export default function () {
  return (
    <div className="flex hover:cursor-pointer text-center items-center border-b border-gray-200 w-[570px] fixed">
      <p className="grow hover:brightness-95 hover:bg-gray-200 p-4">For you</p>
      <p className="grow hover:brightness-95 hover:bg-gray-200 p-4">
        Following
      </p>
      <div className="p-2">
        <CogIcon className="w-5" />
      </div>
    </div>
  );
}
