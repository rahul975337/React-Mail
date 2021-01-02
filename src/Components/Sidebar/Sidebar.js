import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button className="sidebar_compose" startIcon={<Add fontSize="large" />}>
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={23} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={23} />
      <SidebarOption Icon={LabelImportant} title="Important" number={23} />
      <SidebarOption Icon={NearMe} title="Sent" number={23} />
      <SidebarOption Icon={Note} title="Drafts" number={23} />
      <SidebarOption Icon={ExpandMore} title="More" number={23} />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
