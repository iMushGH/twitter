import React from "react";
import FeedHeader from "./FeedHeader";
import FeedSearch from "./FeedSearch";

export default function Feed({}) {
  return (
    <div className="lg:ml-[250px] max-w-[576px] sm:ml-[70px] border-r lg:min-w-[576px] border-gray-200 h-[1080px]">
      {/* Feed Header */}
      <FeedHeader />
      <FeedSearch />
    </div>
  );
}
