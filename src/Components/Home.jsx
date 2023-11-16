import axios from "axios";
import React, { useEffect, useState } from "react";
import { GradientBack } from "./Account";
import { useSelector } from "react-redux";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Comments from "./Comments";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  return (
    <div className="w-full md:w-[70%] mx-auto  min-h-screen p-3 pb-[40px]">
      {posts.map((post, index) => {
        return <UserPosts post={post} index={index} />;
      })}
    </div>
  );
};

const UserPosts = ({ post, index }) => {
  const [openCaption, setOpenCaption] = useState();
  const [openComment, setOpenComment] = useState();
  return (
    <div key={index}>
      <div className="w-full md:mr-auto md:ml-0 md:w-[500px]  rounded-md  min-h-[500px] flex gap-2 justify-center items-start flex-col mb-[50px] ">
        <div className="flex items-center gap-2">
          <div className="text-[35px] ">
            <RiAccountCircleLine />
          </div>
          <div className="font-[500] text-[15px]">
            <p>Username</p>
          </div>
        </div>
        <img
          src={post.imgUrl}
          alt=""
          className="w-full h-[450px] mx-auto object-fill md:ring-[1px] ring-gray-800"
        />
        <div className="flex justify-between items-center w-full p-1 mt-1">
          <div
            className="text-[25px] flex gap-5 cursor-pointer"
            onClick={() => setOpenComment(true)}
          >
            <FaRegHeart />
            <FiMessageCircle />
            <IoPaperPlaneOutline />
          </div>
          <div>
            <SaveSvg />
          </div>
        </div>
        <p className="font-[600] text-[17px]">200 likes</p>
        <p
          className=" text-[15px] text-ellipsis whitespace-nowrap w-full overflow-hidden"
          onClick={() => setOpenCaption((ps) => !ps)}
          style={{
            height: openCaption && "max-height",
            whiteSpace: openCaption && "pre-wrap",
          }}
        >
          {post.caption}
        </p>
      </div>
      {openComment && <Comments post={post} setOpenComment={setOpenComment} />}
    </div>
  );
};

export const SaveSvg = () => {
  return (
    <svg
      aria-label="Save"
      className="x1lliihq x1n2onr6 x5n08af"
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Save</title>
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

export default Home;
