import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  /* Nav CSS */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;

  .img_wrapper {
    height: 100%;
  }

  .img_wrapper img {
    height: 43px;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.bgBlack};
    font-family: ${theme.fonts.family.default};

    ul li a {
      color: ${theme.colors.white};
      text-decoration: none;
    }

    ul li a:hover {
      color: ${theme.colors.redColor};
    }

    .button {
      background-color: ${theme.colors.redColor};
      padding: 9px 26px;
    }

    .button a {
      text-decoration: none;
      font-weight: bolder;
      color: ${theme.colors.white};
    }
  `}

  ul {
    list-style: none;
    display: flex;
  }

  ul li {
    padding: 0.8rem;
  }
`;
