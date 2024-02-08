import Image from "next/image";
import React from "react";
import { BiWorld } from "react-icons/bi";

export default function () {
  return (
    <div className="flex flex-row p-2">
      <div>
        <Image
          src="https://pbs.twimg.com/profile_images/953406953186787328/zo75igbi_400x400.jpg"
          alt="profileID"
          className="w-12 rounded-full mr-3"
          width={50}
          height={50}
        />
      </div>
      <div className="w-[400px]">
        <form action="">
          <textarea
            name=""
            id=""
            placeholder="What is happening?!"
            className="w-[100%] p-2 outline-none"
          />
        </form>
        <div className="text-blue-400 flex items-center justify-start gap-1">
          <BiWorld className="items-center flex" />
          <p>Everyone can rely</p>
        </div>
      </div>
    </div>
  );
}
