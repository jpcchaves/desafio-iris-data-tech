import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.default};
  `}
`;
