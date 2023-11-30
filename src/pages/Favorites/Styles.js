import styled from "styled-components";
import { colors } from "../../styles/styleVariables";
import { Button, Input } from "antd";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
`;
export const FormInput = styled(Input)`
  ::placeholder {
    color: ${colors.grey.formtext};
  }
  background-color: ${colors.blue.background};
  color: ${colors.grey.formtext};
`;
export const Title1 = styled.div`
  font-size: 50px;
`;
export const Firstpart = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
`;
export const ButtonSalvar = styled(Button)`
  width: 8rem;
  height: 3;
  border-radius: 0;
  border-color: ${colors.blue.accent};
  /* font-size: 24px; */
  background-color: ${colors.blue.accent};
  color: ${colors.white};
`;
export const DivCentralizar = styled.div`
  justify-content: center;
  display: flex;
  /* align-items: center; */
`;

export const SecondPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding-top: 4rem;
  justify-content: center;
  align-items: center;
`;

export const Title2 = styled.div`
  font-size: 30px;
`;

export const ThirdPart = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title3 = styled.div`
  justify-content: space-between;
  padding-top: 1rem;
  font-size: 20px;
  display: flex;
`;

export const Title4 = styled.div`
  font-size: 20px;
  padding-top: 1rem;
  color: ${colors.grey.formtext};
  padding-bottom: 1rem;
`;

export const Espaçamento = styled.div`
  justify-content: space-between;
  display: flex;
  width: 4rem;
`;
