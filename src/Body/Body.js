import React from "react";
import "./Body.css";

function Body() {
  console.log("my app componnent js place");
  return (
    <div className="my_app_container">
      <h2 className="body_title">my first component</h2>
      <div className="body_image_container">
        <img
          src={
            "https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          }
          className="body_image"
          alt="laptop"
        />
      </div>
    </div>
  );
}

export default Body;
