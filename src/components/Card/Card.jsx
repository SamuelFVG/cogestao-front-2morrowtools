import Trash from "../../assets/trash.png";
import Edit from "../../assets/edit.png";
import { StyledCard, StyledCardHeader } from "./Styles.js"

export default function Card({tool}) {
  return (
    <>
    
    <StyledCard>
    
        <StyledCardHeader>
          <h2>{tool.name}</h2>
          <div>
            <img src= {Edit} />
            <img src= {Trash} />
          </div>
        </StyledCardHeader>
    
        <p>{tool.description}</p>
            <img src= {tool.imageUrl} />
    
      </StyledCard>    
       
    </>
  );
}
