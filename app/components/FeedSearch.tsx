import Image from "next/image";
import React from "react";
import { BiWorld } from "react-icons/bi";
import FeedSearchFooterContent from "./FeedSearchFooterContent";

export default function () {
  return (
    <div className="flex flex-row p-2 border-b border-gray-200">
      <div>
        <Image
          src="https://pbs.twimg.com/profile_images/953406953186787328/zo75igbi_400x400.jpg"
          alt="profileID"
          className="w-12 rounded-full mr-3"
          width={50}
          height={50}
        />
      </div>
      <div className="w-[100%]">
        <form action="">
          <textarea
            name="textarea"
            id="inputSection"
            placeholder="What is happening?!"
            className="w-[100%] p-2 outline-none max-height: 150px; border-none focus:ring-0"
          />
        </form>
        <div className="text-blue-400 flex gap-1 justify-start items-center  font-[500] border-b-gray-200 border-b pb-2 ">
          <BiWorld className="" />
          <p className="font-bold text-[14px]">Everyone can reply</p>
        </div>
        <FeedSearchFooterContent />
      </div>
    </div>
  );
}
