import styled from "styled-components";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const BasketIconElement = styled(ShoppingBasketIcon)`
  color: rgba(255,255,255,.55);
  
  :hover {
    color: rgba(255,255,255,.75);
  }

  &.active {
    color: #fff;
  }
`

export const BasketElement = styled.span`
  cursor: pointer;
  display: block;
  width: .9rem;
  height: .9rem;
  border-radius: 50%;
  background-color: #DC3545;
  position: absolute;
  bottom: -4px;
  right: -4px;
  font-size: .6rem;
  color: rgba(255, 255, 255, .95);
  text-align: center;
  font-weight: bold;
  line-height: 0.80rem;
  border: 1.55px solid rgba(255, 255, 255, .55);

  :hover {
    color: rgba(255, 255, 255, .75);
    border: 1.25px solid rgba(255, 255, 255, .75);
  }

  &.active {
    color: #fff;
  }

`;