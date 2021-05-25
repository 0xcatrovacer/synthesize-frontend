import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import DehazeOutlinedIcon from "@material-ui/icons/DehazeOutlined";
import "./Rightpane.css"
import { Link } from 'react-router-dom'
const SettingsMenu = () => {
  const [anchorEl, setAnchorEl] = useState();
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="settingsButton" style={{ color: "white" }}>
      < DehazeOutlinedIcon
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
        fontSize="inherit"
      />
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link id="about" to="/aboutus" style={{
            textDecoration: 'none',
            color: 'black'
          }}>
            <div> About Us</div>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <GoogleLogout
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <div
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Log Out
              </div>
            )}
            buttonText="Logout"
            onLogoutSuccess={handleSignOut}
          />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SettingsMenu;