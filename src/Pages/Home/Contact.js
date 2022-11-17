import React from "react";
import login from "../../assets/images/bg.png"
const contact = () => {
  return (
    <div
    style={{
        background:`url(${login})`
    }}
     className="my-24 p-6">
      <div>
        <h2 className="text-xl text-center">Contact Us</h2>
        <h2 className="text-3xl text-center">Stay connected with us</h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs"
        />
        <textarea
          className="textarea textarea-accent input-bordered input-md w-full max-w-xs"
          placeholder="Bio"
        ></textarea>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default contact;
