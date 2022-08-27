import styled from "styled-components";
import {Card} from "@material-ui/core";

export const CardElement = styled(Card)`
  &.MuiPaper-root {
    border: none;
    border-radius: 5px !important;
    z-index: 0;
    background-color: rgba(21, 21, 21, .9);
    color: snow;

    div {
      color: snow;
    }
  }
`;
