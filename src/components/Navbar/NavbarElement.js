import styled from '@emotion/styled'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

export const IconContainer = styled.div`
  display: none;
 
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Bars = styled(FaBars)`
  color: #fff;
`;
export const Times = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
`;
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
`;


export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: end;
`;