import styled from "styled-components";
import Card from "../../Card";

export const CheckoutItemCardElement = styled(Card)`
  margin-top: 1rem;
  
    &:first-child {
        margin-top: 0;
    }
  
  color: rgba(255,255,255,.55);
  animation: fadeInFromBottom .3s ease-in-out;

  :hover {
    background-color: rgba(255,255,255,.75);
  }

  &.active {
    background-color: #fff;
  }
  
  @keyframes fadeInFromBottom {
    from {
      opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }
`