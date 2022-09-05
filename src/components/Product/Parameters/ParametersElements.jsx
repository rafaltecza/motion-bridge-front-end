import styled from "styled-components";

export const ParametersWrapperElement = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  &:focus {
    outline: 0;
  }
`;

export const ParametersCardElement = styled.div`
  background: white;
  width: 300px;
  display: inline-block;
  margin: auto;
  border-radius: 19px;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
`;

export const ParametersCardImage = styled.div`
  position: relative;
  height: 230px;
  margin-bottom: 35px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  
  &.style-0 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');
    img {
      width: 400px;
      position: absolute;
      top: -65px;
      left: -70px;
    }
  }

  &.style-1 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');
    img {
      width: 400px;
      position: absolute;
      top: -34px;
      left: -37px;
    }
  }

  &.style-2 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');
    img {
      width: 340px;
      position: absolute;
      top: -30px;
      left: -25px;
    }
  }

  &.style-3 {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');
    img {
      width: 340px;
      position: absolute;
      top: -30px;
      left: -25px;
    }
  }
`;

export const ParametersCardSubtitle = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 3px;

  &.style-0 {
    color: #EC9B3B;
  }

  &.style-1 {
    color: #EE5487;
  }

  &.style-2 {
    color: #F6901A;
  }

  &.style-3 {
    color: #82BB30;
  }
`

export const ParametersCardTitle = styled.div`
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
`

export const ParametersCardDescription = styled.div`
  padding: 20px;
  margin-bottom: 10px;
`

export const ParametersBottomLine = styled.div`
  color: white;
  height: 20px;
  font-weight: 700;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  &.style-0 {
    background: #EC9B3B;
  }

  &.style-1 {
    background: #EE5487;
  }

  &.style-2 {
    background: #F6901A;
  }

  &.style-3 {
    background: #82BB30;
  }
  
  &::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
`
