import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FaRegBookmark, FaRegComment, FaRetweet } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Post({ post }: any) {
  return (
    <div className="flex flex-row p-2 border-b border-gray-200">
      {/* Image */}
      <div className="">
        <Image
          className="w-12 h-12 rounded-full mr-4 justify-start"
          src={post.userImage}
          alt="profile pic"
          width={50}
          height={50}
        />
      </div>

      {/* Right Side */}
      <div className="w-[100%]">
        {/* Header */}
        <div className="flex gap-2">
          <h4 className="font-bold">{post.name}</h4>
          <span>{post.username}</span>
          <span>{post.timestamp}</span>
          <div className="ml-auto">
            <DotsHorizontalIcon className="h-8" />
          </div>
        </div>
        {/* Text content */}
        <p className="mb-4">{post.text}</p>

        {/* Post Image */}
        <Image
          src={post.image}
          alt="image-post"
          className="w-auto h-auto rounded-2xl mb-4"
          width={1080}
          height={700}
        />
        <div className="flex flex-row justify-between text-lg">
          <FaRegComment className="hoverEffect w-9 h-9 p-2 hover:bg-blue-50" />
          <FaRetweet className="hoverEffect w-9 h-9 p-2 hover:bg-blue-50" />
          <FaRegHeart className="hoverEffect w-9 h-9 p-2 hover:bg-blue-50" />
          <IoStatsChartSharp className="hoverEffect w-9 h-9 p-2 hover:bg-blue-50" />
          <span className="gap-2 flex">
            <FaRegBookmark className="hoverEffect w-9 h-9 p-2 hover:bg-blue-50" />
            <MdOutlineFileUpload className="hoverEffect w-9 h-9 p-2 hover:bg-blue-50" />
          </span>
        </div>
      </div>
    </div>
  );
}
