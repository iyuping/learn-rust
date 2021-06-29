import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ onClick, children }: Props) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);
