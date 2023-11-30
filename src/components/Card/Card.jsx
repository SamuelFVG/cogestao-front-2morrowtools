import Trash from "../../assets/trash.png";
import Edit from "../../assets/edit.png";
import Tech from "../../assets/tech.jpeg";
import Tech2 from "../../assets/tech2.png";
import { StyledCard, StyledCardHeader } from "./Styles.js"

export default function Card() {
  return (
    <>
    
    <StyledCard>
        <StyledCardHeader>
          <h2>Teste da ferramenta 1</h2>
          <div>
            <img src= {Edit} />
            <img src= {Trash} />
          </div>
        </StyledCardHeader>
        <p>Aqui vai ficar a descrição curta da ferramenta</p>
            <img src= {Tech} />
      </StyledCard>    

    <StyledCard>
        <StyledCardHeader>
          <h2>Teste da ferramenta 2</h2>
          <div>
            <img src= {Edit} />
            <img src= {Trash} />
          </div>
        </StyledCardHeader>
        <p>Aqui vai ficar a descrição curta da ferramenta</p>
            <img src= {Tech2} />
      </StyledCard>
    
    
    </>
  );
}
