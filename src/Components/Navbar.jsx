import React, { useEffect } from "react";
import { TiHome } from "react-icons/ti";
import { FaRegCompass } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import useDimension from "../Utils/useDimension";
import { MdOutlineAddBox } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import instaimg from "../assets/pngkey.com-instagram-png-13459.png";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavIcons = [
    <TiHome />,
    <HiMiniMagnifyingGlass />,
    <FaRegCompass />,
    <BiMoviePlay />,
    <RiMessengerLine />,
    <FaRegHeart />,
    <MdOutlineAddBox />,
  ];

  const NavMenus = [
    "Home",
    "Search",
    "Explore",
    "Reels",
    "Message",
    "Notification",
    "Create",
  ];
  const screenWidth = useDimension();

  //   useEffect(() => {
  //     const commentData = {
  //       id: 3, // ID for the new comment
  //       userId: 3,
  //       text: "This is a new comment!",
  //     };

  //     axios
  //       .patch("http://localhost:3001/posts/1", {
  //         comments: [
  //           {
  //             id: 1,
  //             userId: 1,
  //             text: "Great post!",
  //           },
  //           {
  //             id: 2,
  //             userId: 2,
  //             text: "Awesome!",
  //           },
  //           commentData,
  //         ], // 'post' refers to the existing post data
  //       })
  //       .then((response) => {
  //         console.log("Comment added:", response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error adding comment:", error);
  //       });
  //   });
  return (
    <div className="w-screen h-[60px] fixed bottom-0 flex justify-around border-t-[1px] items-center border-gray-700 text-gray-400 md:flex-col md:h-screen md:left-0 md:w-[75px]  md:p-2 md:justify-start md:gap-8 md:border-r-[1px] md:py-5  lg:w-[240px] lg:items-start z-[999] bg-black">
      {/* Instagram logo starts  */}
      <div className="fixed top-0 w-full h-[60px] p-4 md:p-2 flex items-center justify-between md:justify-center md:static lg:justify-start z-[999] bg-black">
        <img src={instaimg} className=" w-[110px] md:hidden lg:block" alt="" />
        <div className="text-[25px] text-white hidden md:block lg:hidden">
          <FaInstagram />
        </div>
        <div className="text-[25px] text-white md:hidden">
          <FaRegHeart />
        </div>
      </div>
      {/* Instagram logo ends */}

      {/* menu items start  */}
      {NavIcons.map((icon, index) => {
        return (
          <NavLink
            to={NavMenus[index] === "Create" ? "/create" : "/"}
            key={index}
            className={
              `text-white text-[25px]  lg:gap-3 lg:items-center lg:pl-5 hover:font-[700] cursor-pointer transition-all duration-[.3s]` +
              `${NavMenus[index] === "Create" ? " animate-bounce" : ""}`
            }
            style={{
              display:
                screenWidth < 740 &&
                ["Notification", "Message", "Search"].includes(NavMenus[index])
                  ? "none"
                  : "flex",
            }}
          >
            <div>{icon}</div>
            <h3 className="hidden lg:block text-[16px] font-[300] hover:font-[700]">
              {NavMenus[index]}
            </h3>
          </NavLink>
        );
      })}
      <NavLink
        to="/account"
        className="text-white text-[25px] flex lg:gap-3 lg:items-center lg:pl-5 hover:font-[700] cursor-pointer transition-all duration-[.3s] animate-bounce"
      >
        <div>
          <RiAccountCircleLine />
        </div>
        <h3 className="hidden lg:block text-[16px] font-[300] hover:font-[700]">
          Account
        </h3>
      </NavLink>
      {/* menu items ends */}
    </div>
  );
};

export default Navbar;
