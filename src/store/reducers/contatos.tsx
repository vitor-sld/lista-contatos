import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contato = {
    name: string,
    surname: string,
    number: string,
    email: string,
    color: string
}

type State = {
    contatos: Contato[]
    isOpen: boolean,
    editContact: Contato | null
}

const initialState: State = {
    contatos: [],
    isOpen: false,
    editContact: null
}

const contatos = createSlice({
    name: 'contatosReducer',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Contato>) => {
            const index = state.contatos.findIndex(item => item.name === action.payload.name)
            if (index === -1) {
                state.contatos.push(action.payload);
                state.isOpen = false;

            } else {
                console.log("Contato já existe:", state.contatos[index]);
            }
        },
        modalClose: (state) => {
            state.isOpen = false
        },
        modalOpen: (state) => {
            state.isOpen = true
        },
        edit: (state, action: PayloadAction<Contato>) => {
            const index = state.contatos.findIndex((item) => item.name === action.payload.name)
            console.log(state.editContact)

            if (state.editContact && index > -1) {
                state.contatos[index] = action.payload;
                
                state.editContact = null
                state.isOpen = false
            }

        },
        modalEditOpen: (state, action: PayloadAction<Contato>) => {
            const index = state.contatos.findIndex((item) => item.name === action.payload.name)
            if (index !== -1) {
                state.isOpen = true

            }
            else {
                alert('Ocorreu um erro ao editar')
                state.isOpen = false
            }

        }
    }
})

export const { add, modalClose, modalOpen, edit, modalEditOpen } = contatos.actions
export default contatos.reducer