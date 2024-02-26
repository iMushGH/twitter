import Image from "next/image";
import React from "react";
import SidebarMenu from "./SidebarMenu";
import { FaFeather } from "react-icons/fa6";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardListIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:inline sm:w-[70px] flex-col items-center lg:items-start p-2 border-r border-gray-200 lg:w-[250px] fixed h-[100%] z-10">
      <div className="inline-block flex-col">
        <Image
          src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
          alt="logo"
          width={40}
          height={40}
          className="mb-8 hoverEffect  justify-center items-center w-auto h-auto"
        />
        <div className="space-y-2 mb-8">
          <SidebarMenu text="Home" Icon={HomeIcon} />
          <SidebarMenu text="Explore" Icon={SearchIcon} />
          <SidebarMenu text="Notifications" Icon={BellIcon} />
          <SidebarMenu text="Message" Icon={MailIcon} />
          <SidebarMenu text="Grok" Icon={ExternalLinkIcon} />
          <SidebarMenu text="List" Icon={ClipboardListIcon} />
          <SidebarMenu text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenu text="Communities" Icon={UsersIcon} />
          <SidebarMenu text="Premium" Icon={HomeIcon} />
          <SidebarMenu text="Profile" Icon={UserIcon} />
          <SidebarMenu text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        <button className="hover:brightness-95 w-56 text-lg shadow-md hidden lg:inline">
          Post
        </button>
        <button className="hover:brightness-95 p-4 rounded-full text-lg shadow-md lg:hidden inline">
          <FaFeather className="self-center" />
        </button>
      </div>

      <div className="hoverEffect flex  p-2 items-center justify-center mt-auto ">
        <Image
          src="https://pbs.twimg.com/profile_images/953406953186787328/zo75igbi_400x400.jpg"
          alt="profileID"
          className="w-12 rounded-full xl:mr-3"
          width={50}
          height={50}
        />
        <div className="leading-5 hidden lg:inline">
          <h6 className="font-bold text-gray-700 text-sm">Mushnan Hassan</h6>
          <p className="text-gray-700 text-sm">@imushdatacenter</p>
        </div>
        <DotsHorizontalIcon className="w-4 ml-auto hidden lg:inline" />
      </div>
    </div>
  );
}
