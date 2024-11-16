import { useState } from "react"
import * as S from "./styles"
import { useDispatch } from "react-redux"
import { modalOpen } from "../../store/reducers/contatos"

const Header = () => {
    const [isRemoveActive, setIsRemoveActive] = useState(true)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <S.HeaderContainer>
                <div className="container">
                    <h1>Agenda de contatos</h1>
                    <nav>
                        {isRemoveActive ? (
                            <>
                                <S.Button onClick={() => dispatch(modalOpen())}>Adicionar contatos</S.Button><S.Button onClick={() => setIsRemoveActive(!isRemoveActive)}>
                                    Remover contatos
                                </S.Button>
                            </>
                        )
                            : (<S.Button onClick={() => setIsRemoveActive(!isRemoveActive)}>Cancelar</S.Button>)}
                    </nav>
                </div>
            </S.HeaderContainer>
        </>
    )
}
export default Header 