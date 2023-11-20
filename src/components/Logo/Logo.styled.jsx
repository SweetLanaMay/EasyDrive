import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogoLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
`;

export const LogoSvg = styled.svg`
  width: 22px;
  height: 22px;
  margin-right: 8px;
  `;

  export const LogoText = styled.h2`
  font-size: 20px;
  font-weight: 800;
  font-style: italic;
  line-height: 18px; 
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  `;