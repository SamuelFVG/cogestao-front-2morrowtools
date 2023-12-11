import styled from "styled-components";

export const Modalbackground = styled.div`
  width: 488px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 258px;
  border-radius: 8px;
  background-color: #1f1f1f;
`;

export const ModalInterior = styled.div`
  text-align: center;
  font-family: "Exo 2", sans-serif;
  font-size: 15px;
  color: #b4b4b4;
  margin-bottom: 50px;
`;

export const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 70px;
  font-size: 30px;
  font-family: "Exo 2", sans-serif;
`;

export const ButtonDelete = styled.button`
  background: #013c9d;
  text-align: center;
  font-family: "Exo 2", sans-serif;
  color: #fff;
  width: 100px;
  height: 30px;
  margin-left: 194px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  cursor: pointer;
  background: none;
  border: none;
  color: #555;
`;
