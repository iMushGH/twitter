import { BiWorld } from "react-icons/bi";
import { AiOutlinePicture } from "react-icons/ai";
import { HiOutlineGif } from "react-icons/hi2";
import { CiCircleList } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { TbMapPin } from "react-icons/tb";

import React from "react";

function FeedSearchFooterContent() {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex gap-1">
        <AiOutlinePicture className="w-10 h-10 hover:bg-blue-100 duration-300 p-2 rounded-full " />
        <HiOutlineGif className="w-10 h-10 hover:bg-blue-100 duration-300 p-2 rounded-full " />
        <CiCircleList className="w-10 h-10 hover:bg-blue-100 duration-300 p-2 rounded-full " />
        <FaRegSmile className="w-10 h-10 hover:bg-blue-100 duration-300 p-2 rounded-full " />
        <LuCalendarClock className="w-10 h-10 hover:bg-blue-100 duration-300 p-2 rounded-full " />
        <TbMapPin className="w-10 h-10 hover:bg-blue-100 duration-300 p-2 rounded-full " />
      </div>
      <button>Post</button>
    </div>
  );
}

export default FeedSearchFooterContent;
