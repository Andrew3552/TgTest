import { useState } from "react";
import BG from "../../assets/BG.png";
import Button from "../Button/Button";
import Confetti from 'react-confetti';
import "./style.scss";

export default function RootComponents() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 15000);
  };
  return (
    <div className="rootComponents">
      {showConfetti && <Confetti />}
      <p className="hello">Hello my sweet girl</p>
      <img className="BG" src={BG} alt="BG" />
      <div className="buttons__container">
        <Button onClick={handleConfetti} name={'Confetti'}>НЯМ НЯМ</Button>
      </div>
    </div>
  );
}
