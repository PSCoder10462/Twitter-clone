import React from "react";
import "./Widgets.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-searchbar">
        <SearchOutlinedIcon className="widgets-searchicon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets-container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1319735993591861248"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="narendramodi"
          options={{ height: 400 }}
        />
        <br />
        <TwitterShareButton
          url={"https://www.youtube.com/channel/UCy4sjjEft0NnODVC29o6Ozw"}
          options={{ text: "#cloningWithReact", via: "ParvSha10281306" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
