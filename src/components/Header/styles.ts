import styled from "styled-components";
import { colors } from "../../styles";

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
`

export const Button = styled.button`
    padding: 8px;
    margin-left: 15px;
    background-color: transparent;
    border: 1px solid ${colors.border};
    cursor: pointer;

`
