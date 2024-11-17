import { useSelector } from "react-redux"
import Contact from "../Contact"
import * as S from './styles'
import { RootReducer } from "../../store"

const getInitial = (name: string) => {
return name.charAt(0)
}

const ContactList = () => {
    const { contatos, searchItem } = useSelector((state: RootReducer) => state.contatos)
    return (
        <S.Section>
            {searchItem == null && contatos.length == 0 && (<p style={{textAlign: 'center'}}>Cadastre o primeiro Contato</p>)}


            {searchItem ? (searchItem.map(item => (
                <Contact name={item.name} initialName={getInitial(item.name)} number={item.number} color={item.color} surname={item.surname} key={item.name} email={item.email} id={item.id}/>))) : (contatos.map(item => (
                <Contact name={item.name} initialName={getInitial(item.name)} number={item.number} color={item.color} surname={item.surname} key={item.name} email={item.email} id={item.id}/>)
            ))}
        </S.Section>
    )
}

export default ContactList