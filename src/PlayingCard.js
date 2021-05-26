import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from './hooks';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, setIsFlipped] = useFlip();

  return (
    <img
      src={isFlipped ? back : front}
      alt="playing card"
      onClick={setIsFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
