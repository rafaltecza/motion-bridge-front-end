import styled from "styled-components";

export const PictureListItemElement = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  &:checked {
    outline: 2px solid #f00;
  }


`;
