import React from 'react';
import { StyledBurger } from './styles';
import { bool, func } from 'prop-types';

export interface BurgerProps {
  open: boolean,
  setOpen: Function,
}

export const Burger: React.FC<BurgerProps> = ({ open, setOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};