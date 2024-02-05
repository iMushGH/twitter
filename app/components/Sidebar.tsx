import Image from "next/image";
import React from "react";
import SidebarMenu from "./SidebarMenu";
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
    <div className="hidden sm:flex flex-col xl:items  p-2 border-r border-gray-200 w-[300px] fixed h-full">
      <Image
        src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
        alt="logo"
        width={50}
        height={50}
        className="mb-4 hoverEffect p-2"
      />
      <div className="space-y-2 mb-4">
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
      <button className="hover:brightness-95 w-full">Post</button>
      <div className="hoverEffect flex p-4 mt-auto items-center">
        <img
          src="https://pbs.twimg.com/profile_images/953406953186787328/zo75igbi_400x400.jpg"
          alt="profileID"
          className="w-12 rounded-full mr-3"
        />
        <div className="leading-5">
          <h6 className="font-bold text-gray-700">Mushnan Hassan</h6>
          <p className="text-gray-700">@imushdatacenter</p>
        </div>
        <DotsHorizontalIcon className="w-4 ml-auto" />
      </div>
    </div>
  );
}
