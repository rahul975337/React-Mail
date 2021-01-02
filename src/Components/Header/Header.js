import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <Search />

        <input type="text" placeholder="Search Mail" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar src="https://miro.medium.com/focal/1200/1200/48/51/1*k-B13-IWqjtFx09A9LKTkg.jpeg" />
      </div>
    </div>
  );
}

export default Header;
