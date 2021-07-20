import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar alt={displayName} src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <h3>
              {displayName}{" "}
              <span>
                {verified && <VerifiedUserIcon className="post-verification" />}
              </span>
              <span className="post-header-username"> @{username}</span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>{text}</p>
          </div>

          {image && <img src={image} alt="image/gif" />}
          <div className="post-footer">
            <InsertCommentOutlinedIcon
              fontSize="small"
              className="post-footer-icon"
            />
            <RepeatOutlinedIcon fontSize="small" className="post-footer-icon" />
            <FavoriteBorderOutlinedIcon
              fontSize="small"
              className="post-footer-icon"
            />
            <PublishOutlinedIcon
              fontSize="small"
              className="post-footer-icon"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
