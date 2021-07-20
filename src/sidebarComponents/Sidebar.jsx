// react
import React from "react";

// icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import { Button } from "@material-ui/core";
// components
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

// main function
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon
        className="twitter-icon"
        // style={{ transform: "scale(1.3)" }}
      />

      {/* Sidebar Options */}
      <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        text="Notifications"
      />
      <SidebarOption Icon={EmailOutlinedIcon} text="Messages" />
      <SidebarOption Icon={TurnedInNotOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

      <Button
        variant="contained"
        color="primary"
        className="sidebar-tweet-btn"
        fullWidth
        disableRipple
      >
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
