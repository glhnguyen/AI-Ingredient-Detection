import React, { PropsWithChildren } from "react";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: PropsWithChildren<ButtonProps>) => {
  return <button>{text}</button>;
};
