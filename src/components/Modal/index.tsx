import { useDispatch, useSelector } from 'react-redux'
import { add, edit, modalClose } from '../../store/reducers/contatos'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { RootReducer } from '../../store'


const Modal = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [color, setColor] = useState('#000000')


    const dispatch = useDispatch()

    const registerContact = (name: string, surname: string, number: string, email: string, color: string) => {
        dispatch(add({ name, surname, number, email, color }))
    }

    const editFunction = (name: string, surname: string, number: string, email: string, color: string) => {
        dispatch(edit({ name, surname, number, email, color }))
    }

    const { isOpen, editContact } = useSelector((state: RootReducer) => state.contatos)

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
                        <S.Input type="number" id="phoneNumber" name="phoneNumber" value={phoneNumber} required onChange={(e) => setPhoneNumber(e.target.value)} />
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