import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f0f0f0;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Logo = styled("img")`
  width: 230px;
`;
