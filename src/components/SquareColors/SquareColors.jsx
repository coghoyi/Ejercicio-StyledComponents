import { useState } from "react";
import { StyledButton, StyledDiv } from "./styles";


const SquareColors = ()=> {

    const [active, setActive] = useState(true);

    return (

        <StyledDiv>
            <StyledButton
            onClick={()=>changeColor(active, setActive)}
            active={active}
            > Click</StyledButton>
        </StyledDiv>
    )
};

const changeColor = (active, setActive) =>{
    setActive(!active)
}

export default SquareColors;