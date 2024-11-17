import { useState } from "react"
import * as S from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { modalOpen, removeButton } from "../../store/reducers/contatos"
import { RootReducer } from "../../store"

const Header = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const { isRemoveActive } = useSelector((state:RootReducer) => state.contatos)
    const dispatch = useDispatch()

    return (
        <>
            <S.HeaderContainer>
                <div className="container">
                    <h1>Agenda de contatos</h1>
                    <nav>
                        {!isRemoveActive ? (
                            <>
                                <S.Button className="add" onClick={() => dispatch(modalOpen())}>Adicionar contatos</S.Button>
                                <S.Button className="remove" onClick={() => dispatch(removeButton())}>
                                    Remover contatos
                                </S.Button>
                            </>
                        )
                            : (<S.Button className="remove" onClick={() => dispatch(removeButton())}>Cancelar</S.Button>)}
                    </nav>
                </div>
            </S.HeaderContainer>
        </>
    )
}
export default Header 