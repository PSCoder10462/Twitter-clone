import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import firebase from "../../firebase";

const db = firebase.firestore();

function TweetBox() {
  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImange] = useState("");

  const tweet = (e) => {
    e.preventDefault();
    const postPushed = {
      displayName: "Parv Sharma",
      username: "pscoder10462",
      verified: true,
      text: tweetText,
      image: tweetImage,
      avatar: "mypic.jpg",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("posts").add(postPushed);
    setTweetText("");
    setTweetImange("");
  };

  return (
    <div className="tweet-box">
      <form onSubmit={tweet}>
        <div className="tweet-input">
          <Avatar alt="PS" src="userpic.jpg" className="feed-avatar" />
          <textarea
            type="text"
            placeholder="What's happening?"
            className="tweetbox-input"
            name="tweetText"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            required
          />
        </div>
        <textarea
          type="text"
          placeholder="optional: Image/GIF"
          className="tweetbox-input tweetbox-img-url"
          name="image-url"
          value={tweetImage}
          onChange={(e) => setTweetImange(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className="tweetbox-btn"
          type="submit"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
