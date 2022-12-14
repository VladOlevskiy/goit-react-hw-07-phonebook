import styled from 'styled-components';
import { NavLink as Nav } from 'react-router-dom';

export const NavLink = styled(Nav)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;
