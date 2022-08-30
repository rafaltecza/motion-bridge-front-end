import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'


export const SliderNavigation = styled.div`
  margin-top: 1rem;
  float: right;
`;

export const SliderContent = styled.label`
  text-shadow: 1px 1px rgba(0, 0, 0, 15%);
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;

`;

export const SliderSlide = styled.div`
  width: 100%;
  height: 90vh;

  &.slide-color-1 {
    //background-image: linear-gradient(315deg, rgba(251, 176, 52, 0.7) 0%, rgba(255, 221, 0, 0.7) 74%);
    background-image: linear-gradient(120deg, rgb(255 175 43 / 12%) 0%, rgb(149 7 255 / 86%) 74%)
  }

  &.slide-color-2 {
    background-image: linear-gradient(120deg,rgb(255 175 43 / 12%) 0%,rgb(162 58 81 / 86%) 74%);
  }

  &.slide-color-3 {
    background-color: #f8ceec;
    background-image: linear-gradient(315deg, #f8ceec 0%, #a88beb 74%);
  }
`;

export const SliderTitle = styled.h1`
  text-shadow: 2px 2px rgb(0 0 0 / 15%);
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 7vh;

`;

export const SliderIcon = styled.div`
  animation: jump-arrow 2.5s infinite;
  bottom: 8vh;
  z-index: 10;
  color: #ffffff;
  display: block;
  font-size: 2.5em;
  height: 1.5em;
  left: 50%;
  line-height: 1.5em;
  position: absolute;
  text-align: center;
  transform: translatex(-50%);
  width: 1.5em;

  
  
`;
