import React from "react";
import FeedHeader from "./FeedHeader";
import FeedSearch from "./FeedSearch";
import Post from "./Post";

export default function Feed({}) {
  const posts = [
    {
      id: 1,
      name: "Mushnan Hassan",
      username: "@iMushGH",
      userImage:
        "https://pbs.twimg.com/profile_images/953406953186787328/zo75igbi_400x400.jpg",
      image:
        "https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Fish are aquatic vertebrate animals that have gills but lack limbs with digits, like fingers or toes. Recall that vertebrates are animals with internal backbones. Most fish are streamlined in their general body form. ",
      timestamp: "2h ago.",
    },
    {
      id: 2,
      name: "Maryam Moro",
      username: "@Mariam",
      userImage:
        "https://pbs.twimg.com/profile_images/953406953186787328/zo75igbi_400x400.jpg",
      image:
        "https://plus.unsplash.com/premium_photo-1671581559143-00cde631d65d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Makeup Lover",
      timestamp: "4d ago.",
    },
  ];

  return (
    <div className="lg:ml-[250px] max-w-[576px] sm:ml-[70px] border-r lg:min-w-[576px] border-gray-200 h-[1080px]">
      {/* Feed Header */}
      <FeedHeader />
      {/* Feed Input */}
      <FeedSearch className="m-[100px]" />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
