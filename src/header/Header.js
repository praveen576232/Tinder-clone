import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import FourmIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({backbutton}) {
  const history = useHistory();
  return (
    <div className="header">
      {
        backbutton ? (
          <IconButton onClick={()=>{history.replace(backbutton)}}>
          <ArrowBackIosIcon  fontSize="large"/>
        </IconButton>
        ) :(
          <IconButton>
          <PersonIcon  fontSize="large"/>
        </IconButton>
        )
      }
     
      <Link to="/">
      <img
        alt=""
        className="header_tinder_logo"
        src="https://cdn.iconscout.com/icon/free/png-256/tinder-7-226557.png"
      ></img>
      </Link>
      <Link to="/charts">
      
      <IconButton>
        <FourmIcon fontSize="large"/>
      </IconButton>
      </Link>
    </div>
  );
}

export default Header;
