import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import instaimg from "../assets/pngkey.com-instagram-png-13459.png";
import axios from "axios";
import { cleatUser, setUser } from "../Redux/UserSlice";
import { RiAccountCircleLine } from "react-icons/ri";
import { GradientBack } from "./Account";
import { NavLink, useNavigate } from "react-router-dom";
import { addPost } from "../Redux/PostSlice";

const CreatePost = () => {
  const user = useSelector((state) => state.user);
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreatePost = () => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        dispatch(
          addPost({
            userId: user.user.id,
            caption,
            imgUrl: reader.result,
            id: Date.now(),
          })
        );
      });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };
  console.log(file);
  return (
    <div className="w-full min-h-[80vh] md:min-h-screen make-center">
      {user.user ? (
        <Createposter
          setFile={setFile}
          handleCreatePost={handleCreatePost}
          setCaption={setCaption}
        />
      ) : (
        <NoUser />
      )}
    </div>
  );
};

const NoUser = () => {
  return (
    <div className="w-[90%] mx-auto md:w-[500px] ring-[1px] ring-gray-800 rounded-md  h-[500px] flex gap-10 justify-center items-center flex-col">
      <img src={instaimg} alt="" className="w-[120px] mx-auto my-10" />
      <p className="font-[6pp text-[20px] text-center">
        Please create an account, before adding posts.
      </p>
      <NavLink
        to={"/account"}
        className="w-[250px] h-[40px] mx-auto cursor-pointer"
      >
        <GradientBack text={"sign up"} />
      </NavLink>
    </div>
  );
};

const Createposter = ({ setFile, handleCreatePost, setCaption }) => {
  return (
    <div className="w-[90%] mx-auto md:w-[500px] ring-[1px] ring-gray-800 rounded-md  h-[500px] flex gap-10 justify-center items-center flex-col">
      <img src={instaimg} alt="" className="w-[120px] mx-auto my-10" />
      <input
        type="file"
        className="w-[90%] mx-auto h-[35px] rounded-md  bg-black ring-[1px] ring-gray-700 mb-8 px-2"
        placeholder="choose files"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="text"
        className="w-[90%] mx-auto h-[35px] rounded-md  bg-black ring-[1px] ring-gray-700 mb-8 px-2"
        placeholder="caption"
        onChange={(e) => setCaption(e.target.value)}
      />
      <p className="text-[20px] text-center">select files</p>
      <div
        className="w-[250px] h-[40px] mx-auto cursor-pointer"
        onClick={handleCreatePost}
      >
        <GradientBack text={"add post"} />
      </div>
    </div>
  );
};

export default CreatePost;
