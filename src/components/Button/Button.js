import styled from '@emotion/styled'
import { NavLink as Link} from 'react-router-dom';


export const Button = styled.button`
  background-color: #0984e3;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  margin:0 auto;
  display:block;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  &:hover {
    background-color: #74b9ff;
`;