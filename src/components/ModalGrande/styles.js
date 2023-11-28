import React from "react";
import styled from "styled-components";

export const Modalbackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalInterior = styled.div`
  justify-content: space-between 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 550px;
  border-radius: 40px;
  background: #1f1f1f;
  color: #fff;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;

  > svg {
    cursor: pointer;
    position: fixed;
    margin-left: 90%;
    margin-top: 5px;
    color: #444444;
  }
`;
export const BotaoConfirma = styled.button`
  width: 155px;
  height: 40px;
  margin-top: 0px;
  border-radius: 10px;
  border: solid black;
  color: #fff;
  font-family: Exo 2;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  line-height: normal;
  background: #013c9d;
  margin-right: 50%;
`;
export const Line = styled.div`
  width: 100%;
  height: 3vh;
  margin-top: 30px;
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: Exo 2;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
