import "./CardsButtons.css";
import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
function CardsButton() {
  return (
    <div className="cardsButtons">
      <IconButton className="cardsButtons__repaly">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="cardsButtons__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="cardsButtons__star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="cardsButtons__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="cardsButtons__falsh">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default CardsButton;
