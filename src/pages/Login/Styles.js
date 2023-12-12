import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 900px;
`;

export const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-left: 3%;
  font-size: 50px;
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 3%;
`;

export const Input = styled.div`
  display: flex;
  margin-left: 3%;
  margin-top: 5px;
  border-radius: 6px;
  border: 2px solid #fff;
  height: 50px;
  width: 90%;
  padding-left: 20px;
  align-items: center;
`;

export const DivSaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const SaveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 56.114px;
  border-radius: 6px;
  background: #013c9d;
  cursor: pointer;
  font-family: Exo 2;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
