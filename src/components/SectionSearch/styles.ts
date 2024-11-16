import styled from "styled-components";
import { colors } from "../../styles";

export const Section = styled.section`
height: 96px;
background-color: ${colors.searchBackground};
width: 100%;


>div{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
}
`

export const Input = styled.input`
padding:10px;
width: 100%;
border-radius: 10px;
border: none;
height: 40px;
`

export const Button = styled.button`
flex: 1;
border-radius: 100%;
max-width: 40px;
height: 40px;
border: 1px solid ${colors.border};
`