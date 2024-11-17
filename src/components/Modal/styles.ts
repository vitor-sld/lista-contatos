import styled from "styled-components"
import { breakpoints, colors } from "../../styles"
import InputMask from 'react-input-mask'

export const Modal = styled.div`
display: none;
position: fixed;
top: 0%;
left: 0%;
width: 100vw;
height: 100vh;
z-index: 1;

&.is-visible{
    display: block ;
}
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(2px);

`

export const ContainerModal = styled.div`
    position: absolute;
    left: calc(50vw - 820px / 2);
    top: 25%;
    width: 820px;
    height: 450px;
    background-color: white;
    z-index: 1;
    padding: 30px;

    h3{
        margin-bottom: 30px;
        text-align: center;
        font-size: 26px;
    }
    >form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px 40px;
    }
    @media (max-width: ${breakpoints.mobile}){
        top: 100px;
        left: 0;
        width: 90vw;
        left: 5vw;
        height: auto;

        >form{
            grid-template-columns: 1fr;
        }
    }
`

export const InputGroup = styled.div`
.input{
    width: 100%;
    padding: 8px 16px;
}
`

export const Label = styled.label`
display: block;
font-size: 16px;
font-weight: bold;
margin-bottom: 5px;
`
export const Input = styled.input`
width: 100%;
padding: 8px 16px;
`

export const InputColor = styled.input`
width: 100%;
height: 42px;
`

export const ButtonGroup = styled.div`
display: flex;

position: absolute;
right: 30px;
bottom: 30px;
width: 300px;

@media (max-width: ${breakpoints.mobile}){
    position: static;
    display: block;

}
`

export const ButtonModal = styled.button`
padding: 8px;
margin-left: 15px;
background-color: transparent;
border: 1px solid ${colors.border};
cursor: pointer;
margin: 0;
width: 100%;
display: block;
transition: .5s ease;

@media (max-width: ${breakpoints.mobile}){
    margin-top: 30px;
    margin-bottom: 10px;
}

&.submit{
    border: 1px solid rgb(64,199,61);
    color: rgb(64,199,61);
    font-weight: bold;
    margin-right: 16px;
    
    &:hover{
    background-color: green;
    color: white;
}
}
&.cancel{
    border: 1px solid red;
    color: red;
    font-weight: bold;
&:hover{
    background-color: red;
    color: white;
}
}
`