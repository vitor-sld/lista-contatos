import { useSelector } from "react-redux"
import Contact from "../Contact"
import * as S from './styles'
import { RootReducer } from "../../store"

const getInitial = (name: string) => {
return name.charAt(0)
}

const ContactList = () => {
    const { contatos } = useSelector((state: RootReducer) => state.contatos)
    return (
        <S.Section>
            {contatos.map(item => (
                <Contact name={item.name} initialName={getInitial(item.name)} number={item.name} color={item.color} surname={item.surname} key={item.name} email={item.email}/>
            ))}
        </S.Section>
    )
}

export default ContactList