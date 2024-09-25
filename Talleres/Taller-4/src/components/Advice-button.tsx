import React, { FC } from 'react';
import IconDice from '../assets/icon-dice.svg';
import '../assets/styles/advice-button.styles.css';
interface AdviceButtonProps {
  handleNewAdvice: () => void;
  loading: boolean;
}

export const AdviceButton: FC<AdviceButtonProps> = ({
  handleNewAdvice,
  loading,
}) => {
  return (
    <button
      onClick={handleNewAdvice}
      disabled={loading}
      className="advice__button"
    >
      <img src={IconDice} alt="advice__icon" />
    </button>
  );
};
