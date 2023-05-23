import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomecompleto: 'Samuel Ivanaskas Duarte',
      descricao: 'Contato 1 queo telefone foi adicionado ',
      meio: enums.Meio.TELEFONE,
      status: enums.Status.ADICIONADO,
      titulo: 'Contato adicionado'
    },
    {
      id: 2,
      nomecompleto: 'Enzo Ivanaskas Duarte',
      descricao: 'Contato 2 que foi o email foi removido ',
      meio: enums.Meio.EMAIL,
      status: enums.Status.REMOVIDO,
      titulo: 'Contato do email removido'
    },
    {
      id: 3,
      nomecompleto: 'Henrique Ivanaskas Duarte',
      descricao: 'Contato 3 que foi editado ',
      meio: enums.Meio.TELEFONE,
      status: enums.Status.EDITADO,
      titulo: 'Contato editado'
    }
  ]
}
const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadatrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomecompleto.toLowerCase() ===
          action.payload.nomecompleto.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadatrar } = contatosSlice.actions

export default contatosSlice.reducer
