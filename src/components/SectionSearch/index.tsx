import { useDispatch } from "react-redux"
import * as S from "./styles"
import { search } from "../../store/reducers/contatos"

const SectionSearch = () => {
    const dispatch = useDispatch()

    return(
<S.Section>
<div className="container">
    <S.Input type="text" placeholder="Pesquise um contato" onChange={({target}) => dispatch(search(target.value))}/>
</div>
</S.Section>
)}

export default SectionSearch