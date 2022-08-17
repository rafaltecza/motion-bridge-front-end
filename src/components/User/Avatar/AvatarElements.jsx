import {styled} from "@mui/material/styles";
import {Avatar} from "@mui/material";

export const AvatarElement = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  border: 2px solid snow;
  font-size: 1.2rem;
  
  &.small {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }

  &.large {
    width: 16rem;
    height: 16rem;
    font-size: 6rem;
    border: 5px solid snow;

  }
`;