import React, { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { SaveSvg } from "./Home";
import { IoMdClose } from "react-icons/io";
import { GradientBack } from "./Account";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../Redux/CommentsSlice";

const Comments = ({ post, setOpenComment }) => {
  const [comment, setComment] = useState("");
  const comments = useSelector((state) => state.Comments.comments);
  const commentArr = comments.filter((comment) => comment.userId === post.id);
  const dispatch = useDispatch();
  const handleAddComment = () => {
    try {
      dispatch(
        addComments({ comment: comment, id: Date.now(), userId: post.id })
      );
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-screen h-[100dvh] bg-black/90 fixed top-0 z-[9999999] make-center left-0 ">
      <div className="w-full md:w-[90%] lg:w-[80%] min-h-screen md:min-h-[80vh] rounded-md ring-[1px] ring-gray-700 flex flex-col md:flex-row">
        <img
          src={post.imgUrl}
          alt=""
          className="md:w-[40%] w-full h-[350px] md:min-h-[80vh]"
        />

        {/* //caption container starts  */}
        <div className="md:w-[60%] w-full relative px-5 flex flex-col items-center justify-between">
          <div className="flex justify-between items-center w-full p-3 mt-4">
            <div className="text-[25px] flex gap-5 cursor-pointer">
              <FaRegHeart />
              <FiMessageCircle />
              <IoPaperPlaneOutline />
            </div>
            <div>
              <SaveSvg />
            </div>
          </div>
          <p className="text-[15px] mt-2">{post.caption}</p>{" "}
          <div className="flex-grow w-full">
            <h3 className="font-[600] mb-1 mt-3">comments</h3>
            {commentArr.map((comment, index) => {
              return (
                <div
                  className="w-full min-h-[50px] p-2 text-[14px] bg-white/10 rounded-md mb-2"
                  key={index}
                >
                  <h3 className="font-[600] mb-1">username</h3>
                  <div>{comment.comment}</div>
                </div>
              );
            })}
          </div>
          <div className="md:static fixed bottom-0 w-full flex gap-1 md:pb-2">
            <textarea
              placeholder="add comments"
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-black ring-[1px] ring-gray-700 h-[50px] outline-none p-2 resize-none rounded-lg w-[80%]"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="h-[50px] w-[20%]" onClick={handleAddComment}>
              <GradientBack text={<IoMdAdd />} />
            </div>
          </div>
        </div>
        {/* //caption container ends */}
      </div>
      <div
        className="absolute top-5 right-5 text-[30px]"
        onClick={() => setOpenComment(false)}
      >
        <IoMdClose />
      </div>
    </div>
  );
};

export default Comments;
