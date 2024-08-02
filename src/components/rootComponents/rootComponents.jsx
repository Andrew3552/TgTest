import React from "react";
import BG from "../../assets/BG.png";
import Button from "../Button/Button";
import "./style.scss";

export default function rootComponents() {
  return (
    <div className="rootComponents">
      <p>hello</p>
      <img className="BG" src={BG} alt="BG" />
      <div>
        <Button />
        <Button />
      </div>
    </div>
  );
}
