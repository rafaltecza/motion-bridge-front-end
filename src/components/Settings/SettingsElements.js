import {alpha, styled} from "@mui/material/styles";
import MuiLink from '@mui/material/Link';
import { NavLink as Link } from 'react-router-dom';
import Menu from "@mui/material/Menu";
import * as React from "react";

export const SettingsLink = styled(MuiLink)`
  font-family: "Poppins", sans-serif;
  color: rgba(255,255,255,.55);
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;

  :hover {
    color: rgba(255,255,255,.75); !important;
  }

  &.active {
    color: #fff;
  }
`;

export const MenuLink = styled(Link)`
  color: rgba(0,0,0,0.7);
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  height: 100%;
  margin: 0 10px;
  cursor: pointer;

  :hover {
    color: rgba(0,0,0,0.2); !important;
  }
`;

export const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))
(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

