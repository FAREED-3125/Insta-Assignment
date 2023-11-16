import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="resCont mt-[60px] md:mt-0 min-h-[100vh]">
        <Outlet />
      </div>
    </>
  );
};

export default Homepage;
