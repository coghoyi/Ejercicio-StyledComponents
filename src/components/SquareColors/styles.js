import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: red;
    width: 200px;
    height: 200px;
`;

const StyledButton = styled.button`
    padding: 2rem;
    cursor: pointer;
    background-color: ${props =>(props.active ? 'red' : 'green')};
`;

export {StyledDiv, StyledButton};