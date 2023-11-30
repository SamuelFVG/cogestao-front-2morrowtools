import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const StyledTools = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
  border-radius:5px;
  padding-top: 2.5rem;
  width:90%;
  margin:auto;
  font-size:22px;
  font-weight:400;

  & h1 {
    font-weight:400;
    font-size:50px;
    margin-bottom:0rem;
    @media (max-width: 768px) {
      font-size:30px;
      margin-bottom:1rem;
    }
  }
`;

export const StyledInput = styled.input` //Area de texto
  padding: 0.8rem;
  font-size: 1rem;
  margin:auto;
  width:100%;
  background-color:#080B10;
  border-radius:6px;
  border-color:white;
  color:#B4B4B4;
`;


export const StyledButton = styled.button` //Botao de Autenticação
    padding: 1rem;
    font-size: 1rem;
    text-align:center;
    background-color: #013C9D;
    color: white;
    width:15%;
    margin:auto;
    border-radius:6px;
    border:#013C9D;

    &:hover{
      background-color: #2E64BD;                      
    }
    
    @media (max-width: 768px) {
      min-width:80px;
    }
`;