import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

import { add, edit, modalClose } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

import * as S from './styles'


const Modal = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [color, setColor] = useState('#000000')

    const { contatos, editContact,isOpen } = useSelector((state: RootReducer)=> state.contatos)

    const dispatch = useDispatch()

    const registerContact = (name: string, surname: string, number: string, email: string, color: string) => {
        
        name = name.toLowerCase()
        surname = surname.toLowerCase()
        
        dispatch(add({
            name, surname, number, email, color,
            id: `${contatos.length + 1}`
        }))
    }

    const editFunction = (name: string, surname: string, number: string, email: string, color: string) => {
        name = name.toLowerCase()
        surname = surname.toLowerCase()

        dispatch(edit({
            name, surname, number, email, color,
            id: `${editContact!.id}`
        }))
    }

    useEffect(() => { 
        if (editContact !== null) {
            setName(editContact.name)
            setSurname(editContact.surname ? editContact.surname : '')
            setPhoneNumber(editContact.number)
            setEmail(editContact.email ? editContact.email : '')
            setColor(editContact.color ? editContact.color : '#000000')
        }
    
    }, [editContact])

    


    return (
        <S.Modal className={isOpen ? 'is-visible' : ''}>
            <S.ContainerModal>
                <h3>{editContact ? 'Editar Contato' : 'Registrar novo contato'}</h3>
                <form>
                    <S.InputGroup>
                        <S.Label htmlFor="name">Nome*</S.Label>
                        <S.Input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
                    </S.InputGroup>
                    <S.InputGroup >
                        <S.Label htmlFor="surname">Apelido</S.Label>
                        <S.Input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label htmlFor="phoneNumber">Número*</S.Label>
                        <InputMask className='input' type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} mask='99 99999-9999' />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>Email</S.Label>
                        <S.Input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </S.InputGroup>
                    <S.InputGroup>
                        <S.Label>Cor do contato</S.Label>
                        <S.InputColor type="color" required value={color} onChange={(e) => setColor(e.target.value)} />
                    </S.InputGroup>
                </form>
                <S.ButtonGroup>
                    {editContact ? (
                        <S.ButtonModal type='button' className="submit" onClick={() => editFunction(name, surname, phoneNumber, email, color)}>Editar</S.ButtonModal>
                    ) : (
                        <S.ButtonModal type='button' className="submit" onClick={() => registerContact(name, surname, phoneNumber, email, color)}>Confirmar</S.ButtonModal>
                    )}
                    <S.ButtonModal type='button' className="cancel" onClick={() => dispatch(modalClose())}>Cancelar</S.ButtonModal>
                </S.ButtonGroup>
            </S.ContainerModal>
            <S.Overlay onClick={() => dispatch(modalClose())} />
        </S.Modal>
        )
}

export default Modal