import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'



export const SliderContent = styled.label`
  text-shadow: 1px 1px rgba(0, 0, 0, 15%);
  font-family: Poppins;
  font-weight: 150;
`;

export const SliderSlide = styled.div`
  width: 100%;
  height: 90vh;
  
  &.slide-color-1 {
    background-color: #fbb034;
    background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);

  }

  &.slide-color-2 {
    background-color: #84fb95;
    background-image: linear-gradient(315deg, #84fb95 0%, #cef576 74%);
  }
  
  &.slide-color-3 {
    background-color: #f8ceec;
    background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%);
  }
`;

export const SliderTitle = styled.h1`
  text-shadow: 2px 2px rgb(0 0 0 / 15%);
  font-family: Poppins, serif;
`;