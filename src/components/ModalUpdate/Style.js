import styled from "styled-components";

export const Modalbackground = styled.div`
  width: 388px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  border-radius: 8px;
  background-color: #1f1f1f;
`;

export const ModalText = styled.div`
  font-family: "Exo 2", sans-serif;
  font-size: 15px;
  align-self: flex-start;
  color: #b4b4b4;
  margin-left: 30px;
`;

export const ModalInput = styled.input`
  border-color: #fff;
  font-size: 15px;
  background-color: #1f1f1f;
  color: #fff;
  font-family: "Exo 2", sans-serif;
  margin-left: 30px;
  margin-right: auto;
  width: 80%;
  margin-bottom: 15px;
  height: 30px;
  border-radius: 4px;
`;

export const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 70px;
  font-size: 30px;
  font-family: "Exo 2", sans-serif;
`;

export const ButtonUpdate = styled.button`
  background: #013c9d;
  text-align: center;
  font-family: "Exo 2", sans-serif;
  color: #fff;
  width: 100px;
  height: 30px;
  margin-left: 140px;
  margin-right: auto;
  margin-top: 15px;
`;
export const Form = styled.form``;

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
