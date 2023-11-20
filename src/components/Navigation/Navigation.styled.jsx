import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrap = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

export const StyledNavigationLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.2s;

  &.active {
    color: red;
    background: grey;
    border: black;
  }
`;
