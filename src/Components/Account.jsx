import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import instaimg from "../assets/pngkey.com-instagram-png-13459.png";
import axios from "axios";
import { cleatUser, setUser } from "../Redux/UserSlice";
import { RiAccountCircleLine } from "react-icons/ri";

const Account = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [pasword, setpasword] = useState("");

  const handleSignup = () => {
    const userInfo = {
      username,
      email,
    };
    dispatch(setUser(userInfo));
  };
  return (
    <div className="text-white min-h-[80vh] md:min-h-screen make-center w-full ">
      {user?.user ? (
        <AccountDetails user={user.user} dispatch={dispatch} />
      ) : (
        <SignupPage
          setUsername={setUsername}
          setemail={setemail}
          setpasword={setpasword}
          handleSignup={handleSignup}
        />
      )}
    </div>
  );
};

export const GradientBack = ({ text }) => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-500 p-[1px] to-purple-500 rounded-md ">
      <div className="w-full h-full bg-black rounded-md make-center">
        {text}
      </div>
    </div>
  );
};

const AccountDetails = ({ user, dispatch }) => {
  return (
    <div className="w-[90%] mx-auto md:w-[450px] ring-[1px] ring-gray-800 rounded-md  h-[500px]">
      <div className="text-[80px] w-max mt-[100px] mx-auto">
        <RiAccountCircleLine />
      </div>
      <p className="text-center mt-5">{user.username}</p>
      <p className="text-center mt-2">{user.email}</p>
      <div
        className="w-[250px] h-[40px] mx-auto mt-10 cursor-pointer"
        onClick={() => dispatch(cleatUser())}
      >
        <GradientBack text={"Logout"} />
      </div>
    </div>
  );
};

const SignupPage = ({ setemail, setUsername, setpasword, handleSignup }) => {
  return (
    <div className="w-[90%] mx-auto md:w-[450px] ring-[1px] ring-gray-800 rounded-md  h-[500px]">
      {/* form container starts  */}
      <div>
        <img src={instaimg} alt="" className="w-[120px] mx-auto my-10" />
        <form className="w-[80%] mx-auto">
          <input
            type="text"
            className="w-full h-[35px] rounded-md  bg-black ring-[1px] ring-gray-700 mb-8 px-2"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="w-full h-[35px] rounded-md  bg-black ring-[1px] ring-gray-700 mb-8 px-2"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            className="w-full h-[35px] rounded-md  bg-black ring-[1px] ring-gray-700 mb-8 px-2"
            placeholder="password"
            onChange={(e) => setpasword(e.target.value)}
          />
          <div
            className="w-[250px] h-[40px] mx-auto cursor-pointer"
            onClick={handleSignup}
          >
            <GradientBack text={"sign up"} />
          </div>
        </form>
      </div>
      {/* form container ends */}
    </div>
  );
};

export default Account;
