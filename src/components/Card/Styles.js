import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  margin-inline:auto;
  width: 40%;
  color:#828282;

  & img {
    max-width:100%;
    max-height:300px;
    @media (max-width: 768px) {
      max-height:200px;
    }
  }
    @media (max-width: 768px) {
      width:60%;
    }
`;

export const StyledCardHeader = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

  & h2 {
    font-size:18px;
    margin:auto 0;
    color:white;
    @media (max-width: 768px) {
      font-size:15px;
    }
  }
  & img {
    width:20px;
    height:20px;
    margin:10px;
    @media (max-width: 768px) {
      margin:5px;
    }
  }
`;