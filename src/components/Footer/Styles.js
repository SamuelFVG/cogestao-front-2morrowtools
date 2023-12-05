import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/styleVariables";
import { Menu } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  position: fixed;
  z-index: 1;
  background-color: ${colors.blue.background};
  width: 100%;
  height: 294px;
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


export const ContainerMenuFooter = styled(Menu)`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
