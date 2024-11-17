import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HeaderContainer = styled.header`
width: 100%;
background-color: ${colors.backgroundHeader};
height: 92px;
display: flex;
align-items: center;

>div{
display: flex;
justify-content: space-between;
align-items: center;
}

@media (max-width: ${breakpoints.mobile}){
    height: auto;
    >div{
        padding: 20px;
        flex-direction: column;
    }
}
`

export const Button = styled.button`
    padding: 8px;
    margin-left: 15px;
    background-color: ${colors.searchBackground};
    border: 2px solid ${colors.border};
    cursor: pointer;

    &.add{
        color: green;
        border-color: green;
        &:hover{
            background-color: green;
            color: white;  
        }
    }

    &.remove{
        color: red;
        border-color: red;
        &:hover{
            background-color: red;
            color: white;
        }
    }

    @media (max-width: ${breakpoints.mobile}){
        margin: 16px auto 0;

        &.add{
            margin-right: 16px;
        }
    }
`
