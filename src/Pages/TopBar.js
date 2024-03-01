import React from "react";
import "../CSS/TopBar.css";
import Profile from "./Profile";
import Navigation from "./Navigation";
import Logout from "./Logout";
import MenuIcon from "@rsuite/icons/Menu";
import { Drawer, ButtonToolbar, Button } from "rsuite";

function TopBar() {
  const MenuUIcon = ({ size }) => (
    <MenuIcon style={{ fontSize: size, marginRight: 10, color: "white" }} />
  );
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };

  return (
    <div className="topbar-body">
      <div className="logo">
        <img src="images/logo.png" alt="logo"></img>
      </div>
      <div className="topbar-body-box">
        <div className="search-box">Search</div>
      </div>
      <div>
        <ButtonToolbar className="menu-btn">
          <Button onClick={() => handleOpen("300px")}>
            <span>
              <MenuUIcon size="30px" />
            </span>
          </Button>
        </ButtonToolbar>

        <Drawer
          size={size}
          open={open}
          onClose={() => setOpen(false)}
          placement="left"
        >
          <Drawer.Body>
            <Profile />
            <Navigation />
            <Logout />
            <div className="search-box search-box-drawer">Search</div>
          </Drawer.Body>
        </Drawer>
      </div>
    </div>
  );
}

export default TopBar;
