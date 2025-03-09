import React from "react";

interface PrimaryButtonProps {
  handleClick: () => void;
  text: string;
  children?: React.ReactNode;
}

function Button({ handleClick, text, children }: PrimaryButtonProps) {
  return (
    <button onClick={handleClick} className="flex justify-center items-center">
      {children}
      {text}
    </button>
  );
}

export default Button;