import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contato = {
    name: string,
    surname: string,
    number: string,
    email: string,
    color: string,
    id: string
}

type State = {
    contatos: Contato[]
    isOpen: boolean,
    editContact: Contato | null,
    isRemoveActive: boolean,
    searchItem?: Contato[] | null

}

const initialState: State = {
    contatos: [],
    isOpen: false,
    editContact: null,
    isRemoveActive: false,
    searchItem: null
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
            state.editContact = null
        },
        modalOpen: (state) => {
            state.isOpen = true
        },
        edit: (state, action: PayloadAction<Contato>) => {
            const index = state.contatos.findIndex((item) => item.id === state.editContact!.id)

            if (state.editContact && index > -1) {
                state.contatos[index] = action.payload;
                
                state.editContact = null
                state.isOpen = false
            }

        },
        modalEditOpen: (state, action: PayloadAction<Contato>) => {
            const index = state.contatos.findIndex((item) => item.id === action.payload.id)
            if (index !== -1) {
                state.isOpen = true
                state.editContact = state.contatos[index]

            }
            else {
                alert('Ocorreu um erro ao editar')
                state.isOpen = false
            }

        },
        remove: (state, action:PayloadAction<string>)=>{
            const stateAtualizado = state.contatos.filter((item, filterIndex) => item.id !== action.payload )
            state.contatos = stateAtualizado
            console.log(state.contatos)
        },
        removeButton: (state) => {
            state.isRemoveActive = !state.isRemoveActive
        },
        search: (state, action:PayloadAction<string>)=>{
            if(action.payload !== ''){
            state.searchItem = state.contatos
            const stateAtualizado = state.searchItem.filter((item) => {
                if(item.name.includes(action.payload.toLocaleLowerCase()) || item.surname.includes(action.payload.toLowerCase())){
                return item
            }
            return ''
        })

            state.searchItem = stateAtualizado
            }
        },
        
    }
})

export const { add, modalClose, modalOpen, edit, modalEditOpen, remove, removeButton, search } = contatos.actions
export default contatos.reducer