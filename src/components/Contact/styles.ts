import styled from "styled-components";
import { colors } from "../../styles";

export const ContactsSection = styled.div`
width: 100%;
height: 80px;
border-bottom: 1px solid ${colors.border};
display: flex;
align-items: center;

button{
    border: none;
    cursor: pointer;
    background-color: transparent;
    img{
        width: 24px;
        height: 24px;
        object-fit: cover;
    }
}

`
export const Row = styled.div`
display: flex;
position: relative;
justify-content: flex-start;
align-items: center;
width: 1024px;
max-width: 90vw;
margin: auto;

>div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    button{
        margin-right: 20px;
    }
}

`
export const Infos = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
max-width: 400px;
margin-left: 30px;
text-align: left;
text-transform: capitalize;


h4{
    font-size: 18px;
    font-weight: bold;
}
`

export const DivImage = styled.div`
    font-size: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
`

export const MenuButtons = styled.div`
position: absolute;
right: 0%;

`
