import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Rightpane.css"
import {Link} from 'react-router-dom'
 const SettingsMenu = () => {
     const [anchorEl, setAnchorEl] = React.useState(null);
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
         <SettingsIcon
           aria-controls="settings-menu"
           aria-haspopup="true"
           onClick={handleClick}
           fontSize="inherit"
         >
           Open Menu
         </SettingsIcon>
         <Menu
           id="settings-menu"
           anchorEl={anchorEl}
           keepMounted
           open={Boolean(anchorEl)}
           onClose={handleClose}
         >
           <MenuItem onClick={handleClose}>
             {" "}
             <Link id="about" to="/aboutus">
               <Button> About Us</Button>
             </Link>
           </MenuItem>
           <MenuItem onClick={handleClose}>
             <GoogleLogout
               clientId={process.env.REACT_APP_CLIENT_ID}
               render={(renderProps) => (
                 <Button
                   onClick={renderProps.onClick}
                   disabled={renderProps.disabled}
                 >
                   Log Out
                 </Button>
               )}
               buttonText="Logout"
               onLogoutSuccess={handleSignOut}
             ></GoogleLogout>
           </MenuItem>
         </Menu>
       </div>
     );
 }
  
 export default SettingsMenu;