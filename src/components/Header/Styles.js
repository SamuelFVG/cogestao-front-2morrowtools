import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/styleVariables";
import { Menu } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  background-color: ${colors.blue.background};
  width: 100%;
  height: 85px;
  padding: 0 2%;
  font-size: 1.6rem;
  img {
    width: 12rem;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
    img {
      width: 10rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    img {
      width: 10rem;
    }
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    img {
      width: 8rem;
    }
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: left;
  gap: 30px;
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  height: 60px;
  border: 1px solid;
  border-radius: 3px;
  color: white;
  background-color: transparent;
  font-family: ${fonts.Exo2};
  font-size: 1.2rem;
  font-weight: 400;
  word-wrap: break-word;
  &:hover {
    background-color: ${colors.white};
    color: black;
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 10rem;
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 10rem;
    height: 40px;
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;

export const ToolsButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  height: 60px;
  border: 1px solid;
  border-radius: 3px;
  color: white;
  background-color: transparent;
  font-family: ${fonts.Exo2};
  font-size: 1.2rem;
  font-weight: 400;
  word-wrap: break-word;
  &:hover {
    background-color: ${colors.white};
    color: black;
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 10rem;
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 10rem;
    height: 40px;
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;

export const ContainerMenuHeader = styled(Menu)`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
