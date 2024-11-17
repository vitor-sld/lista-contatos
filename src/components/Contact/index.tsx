import { useDispatch, useSelector } from "react-redux"

import { modalEditOpen, remove } from "../../store/reducers/contatos"
import { RootReducer } from "../../store"

import edit from '../../Assets/img/edit.png'
import removeIcon from '../../Assets/img/remove.png'


import * as S from "./styles"

type Props = {
    name: string
    initialName: string
    surname?: string
    number: string
    color: string
    email: string,
    id: string
}
type Contato = {
    name: string,
    surname: string,
    number: string,
    email: string,
    color: string,
    id: string
}

const Contact = ({ name, initialName, surname, number, color, email, id }: Props) => {
    
    const { isRemoveActive } = useSelector((state:RootReducer) => state.contatos)
    const dispatch = useDispatch()


    const menuEdit = (nameContact: string, surnameContact: string, numberContact: string,emailContact: string, colorContact: string, idContact: string) => {
const contact = {
    name: nameContact,
    surname: surnameContact,
    number: numberContact,
    email: emailContact,
    color: colorContact,
    id: idContact
}

dispatch(modalEditOpen(contact))
    }

    return (
        <>
            <S.ContactsSection title={name ? (`${name}`) : 'Contato'}>
                <S.Row >
                    <div>{isRemoveActive && (
                        <button onClick={()=> dispatch(remove(id))}><img src={removeIcon} alt='Remover usuário' width={'24px'} /> </button>

                    )}
                        <S.DivImage style={{ backgroundColor: `${color}`, color: `${color === '#000000' ? color = '#FFF' : '#00000'}` }}> {initialName}</S.DivImage>
                    </div>
                    <S.Infos>
                        <h4>{name} {surname ? (<span>({surname})</span>) : ''}</h4>
                        {number ? (
                            <span>{number}</span>
                        ) : (<span>{email}</span>)} 
                    </S.Infos>
                    <S.MenuButtons>
                        <button onClick={() => menuEdit(name, surname || '', number, email || '', color, id)}><img src={edit} alt='editar contato'/></button>

                    </S.MenuButtons>
                </S.Row>
            </S.ContactsSection>
        </>
    )
}

export default Contact