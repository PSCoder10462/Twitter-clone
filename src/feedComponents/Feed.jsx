import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import firebase from "../firebase";
import FlipMove from "react-flip-move";

const db = firebase.firestore();

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        // this data will be bubbled up as an array and passed into the setPosts function
        (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data()))
      );

    const obj = posts.sort().reverse();
    setPosts(obj);
  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed-header">
        <h1>Home</h1>
      </div>

      {/* tweet box */}
      <TweetBox />

      {/* posts */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
