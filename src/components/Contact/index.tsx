import { useDispatch } from "react-redux"
import * as S from "./styles"
import { modalEditOpen } from "../../store/reducers/contatos"

type Props = {
    name: string
    initialName: string
    surname?: string
    number: string
    color: string
    email: string,
}
type Contato = {
    name: string,
    surname: string,
    number: string,
    email: string,
    color: string
}

const Contact = ({ name, initialName, surname, number, color, email }: Props) => {
    const dispatch = useDispatch()

    const menuEdit = (nameContact: string, surnameContact: string, numberContact: string,emailContact: string, colorContact: string) => {
const contact = {
    name: nameContact,
    surname: surnameContact,
    number: numberContact,
    email: emailContact,
    color: colorContact,
}

dispatch(modalEditOpen(contact))
    }

    return (
        <>
            <S.ContactsSection title={name ? (`${name}`) : 'Contato'}>
                <S.Row >
                    <div>
                        <button>Excluir </button>
                        <S.DivImage style={{ backgroundColor: `${color}`, color: `${color === '#000000' ? color = '#FFF' : '#00000'}` }}> {initialName}</S.DivImage>
                    </div>
                    <S.Infos>
                        <h4>{name} {surname ? (<span>({surname})</span>) : ''}</h4>
                        <span>{number}</span>
                    </S.Infos>
                    <S.MenuButtons>
                        <button>Favoritar</button>
                        <button onClick={() => menuEdit(name, surname || '', number, email || '', color)}>Editar</button>

                    </S.MenuButtons>
                </S.Row>
            </S.ContactsSection>
        </>
    )
}

export default Contact